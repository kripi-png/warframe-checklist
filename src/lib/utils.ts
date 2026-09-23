import type { Item, PageSection } from "./data/types";

export const getArcaneLevel = (count: number) => {
  if (count >= 21) return 5;
  else if (count >= 15) return 4;
  else if (count >= 10) return 3;
  else if (count >= 6) return 2;
  else if (count >= 3) return 1;
  else if (count < 3 && count >= 0) return 0;
  throw new Error('Invalid Arcane Count: ' + count);
};

export const isArcane = (item: Item | undefined): boolean => item?.type === 'arcane';
