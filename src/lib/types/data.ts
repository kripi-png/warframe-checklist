// interface JSONData {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// }

import type { Writable } from 'svelte/store';
import type { ItemEntry } from './item';

export interface DatasetBlock<T = ItemEntry> {
  title: string;
  id: string;
  type: 'item' | 'arcane';
  items: T[];
}

export interface Dataset {
  blocks: DatasetBlock<ItemEntry>[];
}

export interface CustomWritable<T> extends Omit<Writable<T>, 'set'> {
  // force defining subscriber and update, but make set optional
  set?(this: void, value: T): void;
}

export interface ChecklistStore extends CustomWritable<Dataset> {
  setArcane(blockId: string, index: number, owned: number): void;
  toggleItem(blockId: string, index: number): void;
}

/* Persisted* types are for data stored in localStorage.
 * They consist of simpler, user-specific data and an id
 * which are used to map them to the original data.
 */
export interface PersistedData {
  blocks: DatasetBlock<PersistedItem>[];
}

export interface PersistedItem {
  id: string;
  checked: boolean;
  currentLevel?: number;
  ownedCount?: number;
}
