import type { PageLoad } from './$types';
import KoumeiStore from '$lib/stores/KoumeiStore';
import NokkoStore from '$lib/stores/NokkoStore';
import { error } from '@sveltejs/kit';
import type BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TGeneralMoney } from '$lib/types/data';

const DATA: Record<string, BaseWarframeStore<TGeneralMoney>> = {
  nokko: NokkoStore,
  koumei: KoumeiStore,
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
