import type {
  AcquisitionPage,
  AcquisitionState,
  Cost,
  HistoryEntry,
  Item,
  PageSection,
  SectionItem,
} from '$lib/data/types';
import { PersistedState } from 'runed';
import { CURRENT_VERSION, migrate } from '$lib/migrations';

export function createWarframeStore(
  key: string,
  data: AcquisitionPage,
  items: Item[],
  initialBalance: Cost[] = [],
) {
  const initialState = {
    version: CURRENT_VERSION,
    balance: initialBalance,
    acquired: {},
    history: [],
  };

  const state = new PersistedState<AcquisitionState>(key, initialState);

  state.current = migrate(state.current);

  return {
    get data() {
      return data;
    },

    get items() {
      return items;
    },

    get history() {
      return state.current.history;
    },

    get balance() {
      return state.current.balance;
    },

    get version() {
      return state.current.version;
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

    isCompleted(itemId: string, includeHelminth: boolean) {
      const required = this.getRequiredToComplete(itemId, includeHelminth);
      const owned = this.getAcquired(itemId);
      return owned >= required;
    },

    getRequiredToComplete(itemId: string, includeHelminth: boolean): number {
      const isWarframePart = this.getItem(itemId)?.type === 'warframe-part';

      // get the higher of the two possible requirements
      // add one for helminth if the setting is turned on
      return (
        Math.max(
          this.getItem(itemId)?.amountNeeded ?? 1,
          this.getSectionItem(itemId)?.amountNeeded ?? 1,
        ) + (isWarframePart && includeHelminth ? 1 : 0)
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
      state.current = { ...initialState };
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

    getTotalNeeded(
      includeHelminth: boolean,
      section?: PageSection,
    ): Record<string, number> {
      /* Return total costs of all INCOMPLETE items in the store */
      const sections = section ? [section] : this.data.sections;

      return sections.reduce(
        (acc, section) => {
          for (const item of section.items) {
            if (!item.cost || this.isCompleted(item.itemId, includeHelminth))
              continue;

            const required = this.getRequiredToComplete(
              item.itemId,
              includeHelminth,
            );
            const acquired = this.getAcquired(item.itemId);
            const moreNeeded = Math.max(0, required - acquired);

            for (const cost of item.cost) {
              if (!Object.hasOwn(acc, cost.resourceId)) {
                acc[cost.resourceId] = 0;
              }
              acc[cost.resourceId] += cost.quantity * moreNeeded;
            }
          }
          return acc;
        },
        {} as Record<string, number>,
      );
    },

    addHistory(entry: HistoryEntry) {
      state.current = {
        ...state.current,
        history: [entry, ...state.current.history.slice(0, 19)], // new entry + 19 previous
      };
    },

    removeHistory(entryId: string) {
      state.current = {
        ...state.current,
        history: this.history.filter((entry) => entry.id !== entryId),
      };
    },

    getTotalAveragePerMinute(resourceId: string): Cost | false {
      let totalQuantity = 0;
      let totalDuration = 0;

      for (const entry of this.history) {
        const cost = entry.rewards.find(
          (cost) => cost.resourceId === resourceId,
        );

        if (cost === undefined) continue;

        totalDuration += entry.duration;
        totalQuantity += cost.quantity;
      }

      if (totalDuration === 0) return false;

      return {
        resourceId: resourceId,
        quantity: totalQuantity / (totalDuration / 60),
      };
    },
  };
}

export type WarframeStore = ReturnType<typeof createWarframeStore>;
