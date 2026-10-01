<script lang="ts">
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { getCostColor, itemName } from '$lib/utils';
import Paper from '@smui/paper';

type Props = {
  warframeStore: WarframeStore;
};

let { warframeStore }: Props = $props();

const totalNeeded = $derived.by(() => {
  const needed = warframeStore.getTotalNeeded();
  for (const resource in needed) {
    needed[resource] -=
      warframeStore.balance.find((balance) => balance.resourceId === resource)
        ?.quantity ?? 0;
  }
  return needed;
});
</script>


<Paper>
  <h2>Total:</h2>
  {#each Object.entries(totalNeeded) as [resourceId, quantity]}
    <p style={`color: ${getCostColor(resourceId)}`}>{itemName(resourceId)}: {quantity}</p>
  {/each}

  <h2>Average per minute:</h2>
  {#each Object.keys(totalNeeded) as resourceId}
    {@const avgPerMin = warframeStore.getTotalAveragePerMinute(resourceId)}
    <p style={`color: ${getCostColor(resourceId)}`}>
      {#if avgPerMin}
        {itemName(resourceId)}: {avgPerMin.quantity.toFixed(2)}
      {:else}
        Unknown
      {/if}
    </p>
  {/each}
</Paper>
