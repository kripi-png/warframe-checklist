import type { Arcane, ItemEntry, PersistedArcane, PersistedItem } from './types/item';

export const getArcaneMaxCount = (maxLevel: number): number => {
  return maxLevel === 5 ? 21 : 10;
};

export const isArcane = (item: ItemEntry | PersistedItem): item is Arcane | PersistedArcane =>
  Object.hasOwn(item, 'maxLevel');
