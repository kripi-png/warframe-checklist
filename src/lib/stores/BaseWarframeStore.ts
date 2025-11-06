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

  public addItemCount(itemId: ItemId, count: number) {
    const item = this._getItem(itemId);
    if (isArcane(item)) {
      this.setItemCount(itemId, item.ownedCount + count);
    } else {
      this.setItemCount(itemId, count);
    }
  }
}

export default BaseWarframeStore;
