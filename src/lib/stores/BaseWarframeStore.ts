import { PersistedState } from 'runed';
import type {
  DatasetBase,
  ItemId,
  TGeneralBlock,
  TGeneralItem,
  TGeneralMoney,
} from '$lib/types/data';
import {
  calculateArcaneLevel,
  getArcaneCountForMax,
  isArcane,
} from '$lib/utils';

/*
 * Includes basic methods for modifying values in the localStorage and PersistedState
 */
class PersistedStateManager<Money extends TGeneralMoney> extends PersistedState<
  DatasetBase<Money>
> {
  constructor(key: string, initialData: DatasetBase<Money>) {
    super(key, initialData);
  }

  // ---- GETTERS & SETTERS ----
  get balance(): Money {
    return this.current.money;
  }

  private set balance(newBalance: Money) {
    this.current.money = newBalance;
  }

  get blocks(): typeof this.current.blocks {
    return this.current.blocks;
  }

  private set blocks(newBlocks: TGeneralBlock<Money>[]) {
    this.current.blocks = newBlocks;
  }

  protected _changeBalance(newBalance: Money) {
    this.balance = newBalance;
  }

  protected _removeBalance(amount: Money) {
    if (Array.isArray(this.balance) && Array.isArray(amount)) {
      const newA = this.balance[0] - amount[0];
      const newB = this.balance[1] - amount[1];
      this._changeBalance([newA, newB] as Money);
    }
    if (typeof this.balance === 'number' && typeof amount === 'number') {
      this._changeBalance((this.balance - amount) as Money);
    }
  }

  protected _setItem(itemId: ItemId, newItem: TGeneralItem<Money>) {
    const [blockIndex, itemIndex] = this._parseItemId(itemId);
    this.current.blocks[blockIndex].items[itemIndex] = newItem;
  }

  protected _setItemChecked(itemId: ItemId, checked: boolean) {
    const [blockIndex, itemIndex] = this._parseItemId(itemId);
    this.current.blocks[blockIndex].items[itemIndex].checked = checked;
  }

  protected _getItem(itemId: ItemId): TGeneralItem<Money> {
    const [blockIndex, itemIndex] = this._parseItemId(itemId);
    const item = this.current.blocks[blockIndex].items[itemIndex];
    return item;
  }

  protected _getItemCount(itemId: ItemId): number {
    const item = this._getItem(itemId);
    if (isArcane(item)) {
      return item.ownedCount;
    }
    return item.checked ? 1 : 0;
  }

  private _parseItemId(itemId: ItemId): [number, number] {
    const [blockIndex, itemIndex] = itemId.split('_').map(Number);
    return [blockIndex, itemIndex];
  }
}

class BaseWarframeStore<
  Money extends TGeneralMoney,
