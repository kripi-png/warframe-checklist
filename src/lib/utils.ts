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
      return '#65D98B';
    case 'crimson':
      return '#F05262';
    case 'red':
      return '#E84B55';
    case 'blue':
      return '#398BEE';

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

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const ROTATION_LENGTH = 9;
const ROTATION_START = new Date('2026-08-31T00:00:00Z');

export function getCircuitRotation(now = new Date()): number {
  // time diff between current and start date divided by week in milliseconds
  const weeksElapsed = Math.floor(
    (now.getTime() - ROTATION_START.getTime()) / WEEK_MS,
  );

  return ((weeksElapsed % ROTATION_LENGTH) + ROTATION_LENGTH) % ROTATION_LENGTH;
}

export function getRotationStartDate(
  targetIndex: number,
  now = new Date(),
): Date {
  // time diff between current and start date divided by week in milliseconds
  const weeksElapsed = Math.floor(
    (now.getTime() - ROTATION_START.getTime()) / WEEK_MS,
  );

  const currentWeekStart = new Date(
    ROTATION_START.getTime() + weeksElapsed * WEEK_MS,
  );

  const currentIndex =
    ((weeksElapsed % ROTATION_LENGTH) + ROTATION_LENGTH) % ROTATION_LENGTH;

  const weeksUntil =
    (targetIndex - currentIndex + ROTATION_LENGTH) % ROTATION_LENGTH;

  return new Date(currentWeekStart.getTime() + weeksUntil * WEEK_MS);
}
