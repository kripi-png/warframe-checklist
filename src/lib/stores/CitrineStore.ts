import citrineData from '$lib/data/citrine';
import BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TDoubleMoney } from '$lib/types/data';

const CitrineStore = new BaseWarframeStore<TDoubleMoney>(
  'citrine',
  citrineData,
);

export default CitrineStore;
