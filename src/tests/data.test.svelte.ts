import { describe, expect, it } from 'vitest';
import * as STORES from '$lib/stores/WarframeStores';
import { CURRENT_VERSION } from '$lib/migrations';
import { itemName } from '$lib/utils';

describe('warframe stores', () => {
  it('initiates', () => {
    for (const store of Object.values(STORES)) {

      expect(store.version).toEqual(CURRENT_VERSION);
      store.balance
        .map((bal) => bal.quantity)
        .forEach((x) => expect(x).toBeTypeOf('number'));
    }
    // each store should be persisted in localStorage
    expect(localStorage).toHaveLength(Object.values(STORES).length);
  });

  it('has translations', () => {
    for (const store of Object.values(STORES)) {
      store.balance.forEach((cost) =>
        expect(itemName(cost.resourceId)).not.toEqual(cost.resourceId),
      );
      store.items.forEach((item) => {
        expect(itemName(item.id)).not.toEqual(item.id);
      });
    }
  });
});
