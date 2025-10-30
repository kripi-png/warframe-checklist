import nokkoData from '$lib/data/nokko';
import BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TMoney } from '$lib/types/data';

const NokkoStore = new BaseWarframeStore<TMoney>('nokko', nokkoData);

export default NokkoStore;
