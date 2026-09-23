import { folliePage } from "$lib/data/follie";
import { follieItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const follieStore = createWarframeStore(
	'follie',
  folliePage,
  follieItems,
  [{resourceId: "atramentum", quantity: 0}]
);
