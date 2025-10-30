import type { TArcane, TGeneralItem, TGeneralMoney } from './types/data';

export const getArcaneCountForMax = (maxLevel: number): number => {
  return maxLevel === 5 ? 21 : 10;
};

export const calculateArcaneLevel = (count: number) => {
  if (count >= 21) return 5;
  else if (count >= 15) return 4;
  else if (count >= 10) return 3;
  else if (count >= 6) return 2;
  else if (count >= 3) return 1;
  else if (count < 3 && count >= 0) return 0;
  throw new Error('Invalid Arcane Count: ' + count);
};

export const isArcane = (item: TGeneralItem): item is TArcane<TGeneralMoney> =>
  Object.hasOwn(item, 'maxLevel');
