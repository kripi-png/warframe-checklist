import type { Arcane, Item, PersistedArcane, PersistedItem } from './item';

interface DatasetBlockBase<T, Type extends 'item' | 'arcane'> {
  id: string;
  title: string;
  type: Type;
  items: T[];
}

export type DatasetBlock = DatasetBlockBase<Item, 'item'> | DatasetBlockBase<Arcane, 'arcane'>;
export interface Dataset {
  money: number;
  blocks: DatasetBlock[];
}

/* localStorage persistables */
export type PersistedBlock =
  | DatasetBlockBase<PersistedItem, 'item'>
  | DatasetBlockBase<PersistedArcane, 'arcane'>;

export interface PersistedData {
  money: number;
  blocks: PersistedBlock[];
}
