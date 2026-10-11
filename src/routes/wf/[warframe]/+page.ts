import type { PageLoad } from './$types';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { error } from '@sveltejs/kit';
import {
  citrineStore,
  danteStore,
  follieStore,
  jadeStore,
  koumeiStore,
  kullervoStore,
  narinStore,
  nokkoStore,
  oraxiaStore,
  orionSiriusStore,
  templeStore,
  urielStore,
  vorunaStore,
} from '$lib/stores/WarframeStores';

const DATA: Record<string, WarframeStore> = {
  follie: follieStore,
  citrine: citrineStore,
  nokko: nokkoStore,
  koumei: koumeiStore,
  narin: narinStore,
  'sirius-orion': orionSiriusStore,
  voruna: vorunaStore,
  temple: templeStore,
  oraxia: oraxiaStore,
  jade: jadeStore,
  kullervo: kullervoStore,
  uriel: urielStore,
  dante: danteStore,
};

export const load: PageLoad = ({ params }) => {
  const warframeStore = DATA[params.warframe];

  if (!warframeStore) {
    error(404, 'Not found');
  }

  return {
    warframeStore,
  };
};
