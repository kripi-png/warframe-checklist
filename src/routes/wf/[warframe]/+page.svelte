<script lang="ts">
import Paper from '@smui/paper';
import TextField from '@smui/textfield';
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import { layout } from '$lib/layout.svelte';
import { setChecklistContext } from '$lib/context/checklist';
import type { PageProps } from './$types';
import ResetDataButton from '$lib/components/ResetDataButton.svelte';

layout({ custom });

let { data }: PageProps = $props();

setChecklistContext((()=>data.warframeStore)());
</script>

{#snippet custom()}
  <Paper>
    <h1>{data.warframeStore.data.name}</h1>

    {#each data.warframeStore.balance as resource (resource.resourceId)}
      <TextField
        value={resource.quantity}
        label={`Owned ${resource.resourceId}`}
        type="number"
        onchange={(e: Event) => {
          data.warframeStore.setBalance({
            resourceId: resource.resourceId,
    		quantity: Number((e.target as HTMLInputElement).value)
          })
        }}
      >
      </TextField>
      <ResetDataButton checklist={data.warframeStore}/>
    {/each}
  </Paper>
{/snippet}

<ItemChecklists />
