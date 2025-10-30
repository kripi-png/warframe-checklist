import koumeiData from '$lib/data/koumei';
import BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TMoney } from '$lib/types/data';

const KoumeiStore = new BaseWarframeStore<TMoney>('koumei', koumeiData);

export default KoumeiStore;
