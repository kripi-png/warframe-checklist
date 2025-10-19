interface BaseCheckable {
  name: string;
  checked: boolean;
  price: number;
  wikiUrl: string;
}

export interface Item extends BaseCheckable {
  forHelminth?: boolean;
}

export interface Arcane extends BaseCheckable {
  maxLevel: 5;
  currentLevel: 0 | 1 | 2 | 3 | 4 | 5;
  ownedCount: number;
}
