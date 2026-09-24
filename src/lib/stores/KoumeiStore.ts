import { koumeiPage } from "$lib/data/koumei";
import { koumeiItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const koumeiStore = createWarframeStore(
	'koumei',
	koumeiPage,
	koumeiItems,
  [{resourceId: "fate-pearl", quantity: 0}]
);
