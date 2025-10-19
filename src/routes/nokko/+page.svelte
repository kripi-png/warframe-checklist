<script lang="ts">
  import Paper from '@smui/paper';
  // import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import ItemChecklists from '$lib/components/ItemChecklists.svelte';

  import { layout } from '$lib/layout.svelte';
  layout({ custom });

  let money = $state(0);
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

<ItemChecklists />
