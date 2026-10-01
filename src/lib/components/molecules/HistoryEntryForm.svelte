<script lang="ts">
import type { Cost } from '$lib/data/types';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { itemName, minutesToSeconds } from '$lib/utils';
import Button from '@smui/button';
import Textfield from '@smui/textfield';

type Props = {
  costResourceIds: string[];
  store: WarframeStore;
};

let { costResourceIds, store }: Props = $props();

let durationValue = $state('');
let rewardValues = $state<Record<string, number>>(
  Object.fromEntries((() => costResourceIds)().map((id) => [id, 0])),
);

$effect(() => {
  for (const id of costResourceIds) {
    if (rewardValues[id] === undefined) {
      rewardValues[id] = 0;
    }
  }
});

const addRun = () => {
  if (Object.values(rewardValues).every((val) => !val)) return;

  const rewards: Cost[] = Object.entries(rewardValues)
    .filter(([_, quantity]) => quantity > 0)
    .map(([resourceId, quantity]) => ({
      resourceId,
      quantity,
    }));

  const duration = minutesToSeconds(durationValue);

  if (duration <= 0) return;

  store.addHistory({
    id: crypto.randomUUID(),
    duration,
    rewards,
  });

  resetForm();
};

function resetForm() {
  durationValue = '';

  for (const id of costResourceIds) {
    rewardValues[id] = 0;
  }
}
</script>

<form onsubmit={(event) => {
  event.preventDefault();
  addRun();
}}>
  <div class="flex gap-1">
    <Textfield
      bind:value={durationValue}
      label="Duration (mm:ss)"
      variant="filled"
    />

    {#each costResourceIds as id}
      <Textfield
        class="no-buttons"
        variant="filled"
        bind:value={rewardValues[id]}
        label={itemName(id)}
      />
    {/each}
  </div>
  <Button type="submit">Add</Button>
</form>
