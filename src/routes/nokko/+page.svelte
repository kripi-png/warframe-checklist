<script lang="ts">
  import { setContext } from 'svelte';
  import Paper from '@smui/paper';
  // import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import ItemChecklists from '$lib/components/ItemChecklists.svelte';

  import { createChecklistStore } from '$lib/dataManager';
  import { layout } from '$lib/layout.svelte';
  layout({ custom });

  const checklistStore = createChecklistStore('nokko');
  setContext('checklist', checklistStore);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMoneyChange = ({ target }: { target: any }) => {
    checklistStore.changeMoney(Number((<HTMLInputElement>target)?.value));
  };
</script>

{#snippet custom()}
  <!-- class="flex-col gap-2" -->
  <Paper>
    <h1>Nightcap</h1>
    <TextField
      value={$checklistStore.money}
      onchange={handleMoneyChange}
      label="Owned Fergolite"
      type="number"
    >
      <!-- {#snippet helper()}
            <HelperText>Helper Text</HelperText>
          {/snippet} -->
    </TextField>
    <!-- <Button disabled>Field Guide</Button> -->
  </Paper>
{/snippet}

<ItemChecklists />
