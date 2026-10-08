<script lang="ts">
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { getCostColor, itemName } from '$lib/utils';
import { Label } from '@smui/common';
import Paper from '@smui/paper';
import Tooltip, { Wrapper } from '@smui/tooltip';

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

const averagePerMinutes = $derived.by(() => {
  return Object.keys(totalNeeded).reduce<Record<string, number>>(
    (averages, resourceId) => {
      const avg = warframeStore.getTotalAveragePerMinute(resourceId);
      if (avg) {
        averages[resourceId] = avg.quantity;
      }

      return averages;
    },
    {},
  );
});

const estimatedTimes = $derived.by(() => {
  return Object.entries(totalNeeded).reduce<Record<string, number>>(
    (times, [resourceId, total]) => {
      const avg = averagePerMinutes[resourceId];
      if (!avg) return times;

      times[resourceId] = total / avg;
      return times;
    },
    {},
  );
});
</script>


<Paper>
  <h2 class="text-center text-lg capitalize">Total:</h2>
  {#each Object.entries(totalNeeded) as [resourceId, quantity]}
    <p style={`color: ${getCostColor(resourceId)}`}>{itemName(resourceId)}: {quantity}</p>
  {/each}

  {#if Object.keys(averagePerMinutes).length}
    <br>
    <h2 class="text-center text-lg capitalize">Average per minute:</h2>
    {#each Object.entries(averagePerMinutes) as [resourceId, value]}
      <p style={`color: ${getCostColor(resourceId)}`}>
        {itemName(resourceId)}: {value.toFixed(2)} / min
      </p>
    {/each}
  {/if}

  {#if Object.keys(estimatedTimes).length}
    <br>
    <h2 class="text-center text-lg capitalize">Required time:</h2>
    <h3 class="text-center text-sm capitalize">Hours / minutes</h3>
    {#each Object.entries(estimatedTimes) as [resourceId, value]}
      <Wrapper>
        <p style={`color: ${getCostColor(resourceId)}`}>
          {#if value > 60}
            {itemName(resourceId)}: {(value / 60).toFixed(2)} h
          {:else}
            {itemName(resourceId)}: {value.toFixed(2)} min
          {/if}
        </p>
        <Tooltip xPos="center" yPos="above">
          {@const minutes = value % 60 }
          {@const hours = (value - minutes) / 60}
          {@const seconds = (minutes % 1) * 60}
          <Label class="text-lg">{`${hours}h ${Math.trunc(minutes)}min ${Math.trunc(seconds)}sec`}</Label>
        </Tooltip>
      </Wrapper>
    {/each}
  {/if}
</Paper>
