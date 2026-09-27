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

let totalCost = $derived(checklist.getTotalNeeded(section));
</script>

<h2 class="text-center text-2xl font-bold text-white">
    {section.name}
    <button onclick={() => {isOpen = !isOpen}}>{isOpen? '⬆️' : '⬇️'}</button>
</h2>
<h3 class="text-center">{completedCount} / {section.items.length}</h3>
<h3 class="text-center">
  {#each Object.entries(totalCost) as cost}
    <p>{cost[1]} {itemName(cost[0])}</p>
  {/each}
</h3>
