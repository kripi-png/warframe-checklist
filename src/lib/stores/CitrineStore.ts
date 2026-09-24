import { citrinePage } from "$lib/data/citrine";
import { citrineItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const citrineStore = createWarframeStore(
	'citrine',
	citrinePage,
	citrineItems,
  [
    { resourceId: "blue", quantity: 0 },
    { resourceId: "red", quantity: 0 },
  ]
);
