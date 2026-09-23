export type ItemType =
  | 'warframe'
	| 'warframe-part'
	| 'weapon'
	| 'weapon-part'
	| 'resource'
	| 'mod'
	| 'arcane'
  | 'cosmetic'
	| 'other';

export interface Item {
  id: string;
  name: string;
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
}

// interface RecipeComponent {
//   itemId: string;
//   quantity: number;
// }

// interface Recipe {
//   productId: string;
//   components: RecipeComponent[];
// }


// type AcquisitionType =
//   | 'drop'
// 	| 'vendor'
// 	| 'mission'
//   | 'other';

// interface Acquisition {
//   id: string;
//   itemId: string;
//   type: AcquisitionType;
//   sourceId: string;

//   reward?: {
//     quantity: number
//   }

//   cost?: Cost[];
// }

// interface VendorItem {
//   itemId: string;
//   cost: Cost[];
// }

// interface Vendor {
//   id: string;
//   name: string;
//   location?: string;
//   items: VendorItem[];
// }

// type SourceType =
//   | 'mission'
// 	| 'vendor'
// 	| 'event'
//   | 'other';

// interface Source {
//   id: string;
//   name: string;
//   type: SourceType;
// }

// interface Requirement {
//   itemId: string;
//   required: number;
//   owned: number;
//   missing: number;
// }

// interface AcquisitionOption {
//   acquisitionId: string;
//   itemId: string;
//   cost: Cost[];
// }
