import type { PageLoad } from './$types';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { error } from '@sveltejs/kit';
import { follieStore } from '$lib/stores/FollieStore';
import { citrineStore } from '$lib/stores/CitrineStore';
import { nokkoStore } from '$lib/stores/NokkoStore';
import { koumeiStore } from '$lib/stores/KoumeiStore';
import { narinStore } from '$lib/stores/NarinStore';
import { orionSiriusStore } from '$lib/stores/OrionSiriusStore';
import { vorunaStore } from '$lib/stores/VorunaStore';
import { templeStore } from '$lib/stores/TempleStore';
import { oraxiaStore } from '$lib/stores/OraxiaStore';

const DATA: Record<string, WarframeStore> = {
  follie: follieStore,
  citrine: citrineStore,
  nokko: nokkoStore,
  koumei: koumeiStore,
  narin: narinStore,
  'orion-sirius': orionSiriusStore,
  voruna: vorunaStore,
  temple: templeStore,
  oraxia: oraxiaStore,
};

export const load: PageLoad = ({ params }) => {
  const warframeStore = DATA[params.warframe];

  if (!warframeStore) {
    error(404, 'Not found');
  }

  return {
    warframeStore
  };
};
