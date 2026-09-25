<script lang="ts">
import { getChecklistContext } from '$lib/context/checklist';
import type { PageSection } from '$lib/data/types';
import { itemName } from '$lib/utils';

type Props = {
  section: PageSection;
  isOpen: boolean;
};
let { section, isOpen = $bindable() }: Props = $props();
const checklist = getChecklistContext();

let completedCount = $derived(
  section.items.filter((sItem) => checklist.isCompleted(sItem.itemId)).length,
);

let totalCost = $derived.by(() => {
  return section.items.reduce<Record<string, number>>((acc, sItem) => {
    const required = checklist.getRequiredToComplete(sItem.itemId);
    const acquired = checklist.getAcquired(sItem.itemId);
    const moreNeeded = Math.max(0, required - acquired);
    if (!sItem.cost?.length) return acc;

    for (const cost of sItem.cost) {
      if (!Object.hasOwn(acc, cost.resourceId)) {
        acc[cost.resourceId] = 0;
      }
     acc[cost.resourceId] += cost.quantity * moreNeeded;
    }

    return acc;
  }, {});
});
</script>

<h2 class="text-center text-2xl font-bold text-white">
    {section.name}
    <button onclick={() => {isOpen = !isOpen}}>{isOpen? '⬆️' : '⬇️'}</button>
</h2>
<h3 class="text-center">{completedCount} / {section.items.length}</h3>
<h3 class="text-center">
  {#each Object.entries(totalCost) as cost}
    {cost[1]} {itemName(cost[0])}
  {/each}
</h3>
