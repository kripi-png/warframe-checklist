import { writable } from 'svelte/store';
import type { ChecklistStore, Dataset, PersistedData, PersistedItem } from './types/data';
import type { Arcane } from './types/item';
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

const stripStaticData = (data: Dataset): PersistedData => ({
  blocks: data.blocks.map((block) => ({
    // keep other properties, rewrite items
    ...block,
    items: block.items.map((item, i) => {
      const obj: PersistedItem = {
        id: `${block.id}_${i}`,
        checked: item.checked,
      };

      if (block.type === 'arcane') {
        obj.currentLevel = (<Arcane>item).currentLevel;
        obj.ownedCount = (<Arcane>item).ownedCount;
      }
      return obj;
    }),
  })),
});

/*
TODO:
- Move from block.id to {[block.id]: blockData}
  - instead of blocks.find() -> blocks[block.id]
*/
const mergeData = (key: string, persistableValue: PersistedData): Dataset => {
  const staticData = getDataset(key);
  const merged = staticData.blocks.map((block) => ({
    ...block,
    items: block.items.map((item, i) => ({
      ...item,
      ...persistableValue.blocks.find((b) => b.id === block.id)?.items[i],
    })),
  }));
  return {
    blocks: merged,
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
    persistableValue = item ? JSON.parse(item) : stripStaticData(getDataset(key));
  } catch (error) {
    console.error(error);
    persistableValue = stripStaticData(getDataset(key));
  }

  const { subscribe, update: internalUpdate } = writable<Dataset>(mergeData(key, persistableValue));

  const save = (newData: Dataset) => {
    try {
      const json = JSON.stringify(stripStaticData(newData));
      storageArea?.setItem(key, json);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleItem = (blockId: string, index: number, checked?: boolean) => {
    // toggle item with index {index} in block {blockId}
    // if {checked} is defined, set the item's checked state to {checked} (force the checked state)
    internalUpdate((data) => {
      try {
        const blockIndex = data.blocks.findIndex((b) => b.id === blockId);
        if (blockIndex === -1) {
          console.error(`Not found block for id ${blockId}`);
          return data;
        }

        const block = data.blocks[blockIndex];
        const item = block.items[index];
        if (!item) {
          console.error(`Not found item for index ${index} in block ${blockId}`);
          return data;
        }

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
        const blockIndex = data.blocks.findIndex((b) => b.id === blockId);
        if (blockIndex === -1) {
          console.error(`Not found block for id ${blockId}`);
          return data;
        }

        const block = data.blocks[blockIndex];
        const arcane = block.items[index];
        if (!arcane) {
          console.error(`Not found arcane for index ${index} in block ${blockId}`);
          return data;
        }

        block.items[index].ownedCount = owned;
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

export const deconstructItemId = (id: string): [number, string] => {
  // turn ids like nokko_weapons_25 or arcanes_2 into [25, 'nokko_weapons'] and [2, 'arcanes']
  const parts = id.split('_');
  const item = Number(parts.pop());
  const block = parts.join('_');
  return [item, block];
};
