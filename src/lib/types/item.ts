interface BaseCheckable {
  id?: number;
  name: string;
  checked: boolean;
  price: number;
  wikiUrl: string;
}

export interface Item extends BaseCheckable {
  forHelminth?: boolean;
}

export type ArcaneUserLevel = 0 | 1 | 2 | 3 | 4 | 5;
export interface Arcane extends BaseCheckable {
  maxLevel: 5;
  currentLevel: ArcaneUserLevel;
  ownedCount: number;
}

export type ItemEntry = Item | Arcane;

/* localStorage persistables */
interface BasePersistable {
  id: number;
  checked: boolean;
}

export type PersistedItem = BasePersistable;
export interface PersistedArcane extends BasePersistable {
  ownedCount: number;
  currentLevel: ArcaneUserLevel;
}

export type PersistedEntry = PersistedItem | PersistedArcane;
