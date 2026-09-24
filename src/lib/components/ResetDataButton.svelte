<script lang="ts">
    import type { WarframeStore } from '$lib/stores/createWarframeStore';
import Button from '@smui/button';

type Props = {
  checklist: WarframeStore;
};

let { checklist }: Props = $props();

const handleClick = () => {
  checklist.reset();
};
</script>

<Button onclick={handleClick}>Reset Data</Button>
