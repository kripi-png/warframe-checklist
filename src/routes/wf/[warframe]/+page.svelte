<script lang="ts">
import Paper from '@smui/paper';
import TextField from '@smui/textfield';
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import checklistStore from '$lib/stores/NokkoStore';
import { layout } from '$lib/layout.svelte';
import { setChecklistContext } from '$lib/context/checklist';
import type { PageProps } from './$types';
layout({ custom });

let { data }: PageProps = $props();
setChecklistContext(data.warframeStore);
</script>

{#snippet custom()}
  <Paper>
    <h1>&lt;WARFRAME NAME&gt;</h1>
    <TextField
      value={checklistStore.balance}
      onchange={(e: Event) =>
        checklistStore.setBalance(
          Number((<HTMLInputElement>e?.target)?.value),
        )}
      label="Owned <MONEY NAME>"
      type="number"
    >
    </TextField>
  </Paper>
{/snippet}

<ItemChecklists />
