// 1. Attempt loading data from localStorage by key (page url?)
// 2. If data does not exist, generate it based on the raw data
//  2.1 item entries should have index for id instead of the "name" and "price" field

interface JSONData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Item {
  name: string;
  wikiUrl: string;
  price: number;
  checked: boolean;
  forHelminth?: boolean;
}

export interface Arcane {
  name: string;
  price: number;
  maxLevel: 5;
  currentLevel: 0 | 1 | 2 | 3 | 4 | 5;
  ownedCount: number;
  wikiUrl: string;
  checked: boolean;
}

interface DatasetBlock {
  title: string;
  id: string;
  type: 'item' | 'arcane';
  items: Item[] | Arcane[];
}

interface Dataset {
  blocks: DatasetBlock[];
}

export interface PersistedItem {
  id: string;
  checked: boolean;
  currentLevel?: number;
  ownedCount?: number;
}

import _dataset from './dataset.json';
const dataset = _dataset as JSONData;

export function prepareInitialData(key: string) {
  // strip static information out of the data, and only store
  // an id and user-specific data (ownedCount, checked, etc.) to localStorage
  const data: Dataset = dataset[key];
  const persistedData = data.blocks.map((block) => {
    const { id: blockId, items, type } = block;
    const persistedItems = items.map((item, i) => {
      const { checked } = item;

      const obj: PersistedItem = {
        id: `${blockId}_${i}`,
        checked,
      };

      if (type === 'arcane') {
        const { currentLevel, ownedCount } = item as Arcane;
        obj.currentLevel = currentLevel;
        obj.ownedCount = ownedCount;
      }

      return obj;
    });

    return { ...block, items: persistedItems };
  });

  return { blocks: persistedData };
}

export const deconstructItemId = (id: string): [number, string] => {
  const parts = id.split('_');
  const item = Number(parts.pop());
  const block = parts.join('_');
  return [item, block];
};

export const getItemData = (key: string, id: string): Item | Arcane | null => {
  const [itemId, blockId] = deconstructItemId(id);

  const block = dataset[key].blocks.find((block: DatasetBlock) => block.id === blockId);
  if (!block) {
    console.error(`Block not found for id ${blockId}`);
    return null;
  }

  if (itemId < 0 || itemId >= block.items.length) {
    console.error(`Item not found in ${block.id} for id ${itemId}`);
    return null;
  }

  return block.items[itemId];
};

// function getStorage() {
//   return {
//     getItem: (k) => localStorage.getItem(k),

//     setItem: (k, v) => localStorage.setItem(k, v),
//   };
// }

// export function persistedState(key, initialValue) {
//   const browser = typeof window !== 'undefined' && typeof document !== 'undefined';
//   const storageArea = browser ? getStorage() : null;

//   let storedValue;
//   try {
//     const item = storageArea?.getItem(key);

//     storedValue = item ? JSON.parse(item) : initialValue;
//   } catch (error) {
//     console.error(error);
//     storedValue = initialValue;
//   }

//   let state = $state(storedValue);
//   function updateStorage(value) {
//     try {
//       storageArea?.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   $effect.root(() => {
//     $effect(() => {
//       updateStorage(state);
//     });

//     return () => {};
//   });

//   return {
//     set value(newValue) {
//       state = newValue;
//     },
//     get current() {
//       return state;
//     },
//     reset() {
//       state = initialValue;
//     },
//   };
// }
