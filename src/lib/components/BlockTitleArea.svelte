<script lang="ts">
import { getChecklistContext } from '$lib/context/checklist';
import type { PageSection } from '$lib/data/types';
import { getCostSpan, getRotationStartDate } from '$lib/utils';

type Props = {
  section: PageSection;
  isOpen: boolean;
  rotation: number | null;
};
let { section, isOpen = $bindable(), rotation }: Props = $props();
const checklist = getChecklistContext();

let completedCount = $derived(
  section.items.filter((sItem) => checklist.isCompleted(sItem.itemId)).length,
);

let totalCost = $derived(checklist.getTotalNeeded(section));
let sectionIndex = $derived(Number(Number(section.id.split('_')[1])));
let isActiveRotationSection = $derived(rotation && sectionIndex === rotation);
</script>

<h2 class="text-center text-2xl font-bold text-white">
  <!-- for incarnon adapter sections -->
  <span style={isActiveRotationSection ? "color:greenyellow;" : null}>{section.name}</span>
  {#if rotation !== null}
    <p class="text-sm">Starts: {getRotationStartDate(sectionIndex).toLocaleDateString()}</p>
  {/if}
  <button onclick={() => {isOpen = !isOpen}}>{isOpen? '⬆️' : '⬇️'}</button>
</h2>
<h3 class="text-center">{completedCount} / {section.items.length}</h3>
<h3 class="text-center">
  {#each Object.entries(totalCost) as cost}
    <p>
      {@html getCostSpan(
        { resourceId: cost[0], quantity: cost[1] },
        true
      )}
    </p>
  {/each}
</h3>
