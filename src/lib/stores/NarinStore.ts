import { narinPage } from "$lib/data/narin";
import { narinItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const narinStore = createWarframeStore(
	'narin',
	narinPage,
	narinItems,
  [{resourceId: "entropic-kuva", quantity: 0}]
);
