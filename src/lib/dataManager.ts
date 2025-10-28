import type { Arcane, Item, ItemEntry } from './types/item';
import type { ChecklistStore } from './types/store';
import type { Dataset, DatasetBlock, PersistedBlock, PersistedData } from './types/data';
import { writable } from 'svelte/store';
import { getArcaneMaxCount, isArcane } from './utils';
import nokko from './nokko.json';

interface DatasetMap {
  [key: string]: Dataset;
}

const datasetMap: DatasetMap = {
  nokko: nokko as Dataset,
};

function getDataset(key: string): Dataset {
  if (!Object.hasOwn(datasetMap, key)) {
    throw new Error(`Unknown dataset key: ${key}`);
  }
  return datasetMap[key];
}

const toPersistedData = (data: Dataset): PersistedData => {
  // take out static data (title, maxLevel, price) from the dataset items
  // to create a new, smaller dataset saved to localStorage
  return {
    blocks: data.blocks.map((block) => {
      const persistedBlock = {
        ...block,
        items: block.items.map((item, i) => ({
          id: i,
          checked: item.checked,
        })),
      };

      if (block.type === 'arcane') {
        persistedBlock.items = persistedBlock.items.map((item, i) => ({
          ...item,
          currentLevel: block.items[i].currentLevel,
          ownedCount: block.items[i].ownedCount,
        }));
      }
      return persistedBlock as PersistedBlock;
    }),
  };
};

const mergeData = (key: string, persistableValue: PersistedData): Dataset => {
  // use the original data but replace defaults user related info
  const staticData = getDataset(key);
  return {
    blocks: staticData.blocks.map((block, bi) => {
      const persistedBlock = persistableValue.blocks[bi];

      if (persistedBlock.type === 'item') {
        return {
          ...block,
          type: 'item' as const,
          items: block.items.map((item, i) => ({
            ...(<Item>item),
            checked: persistedBlock.items[i].checked ?? false,
          })),
        };
      }

      if (persistedBlock.type === 'arcane') {
        return {
          ...block,
          type: 'arcane' as const,
          items: block.items.map((item, i) => ({
            ...(<Arcane>item),
            checked: persistedBlock.items[i].checked ?? false,
            ownedCount: persistedBlock.items[i].ownedCount ?? 0,
            currentLevel: persistedBlock.items[i].currentLevel ?? 0,
          })),
        };
      }

      return block;
    }),
  };
};

export function createChecklistStore(key: string): ChecklistStore {
  // wrapper for the writable store that also takes care of persisting the state in localStorage
  // as well as mapping the persisted, partial data to the full data
  const browser = typeof window !== 'undefined' && typeof document !== 'undefined';
  const storageArea = browser ? localStorage : null;

  let persistableValue: PersistedData;
  try {
    const item = storageArea?.getItem(key);
    persistableValue = item ? JSON.parse(item) : toPersistedData(getDataset(key));
  } catch (error) {
    console.error(error);
    persistableValue = toPersistedData(getDataset(key));
  }

  const { subscribe, update: internalUpdate } = writable<Dataset>(mergeData(key, persistableValue));

  const save = (newData: Dataset) => {
    try {
      const json = JSON.stringify(toPersistedData(newData));
      storageArea?.setItem(key, json);
    } catch (error) {
      console.error(error);
    }
  };

  const getItemAndBlockIndex = (
    data: Dataset,
    blockId: string,
    itemIndex: number,
  ): [ItemEntry, DatasetBlock, number] | undefined => {
    try {
      const blockIndex = data.blocks.findIndex((b) => b.id === blockId);
      if (blockIndex === -1) {
        console.error(`Not found block for id ${blockId}`);
        return;
      }

      const block = data.blocks[blockIndex];
      const item = block.items[itemIndex];
      if (!item) {
        console.error(`Not found item for index ${itemIndex} in block ${blockId}`);
        return;
      }

      return [item, block, blockIndex];
    } catch (error) {
      console.error(error);
    }
  };

  const toggleItem = (blockId: string, index: number, checked?: boolean) => {
    // toggle item with index {index} in block {blockId}
    // if {checked} is defined, set the item's checked state to {checked} (force the checked state)
    internalUpdate((data) => {
      try {
        const info = getItemAndBlockIndex(data, blockId, index);
        if (!info) return data;
        const [item, block, blockIndex] = info;

        block.items[index].checked = checked ?? !item.checked;
        data.blocks[blockIndex] = block;

        save(data); // localStorage
        return data;
      } catch (error) {
        console.error(error);
        return data;
      }
    });
  };

  const setArcane = (blockId: string, index: number, owned: number) => {
    internalUpdate((data) => {
      try {
        const info = getItemAndBlockIndex(data, blockId, index);
        if (!info) return data;
        const [item, block, blockIndex] = info;
        if (!isArcane(item)) return data;

        item.ownedCount = owned;
        item.checked = owned >= getArcaneMaxCount(item.maxLevel);

        block.items[index] = item;
        data.blocks[blockIndex] = block;

        save(data); // localStorage
        return data;
      } catch (error) {
        console.error(error);
        return data;
      }
    });
  };

  return {
    setArcane,
    toggleItem,
    subscribe,
    update: internalUpdate,
  };
}
