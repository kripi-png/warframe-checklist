import { vorunaPage } from "$lib/data/voruna";
import { vorunaItems } from "$lib/data/items";
import { createWarframeStore } from "./createWarframeStore";

export const vorunaStore = createWarframeStore(
	'voruna',
  vorunaPage,
  vorunaItems,
  [{resourceId: "lua-thrax-plasma", quantity: 0}]
);
