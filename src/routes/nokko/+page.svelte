<script lang="ts">
  import Paper from '@smui/paper';
  // import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import ItemBlock from '$lib/components/ItemBlock.svelte';
  import Masonry from '$lib/components/Masonry.svelte';
  import { persistedState } from 'svelte-persisted-state';
  import { prepareInitialData } from '$lib/dataManager';

  import { layout } from '$lib/layout.svelte';
  layout({ custom });

  let money = $state(0);

  const data = persistedState('nokko', prepareInitialData('nokko'));
</script>

{#snippet custom()}
  <!-- class="flex-col gap-2" -->
  <Paper>
    <h1>Nightcap</h1>
    <TextField bind:value={money} label="Owned Fergolite" type="number">
      <!-- {#snippet helper()}
            <HelperText>Helper Text</HelperText>
          {/snippet} -->
    </TextField>
    <!-- <Button disabled>Field Guide</Button> -->
  </Paper>
{/snippet}

<Masonry>
  {#each data.current.blocks as block (block.title)}
    <ItemBlock title={block.title} type={block.type} bind:items={block.items} />
  {/each}
</Masonry>
