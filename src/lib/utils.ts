import type { Arcane, ItemEntry } from './types/item';

export const getArcaneMaxCount = (maxLevel: number): number => {
  return maxLevel === 5 ? 21 : 10;
};

export const isArcane = (item: ItemEntry): item is Arcane => Object.hasOwn(item, 'maxLevel');
