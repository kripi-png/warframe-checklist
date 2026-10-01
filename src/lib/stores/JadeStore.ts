import { jadePage } from "$lib/data/jade";
import { jadeItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const jadeStore = createWarframeStore(
	'jade',
	jadePage,
	jadeItems,
  [
    { resourceId: "vestigial-motes", quantity: 0 },
  ]
);
