<script lang="ts">
import ItemBlock from '$lib/components/ItemBlock.svelte';
import Masonry from '$lib/components/Masonry.svelte';
import { getChecklistContext } from '$lib/context/checklist';

const checklistStore = getChecklistContext();
</script>

{#if checklistStore.blocks}
  <Masonry>
    {#each checklistStore.blocks as block (block.id)}
      <ItemBlock {block} />
    {/each}
  </Masonry>
{/if}