> extends PersistedStateManager<Money> {
  constructor(key: string, initialData: DatasetBase<Money>) {
    super(key, initialData);
  }

  public canAfford<M extends TGeneralMoney>(balance: M, price: M): boolean {
    if (Array.isArray(balance) && Array.isArray(price)) {
      const affordA = balance[0] >= price[0];
      const affordB = balance[1] >= price[1];
      return affordA && affordB;
    }
    if (typeof balance === 'number' && typeof price === 'number') {
      return balance >= price;
    }
    throw new Error('Invalid money type');
  }

  public setBalance(newBalance: Money) {
    this._changeBalance(newBalance);
  }

  public buyItem(itemId: ItemId) {
    const item = this._getItem(itemId);

    if (!this.canAfford(this.balance, item.price)) {
      return false;
    }

    this.setItemCount(itemId, this._getItemCount(itemId) + 1);
    this._removeBalance(item.price);
  }

  public toggleItem(itemId: ItemId) {
    const item = this._getItem(itemId);
    this._setItemChecked(itemId, !item.checked);
  }

  public setItemCount(itemId: ItemId, count: number) {
    const item = this._getItem(itemId);

    if (isArcane(item)) {
      item.ownedCount = count;
      item.currentLevel = calculateArcaneLevel(count);

      const countForMax = getArcaneCountForMax(item.maxLevel);
      if (count >= countForMax) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      this._setItem(itemId, item);
    } else {
      if (count > 0) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      this._setItem(itemId, item);
    }
  }

  // private getBlock(blockIndexOrId: number | string): {
  //   index: number;
  //   block: TGeneralBlock<Money>;
  // } {
  //   let index: number;
  //   if (typeof blockIndexOrId === 'number') {
  //     index = blockIndexOrId;
  //   } else {
  //     index = this.blocks.findIndex((block) => block.id === blockIndexOrId);
  //   }
  //   if (index >= 0) return { index, block: this.blocks[index] };
  //   throw new Error(`Block not found with id or index: ${blockIndexOrId}`);
  // }

  // ------ PUBLIC METHODS --------
  // public chargeBalance(price: Money) {
  //   this.balance = this.#removeMoney(this.balance, price);
  // }

  // public setBalance(newBalance: Money) {
  //   this.balance = newBalance;
  // }

  // public setArcaneCount(itemId: ItemId, count: number) {
  //   const [blockIndex, itemIndex] = this.#parseId(itemId);
  //   this.#setItemCount(blockIndex, itemIndex, count);
  // }

  // public buyItem(itemId: ItemId) {
  //   const [blockIndex, itemIndex] = this.#parseId(itemId);
  //   const item = this.#getItemById(blockIndex, itemIndex);
  //   if (!item || !this.canAfford(this.balance, item.price)) return;

  //   this.chargeBalance(item.price);

  //   if (isArcane(item)) {
  //     const newCount = item.ownedCount + 1;
  //     this.#setItemCount(blockIndex, itemIndex, newCount);
  //   } else {
  //     this.toggleItem(blockIndex, itemIndex, true);
  //   }
  // }

  // public toggleItem(itemId: ItemId, checked?: boolean) {
  //   const [blockIndex, itemIndex] = this.#parseId(itemId);
  //   const item = this.#getItemById(blockIndex, itemIndex);
  //   if (!item || isArcane(item)) return;

  //   // convert status to a number (true = 1, false = 0)
  //   this.#setChecked(blockIndex, itemIndex, checked ?? !item.checked);
  // }

  // public resetData() {
  //   this.current = this.initialData;
  // }

  // ------ PRIVATE METHODS --------
  // #setItemCount(blockIndex: number, itemIndex: number, newCount: number) {
  //   const item = this.#getItemById(blockIndex, itemIndex);
  //   if (!item) return;

  //   if (isArcane(item)) {
  //     item.ownedCount = newCount;
  //     item.currentLevel = calculateArcaneLevel(newCount);
  //     // if user has enough arcanes for max level, mark it checked
  //     const countNeeded = getArcaneCountForMax(item.maxLevel);
  //     if (countNeeded <= newCount) item.checked = true;
  //     else item.checked = false;

  //     // save changes
  //     this.#replaceItemAt(blockIndex, itemIndex, item);
  //   } else {
  //     if (newCount > 0) this.#setChecked(blockIndex, itemIndex, true);
  //     else this.#setChecked(blockIndex, itemIndex, false);
  //   }
  // }

  // commented out for biome to stop crying
  // #addMoney<M extends TGeneralMoney>(a: M, b: M): M {
  //   if (Array.isArray(a) && Array.isArray(b)) {
  //     return [a[0] + b[0], a[1] + b[1]] as M;
  //   }
  //   if (typeof a === 'number' && typeof b === 'number') {
  //     return (a + b) as M;
  //   }
  //   throw new Error('Invalid money type');
  // }

  // #removeMoney<M extends TGeneralMoney>(a: M, b: M): M {
  //   if (Array.isArray(a) && Array.isArray(b)) {
  //     return [a[0] - b[0], a[1] - b[1]] as M;
  //   }
  //   if (typeof a === 'number' && typeof b === 'number') {
  //     return (a - b) as M;
  //   }
  //   throw new Error('Invalid money type');
  // }
}

export default BaseWarframeStore;
