import type { Cost, Item } from './data/types';
import { m } from '$lib/paraglide/messages';

export const getArcaneLevel = (count: number) => {
  if (count >= 21) return 5;
  else if (count >= 15) return 4;
  else if (count >= 10) return 3;
  else if (count >= 6) return 2;
  else if (count >= 3) return 1;
  else if (count < 3 && count >= 0) return 0;
  throw new Error('Invalid Arcane Count: ' + count);
};

export const isArcane = (item: Item | undefined): boolean =>
  item?.type === 'arcane';

export function itemName(key: string) {
  const message = m[key as keyof typeof m];

  return typeof message === 'function' ? message() : key;
}

export const minutesToSeconds = (value: string): number => {
  const [minutes, seconds] = value.split(':').map(Number);

  return (minutes ?? 0) * 60 + (seconds ?? 0);
};

export const secondsToMinutes = (value: number): string => {
  const seconds = value % 60;
  const minutes = (value - seconds) / 60;

  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');

  return `${mm}:${ss}`;
};

export const getCostColor = (itemId: string): string | null => {
  switch (itemId) {
    case 'emerald':
      return 'greenyellow';
    case 'crimson':
      return 'crimson';
    case 'red':
      return 'red';
    case 'blue':
      return 'blue';

    // durivi resources
    case 'nacreous-pebble':
      return '#64DDE0';
    case 'aggristone':
      return '#E6A23C';
    case 'saggen-pearls':
      return '#F18AB5';
    case 'maw-fang':
      return '#C5C9D3';
    case 'ariette-scale':
      return '#8D78E8';
    case 'rune-marrow':
      return '#E65353';
    case 'silphsela':
      return '#6ECA8B';
    case 'tasoma-extract':
      return '#B7E34B';
    case 'dracroot':
      return '#C47A45';
    case 'ueymag':
      return '#E6D45A';
    case 'yao-shrubs':
      return '#43A6F5';
    case 'kovnik':
      return '#3FBEAF';
    case 'connola-sprouts':
      return '#85B8FF';
    case 'eevani':
      return '#D58AF0';
    case 'lamentus':
      return '#FF8057';
    default:
      return null;
  }
};

export const getCostSpan = (cost: Cost, withText = false) => {
  const color = getCostColor(cost.resourceId);
  // if quantity is a decimal, force to 2 decimal places; otherwise keep as integer
  const quantity =
    cost.quantity % 1 == 0 ? cost.quantity : cost.quantity.toFixed(2);
  return `<span style="color: ${color};">${quantity}${withText ? ' ' + itemName(cost.resourceId) : ''}</span>`;
};
