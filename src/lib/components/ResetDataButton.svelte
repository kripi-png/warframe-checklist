<script lang="ts">
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import Button from '@smui/button';

type Props = {
  checklist: WarframeStore;
};

let { checklist }: Props = $props();

const handleClick = () => {
  if (
    confirm(
      'Are you sure you want to reset all data? This action cannot be undone.',
    )
  ) {
    checklist.reset();
  }
};
</script>

<Button onclick={handleClick}>Reset All Data</Button>
