<script lang="ts">
  import { setContext } from 'svelte';
  import { createChecklistStore } from '$lib/dataManager';
  import ItemBlock from '$lib/components/ItemBlock.svelte';
  import Masonry from '$lib/components/Masonry.svelte';

  const checklistStore = createChecklistStore('nokko');
  setContext('checklist', checklistStore);
</script>

<Masonry>
  {#each $checklistStore.blocks as block (block.title)}
    <ItemBlock {block} />
  {/each}
</Masonry>
