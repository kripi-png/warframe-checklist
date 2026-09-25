<script lang="ts">
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { itemName } from '$lib/utils';
import Paper from '@smui/paper';

type Props = {
  warframeStore: WarframeStore;
};

let { warframeStore }: Props = $props();

const totalNeeded = $derived.by(() => {
  const needed = warframeStore.getTotalNeeded();
  for (const resource in needed) {
    needed[resource] -= warframeStore.balance.find((balance) => balance.resourceId === resource)?.quantity ?? 0;
  }
  return needed;
});
</script>


<Paper>
    <h2>Total:</h2>
    {#each Object.entries(totalNeeded) as [name, quantity]}
        <p>{itemName(name)}: {quantity}</p>
    {/each}
</Paper>
