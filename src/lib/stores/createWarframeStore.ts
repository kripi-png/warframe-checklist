import { PersistedState } from 'runed';
import type { AcquisitionPage, AcquisitionState, Cost, Item, PageSection, SectionItem } from '$lib/data/types';


export function createWarframeStore(
  key: string,
  data: AcquisitionPage,
  items: Item[],
  initialBalance: Cost[] = []
) {
  const state = new PersistedState<AcquisitionState>(key, {
    balance: initialBalance,
    acquired: {},
  });

  return {
    get data() {
      return data;
    },

    get items() {
      return items;
    },

    get balance() {
      return state.current.balance;
    },

    getItem(itemId: string): Item | undefined {
      return this.items.find((item) => item.id === itemId);
    },

    getSectionItem(
      itemId: string,
      section?: PageSection,
    ): SectionItem | undefined {
      // if section is defined, search for the item in that section
      // otherwise loop through all sections to find the item
      if (section) {
        return section.items.find((item) => item.itemId === itemId);
      }

      for (const section of this.data.sections) {
        const item = section.items.find((item) => item.itemId === itemId);
        if (item) return item;
      }

      return undefined;
    },

    getAcquired(itemId: string) {
      return state.current.acquired[itemId] ?? 0;
    },

    setAcquired(itemId: string, count: number) {
      if (count < 0)
        throw new Error(
          'Cannot set acquired count to a negative value: ' + itemId,
        );

      state.current = {
        ...state.current,
        acquired: {
          ...state.current.acquired,
          [itemId]: count,
        },
      };
    },

    addAcquired(itemId: string, count: number) {
      const acquired = this.getAcquired(itemId);

      state.current = {
        ...state.current,
        acquired: {
          ...state.current.acquired,
          [itemId]: acquired + count,
        },
      };
    },

    isAcquired(itemId: string) {
      return this.getAcquired(itemId) > 0;
    },

    isCompleted(itemId: string) {
      const required = this.getRequiredToComplete(itemId);
      const owned = this.getAcquired(itemId);
      return owned >= required;
    },

    getRequiredToComplete(itemId: string): number {
      // get the higher of the two possible requirements
      return Math.max(
        this.getItem(itemId)?.amountNeeded ?? 1,
        this.getSectionItem(itemId)?.amountNeeded ?? 1,
      );
    },

    setBalance(balance: Cost) {
      state.current = {
        ...state.current,
        balance: state.current.balance.map((prevBalance) =>
          prevBalance.resourceId === balance.resourceId
            ? { ...balance, quantity: balance.quantity }
            : prevBalance,
        ),
      };
    },

    reset() {
      state.current = {
        acquired: {},
        balance: initialBalance,
      };
    },

    canAfford(itemId: string) {
      const costs = this.getSectionItem(itemId)?.cost;
      if (!costs) return false;

      // loop through user's balance and compare the items to item cost object
      for (const balance of state.current.balance) {
        const _cost = costs.find(
          (cost) => cost.resourceId === balance.resourceId,
        );
        if (!_cost) return false;
        if (_cost.quantity > balance.quantity) return false;
      }

      return true;
    },

    purchase(itemId: string, count: number = 1): boolean {
      const item = this.getSectionItem(itemId);

      if (!item?.cost || !this.canAfford(itemId)) return false;

      const acquired = state.current.acquired[itemId] ?? 0;

      const balance = state.current.balance.map((balance) => {
        const cost = item.cost!.find(
          (cost) => cost.resourceId === balance.resourceId,
        );
        return cost
          ? {
              ...balance,
              quantity: balance.quantity - cost.quantity,
            }
          : balance;
      });

      state.current = {
        ...state.current,
        balance,
        acquired: {
          ...state.current.acquired,
          [itemId]: acquired + count,
        },
      };

      return true;
    },

    getTotalNeeded(): Record<string, number> {
      /* Return total costs of all INCOMPLETE items in the store */
      return this.data.sections.reduce((acc, section) => {
        for (const item of section.items) {
          if (!item.cost || this.isCompleted(item.itemId)) continue;

          for (const cost of item.cost) {
            if (!Object.hasOwn(acc, cost.resourceId)) {
              acc[cost.resourceId] = 0;
            }
            acc[cost.resourceId] += cost.quantity * this.getRequiredToComplete(item.itemId);
          }
        }
        return acc;
      }, {} as Record<string, number>);
    },
  };
}

export type WarframeStore = ReturnType<typeof createWarframeStore>;
