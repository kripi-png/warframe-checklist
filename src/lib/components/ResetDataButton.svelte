<script lang="ts">
import { setChecklistContext } from '$lib/context/checklist';
import type BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TGeneralMoney } from '$lib/types/data';
import Button from '@smui/button';

type Props = {
  checklist: BaseWarframeStore<TGeneralMoney>;
};

let { checklist }: Props = $props();

const handleClick = () => {
  checklist.reset();
};
</script>

<Button onclick={handleClick}>Reset Data</Button>
