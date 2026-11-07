<script lang="ts">
import ItemBlock from '$lib/components/ItemBlock.svelte';
import ItemBlockFrame from '$lib/components/ItemBlockFrame.svelte';
import { getChecklistContext } from '$lib/context/checklist';
import { getCircuitRotation } from '$lib/utils';
import { BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/svelte';

const checklistStore = getChecklistContext();

let rotation = null;
if (checklistStore.data.id === 'incarnon_adapters') {
  rotation = getCircuitRotation();
}
</script>

{#if checklistStore.data.sections}
  <MasonryGrid frameWidth={400} gap={10}>
    {#each checklistStore.data.sections as section (section.id)}
      <ItemBlockFrame>
        <ItemBlock {section} {rotation} />
      </ItemBlockFrame>
    {/each}
  </MasonryGrid>
{/if}
