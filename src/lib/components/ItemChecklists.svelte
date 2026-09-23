<script lang="ts">
import ItemBlock from '$lib/components/ItemBlock.svelte';
import Masonry from '$lib/components/Masonry.svelte';
import { getChecklistContext } from '$lib/context/checklist';

const checklistStore = getChecklistContext();
</script>

{#if checklistStore.data.sections}
  <Masonry>
    {#each checklistStore.data.sections as section (section.id)}
      <ItemBlock {section} />
    {/each}
  </Masonry>
{/if}
