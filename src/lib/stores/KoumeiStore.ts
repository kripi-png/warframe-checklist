import { koumeiPage } from "$lib/data/koumei";
import { koumeiItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const koumeiStore = createWarframeStore(
	'koumei',
	koumeiPage,
	koumeiItems,
  [{resourceId: "fergolyte", quantity: 0}]
);
