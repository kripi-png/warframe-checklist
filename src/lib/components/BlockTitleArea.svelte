<script lang="ts">
import { getChecklistContext } from '$lib/context/checklist';
import type { PageSection } from '$lib/data/types';
import { settingsStore } from '$lib/stores/UserSettings';
import { getCostSpan, getRotationStartDate } from '$lib/utils';
import Tooltip, { Label, Wrapper } from '@smui/tooltip';

type Props = {
  section: PageSection;
  isOpen: boolean;
  completedCount: number;
  rotation: number | null;
};
let { section, completedCount, isOpen = $bindable(), rotation }: Props = $props();
const checklist = getChecklistContext();

const includeHelminthSacrifice = $derived(
  settingsStore.getSetting('includeHelminthSacrifice') as boolean,
);

let totalCost = $derived(
  checklist.getTotalNeeded(includeHelminthSacrifice, section),
);
let sectionIndex = $derived(Number(Number(section.id.split('_')[1])));
let isActiveRotationSection = $derived(rotation && sectionIndex === rotation);

let rotationStartDate = $derived(getRotationStartDate(sectionIndex));
// add week minus one second to get time just before weekly reset
let rotationEndDate = $derived(
  new Date(rotationStartDate.getTime() + 7 * 24 * 60 * 60 * 1000 - 1000),
);

const handleOpenToggle = () => {
  settingsStore.toggleSectionOpen(section.id);
};
</script>

<h2 class="text-center text-2xl font-bold text-white">
  <!-- for incarnon adapter sections -->
  <span style={isActiveRotationSection ? "color:greenyellow;" : null}>{section.name}</span>
  {#if rotation !== null}
    <Wrapper>
    <p class="text-sm">{rotationStartDate.toLocaleDateString()} - {rotationEndDate.toLocaleDateString()}</p>
      <Tooltip>
        <Label>
          Start: {rotationStartDate.toLocaleString()}<br/>
          End: {rotationEndDate.toLocaleString()}<br/>
        </Label>
      </Tooltip>
    </Wrapper>
  {/if}
  <button onclick={handleOpenToggle}>{isOpen? '⬆️' : '⬇️'}</button>
</h2>
<h3 class="text-center">{completedCount} / {section.items.length}</h3>
{#if isOpen}
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
{/if}
