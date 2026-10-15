import type { PageLoad } from './$types';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { error } from '@sveltejs/kit';
import {
  citrineStore,
  dagathStore,
  danteStore,
  follieStore,
  incarnonAdapterStore,
  jadeStore,
  koumeiStore,
  kullervoStore,
  narinStore,
  nokkoStore,
  oraxiaStore,
  orionSiriusStore,
  praghasaStore,
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
  dagath: dagathStore,
  'incarnon-adapters': incarnonAdapterStore,
  praghasa: praghasaStore,
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
