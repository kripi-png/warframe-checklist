import { orionSiriusPage } from "$lib/data/orion_sirius";
import { orionSiriusItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const orionSiriusStore = createWarframeStore(
	'orionSirius',
	orionSiriusPage,
	orionSiriusItems,
  [
    { resourceId: 'emerald', quantity: 0 },
    { resourceId: 'crimson', quantity: 0 },
  ]
);
