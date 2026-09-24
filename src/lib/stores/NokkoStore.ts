import { nokkoPage } from "$lib/data/nokko";
import { nokkoItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const nokkoStore = createWarframeStore(
	'nokko',
	nokkoPage,
	nokkoItems,
  [{resourceId: "fergolyte", quantity: 0}]
);
