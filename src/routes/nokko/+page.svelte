<script lang="ts">
import Paper from '@smui/paper';
import TextField from '@smui/textfield';
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import ResetDataButton from '$lib/components/ResetDataButton.svelte';
import checklistStore from '$lib/stores/NokkoStore';
import { layout } from '$lib/layout.svelte';
import { setChecklistContext } from '$lib/context/checklist';
layout({ custom });

setChecklistContext(checklistStore);
</script>

{#snippet custom()}
  <!-- class="flex-col gap-2" -->
  <Paper>
    <h1>Nokko</h1>
    <TextField
      value={checklistStore.balance}
      onchange={(e: Event) =>
        checklistStore.setBalance(
          Number((<HTMLInputElement>e?.target)?.value),
        )}
      label="Owned Fergolite"
      type="number"
    >
      <!-- {#snippet helper()}
            <HelperText>Helper Text</HelperText>
          {/snippet} -->
    </TextField>
    <!-- <ResetDataButton checklist={checklistStore} /> -->
  </Paper>
{/snippet}

<ItemChecklists />
