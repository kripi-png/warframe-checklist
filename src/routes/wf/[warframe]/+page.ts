import type { PageLoad } from './$types';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { error } from '@sveltejs/kit';
import { follieStore } from '$lib/stores/FollieStore';
import { citrineStore } from '$lib/stores/CitrineStore';
import { nokkoStore } from '$lib/stores/NokkoStore';
import { koumeiStore } from '$lib/stores/KoumeiStore';

const DATA: Record<string, WarframeStore> = {
  follie: follieStore,
  citrine: citrineStore,
  nokko: nokkoStore,
  koumei: koumeiStore,
};

export const load: PageLoad = ({ params }) => {
  const { warframe } = params;

  if (Object.hasOwn(DATA, warframe)) {
    return {
      warframeStore: DATA[warframe],
    };
  }

  error(404, 'Not found');
};
