<script lang="ts">
  import type { ChecklistStore } from '$lib/types/store';
  import { getContext } from 'svelte';
  import ItemBlock from '$lib/components/ItemBlock.svelte';
  import Masonry from '$lib/components/Masonry.svelte';

  const checklistStore = getContext<ChecklistStore>('checklist');
</script>

{#if $checklistStore}
  <Masonry>
    {#each $checklistStore.blocks as block (block.title)}
      <ItemBlock {block} />
    {/each}
  </Masonry>
{/if}
