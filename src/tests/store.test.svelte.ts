import type { Cost, Item } from '$lib/data/types';
import { CURRENT_VERSION } from '$lib/migrations';
import {
  createWarframeStore,
  type WarframeStore,
} from '$lib/stores/createWarframeStore';
import { beforeEach, describe, expect, it } from 'vitest';

const coin = (quantity: number, resourceId: string = 'coin'): Cost[] => [
  { resourceId, quantity },
];

const testStoreData = {
  id: 'test',
  name: 'test',
  sections: [
    {
      id: 'test-section',
      name: 'testing',
      items: [
        { itemId: 'test1', cost: coin(10) },
        { itemId: 'test2', cost: coin(20), amountNeeded: 2 },
        { itemId: 'warframe-part', cost: coin(20) },
      ],
    },
  ],
};

const items: Item[] = [
  { id: 'test1', type: 'other' },
  { id: 'test2', type: 'other' },
  { id: 'warframe-part', type: 'warframe-part' },
];

describe('wareframe store', () => {
  let store: WarframeStore;

  beforeEach(() => {
    // recreating store alone won't clear the existing persisted data
    localStorage.clear();
    store = createWarframeStore('test', testStoreData, items);
  });

  describe('store', () => {
    it('method: correct properties when created', () => {
      expect(store).toHaveProperty('balance');
      expect(store).toHaveProperty('history');
      expect(store.version).toBe(CURRENT_VERSION);
      expect(localStorage.getItem('test'));
    });

    it('method: getItem', () => {
      expect(store.getSectionItem('test1')?.cost).toHaveLength(1);
    });

    it('method: getRequiredToComplete', () => {
      expect(store.getRequiredToComplete('test2', false)).toBe(2);
    });

    it('method: getTotalNeeded', () => {
      expect(store.getTotalNeeded(false)['coin']).toBe(10 + 20 * 2 + 20);
    });

    it('method: getTotalNeeded helminth', () => {
      expect(store.getRequiredToComplete('warframe-part', true)).toBe(2); // with helminth
      expect(store.getRequiredToComplete('warframe-part', false)).toBe(1); // withouth helminth
    });
  });

  describe('history', () => {
    it('can be removed', () => {
      store.addHistory({ id: '1', duration: 60, rewards: coin(60) });
      expect(store.history).toHaveLength(1);
      store.removeHistory('1');
    });

    it('has maximum of 20', () => {
      for (let i = 0; i < 21; i++) {
        store.addHistory({ id: i.toString(), duration: 0, rewards: coin(0) });
      }
      expect(store.history).toHaveLength(20);
    });

    it('average per minute (integers)', () => {
      store.addHistory({ id: '1', duration: 60, rewards: coin(60) });
      store.addHistory({ id: '2', duration: 120, rewards: coin(120) });

      expect(store.getTotalAveragePerMinute('coin')).toEqual({
        resourceId: 'coin',
        quantity: 60,
      });
    });
  });

  it('returns false when there is no history', () => {
    expect(store.getTotalAveragePerMinute('coin')).toBe(false);
  });

  it('average per minute (integers)', () => {
    store.addHistory({ id: '1', duration: 60, rewards: coin(30) });
    store.addHistory({ id: '2', duration: 120, rewards: coin(120) });

    expect(store.getTotalAveragePerMinute('coin')).toHaveProperty(
      'quantity',
      50,
    );
  });

  it('treats missing rewards as zero', () => {
    store.addHistory({ id: '1', duration: 60, rewards: coin(60) });
    store.addHistory({ id: '2', duration: 60, rewards: coin(0) });

    expect(store.getTotalAveragePerMinute('coin')).toEqual({
      resourceId: 'coin',
      quantity: 30,
    });
  });
});
