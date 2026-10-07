import {
  citrineItems,
  follieItems,
  jadeItems,
  koumeiItems,
  narinItems,
  nokkoItems,
  oraxiaItems,
  orionSiriusItems,
  templeItems,
  vorunaItems,
} from '$lib/data/items';
import { createWarframeStore } from './createWarframeStore';
import { citrinePage } from '$lib/data/citrine';
import { folliePage } from '$lib/data/follie';
import { jadePage } from '$lib/data/jade';
import { koumeiPage } from '$lib/data/koumei';
import { narinPage } from '$lib/data/narin';
import { nokkoPage } from '$lib/data/nokko';
import { oraxiaPage } from '$lib/data/oraxia';
import { orionSiriusPage } from '$lib/data/sirius_orion';
import { templePage } from '$lib/data/temple';
import { vorunaPage } from '$lib/data/voruna';

export const citrineStore = createWarframeStore(
  'citrine',
  citrinePage,
  citrineItems,
  [
    { resourceId: 'blue', quantity: 0 },
    { resourceId: 'red', quantity: 0 },
  ],
);

export const follieStore = createWarframeStore(
  'follie',
  folliePage,
  follieItems,
  [{ resourceId: 'atramentum', quantity: 0 }],
);

export const jadeStore = createWarframeStore('jade', jadePage, jadeItems, [
  { resourceId: 'vestigial-motes', quantity: 0 },
]);

export const koumeiStore = createWarframeStore(
  'koumei',
  koumeiPage,
  koumeiItems,
  [{ resourceId: 'fate-pearl', quantity: 0 }],
);
export const narinStore = createWarframeStore('narin', narinPage, narinItems, [
  { resourceId: 'entropic-kuva', quantity: 0 },
]);

export const nokkoStore = createWarframeStore('nokko', nokkoPage, nokkoItems, [
  { resourceId: 'fergolyte', quantity: 0 },
]);

export const oraxiaStore = createWarframeStore(
  'oraxia',
  oraxiaPage,
  oraxiaItems,
  [{ resourceId: 'scuttler-husks', quantity: 0 }],
);

export const orionSiriusStore = createWarframeStore(
  'orionSirius',
  orionSiriusPage,
  orionSiriusItems,
  [
    { resourceId: 'crimson', quantity: 0 },
    { resourceId: 'emerald', quantity: 0 },
  ],
);

export const templeStore = createWarframeStore(
  'temple',
  templePage,
  templeItems,
  [{ resourceId: 'beating-heartstrings', quantity: 0 }],
);

export const vorunaStore = createWarframeStore(
  'voruna',
  vorunaPage,
  vorunaItems,
  [{ resourceId: 'lua-thrax-plasma', quantity: 0 }],
);
