<script lang="ts">
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import { layout } from '$lib/layout.svelte';
import { setChecklistContext } from '$lib/context/checklist';
import type { PageProps } from './$types';
import HistoryModal from '$lib/components/HistoryModal.svelte';
import SideBlock from '$lib/components/SideBlock.svelte';
import UserSettingsModal from '$lib/components/UserSettingsModal.svelte';

layout({ custom });

let { data }: PageProps = $props();

setChecklistContext((() => data.warframeStore)());

let isHistoryOpen = $state(false);
let isSettingsOpen = $state(false);
</script>

<svelte:head>
  <title>Checklist - {data.warframeStore.data.name}</title>
</svelte:head>

{#snippet custom()}
  {#if data.warframeStore}
    <SideBlock warframeStore={data.warframeStore} bind:isHistoryOpen bind:isSettingsOpen />
  {/if}
{/snippet}

<ItemChecklists />
<HistoryModal bind:open={isHistoryOpen} store={data.warframeStore} />
<UserSettingsModal bind:open={isSettingsOpen} />
