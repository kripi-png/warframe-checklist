import { oraxiaPage } from "$lib/data/oraxia";
import { oraxiaItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const oraxiaStore = createWarframeStore(
	'oraxia',
	oraxiaPage,
	oraxiaItems,
  [
    { resourceId: "scuttler-husks", quantity: 0 },
  ]
);
