import {
  citrineItems,
  dagathItems,
  danteItems,
  follieItems,
  jadeItems,
  koumeiItems,
  kullervoItems,
  narinItems,
  nokkoItems,
  oraxiaItems,
  orionSiriusItems,
  templeItems,
  urielItems,
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
import { kullervoPage } from '$lib/data/kullervo';
import { urielPage } from '$lib/data/uriel';
import { dantePage } from '$lib/data/dante';
import { dagathPage } from '$lib/data/dagath';

export const dagathStore = createWarframeStore('dagath', dagathPage, dagathItems, [
  { resourceId: 'vainthorn', quantity: 0 },
]);

export const danteStore = createWarframeStore('dante', dantePage, danteItems, [
  { resourceId: 'vessel-capillaries', quantity: 0 },
]);

export const urielStore = createWarframeStore('uriel', urielPage, urielItems, [
  { resourceId: 'maphica', quantity: 0 },
]);

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

export const kullervoStore = createWarframeStore(
  'kullervo',
  kullervoPage,
  kullervoItems,
  [{ resourceId: 'kullervos-bane', quantity: 0 }],
);
