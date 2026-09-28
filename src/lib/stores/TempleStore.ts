import { templePage } from "$lib/data/temple";
import { templeItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const templeStore = createWarframeStore(
	'temple',
	templePage,
	templeItems,
  [
    { resourceId: "beating-heartstrings", quantity: 0 },
  ]
);
