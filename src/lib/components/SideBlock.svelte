<script lang="ts">
import Paper from '@smui/paper';
import ResetDataButton from '$lib/components/ResetDataButton.svelte';
import Calculations from '$lib/components/Calculations.svelte';
import Button from '@smui/button';
import ResourceInput from '$lib/components/molecules/ResourceInput.svelte';
import type { WarframeStore } from '$lib/stores/createWarframeStore';

type Props = {
  warframeStore: WarframeStore;
  isHistoryOpen: boolean;
};

let { warframeStore, isHistoryOpen = $bindable() }: Props = $props();
</script>

<Paper>
  <h1 class="text-lg">{warframeStore.data.name}</h1>
  <h4 class="text-xs">You can use +/- in the input fields.</h4>
  {#each warframeStore.balance as resource (resource.resourceId)}
    <ResourceInput
      resource={resource}
      setBalance={warframeStore.setBalance}
    />
  {/each}

  <ResetDataButton checklist={warframeStore} />
  <Button onclick={() => isHistoryOpen=true}>History</Button>
</Paper>

<Calculations warframeStore={warframeStore} />
