import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { follieStore } from '$lib/stores/FollieStore';
import type { WarframeStore } from '$lib/stores/createWarframeStore';

const DATA: Record<string, WarframeStore> = {
  follie: follieStore,
  // nokko: NokkoStore,
  // koumei: KoumeiStore,
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
