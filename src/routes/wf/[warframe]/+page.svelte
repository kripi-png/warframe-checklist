<script lang="ts">
import Paper from '@smui/paper';
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import { layout } from '$lib/layout.svelte';
import { setChecklistContext } from '$lib/context/checklist';
import type { PageProps } from './$types';
import ResetDataButton from '$lib/components/ResetDataButton.svelte';
import Calculations from '$lib/components/Calculations.svelte';
import Button from '@smui/button';
import HistoryModal from '$lib/components/HistoryModal.svelte';
import ResourceInput from '$lib/components/molecules/ResourceInput.svelte';

layout({ custom });

let { data }: PageProps = $props();

setChecklistContext((() => data.warframeStore)());

let isHistoryOpen = $state(false);
</script>

<svelte:head>
  <title>Checklist - {data.warframeStore.data.name}</title>
</svelte:head>

{#snippet custom()}
  {#if data.warframeStore}
    <Paper>
      <h1>{data.warframeStore.data.name}</h1>
      {#each data.warframeStore.balance as resource (resource.resourceId)}
        <ResourceInput resource={resource} setBalance={data.warframeStore.setBalance} />
      {/each}

      <ResetDataButton checklist={data.warframeStore} />
      <Button onclick={() => isHistoryOpen=true}>History</Button>
    </Paper>

    <Calculations warframeStore={data.warframeStore} />
  {/if}
{/snippet}

<ItemChecklists />
<HistoryModal bind:open={isHistoryOpen} store={data.warframeStore} />
