import type { Writable } from 'svelte/store';
import type { Dataset } from './data';

export interface CustomWritable<T> extends Omit<Writable<T>, 'set'> {
  // force defining subscriber and update, but make set optional
  set?(this: void, value: T): void;
}

export interface ChecklistStore extends CustomWritable<Dataset> {
  setArcane(blockId: string, index: number, owned: number): void;
  toggleItem(blockId: string, index: number, checked?: boolean): void;
  changeMoney(amount: number): void;
}
