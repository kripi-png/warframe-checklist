export type ItemType =
  | 'warframe-part'
  | 'weapon-part'
  | 'resource'
  | 'mod'
  | 'arcane'
  | 'cosmetic'
  | 'other';

export interface Item {
  id: string;
  type: ItemType;
  amountNeeded?: number; // e.g. for arcanes
  isDrop?: boolean;
}

export interface Resource {
  id: string;
  name: string;
}

export interface Cost {
  resourceId: string;
  quantity: number;
}

export interface SectionItem {
  itemId: string;
  cost?: Cost[];
  amountNeeded?: number; // e.g. for helminth needs
}

export interface PageSection {
  id: string;
  name: string;
  costCurrency?: string;
  items: SectionItem[];
}

export interface AcquisitionPage {
  id: string;
  name: string;
  sections: PageSection[];
}

export interface AcquisitionState {
  balance: Cost[];
  acquired: Record<string, number>;
  history: HistoryEntry[];
}

export interface HistoryEntry {
  id: string;
  duration: number; // seconds
  rewards: Cost[];
}
