<script lang="ts">
import Dialog, { Title, Content, Actions } from '@smui/dialog';
import Button from '@smui/button';
import type { WarframeStore } from '$lib/stores/createWarframeStore';
import HistoryEntryForm from '../molecules/HistoryEntryForm.svelte';
import type { Cost } from '$lib/data/types';
import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
import { getCostSpan, secondsToMinutes } from '$lib/utils';

type Props = {
  open: boolean;
  store: WarframeStore;
};

let { open = $bindable(), store }: Props = $props();

const removeRun = (id: string) => {
  store.removeHistory(id);
};

const calculateAverages = (duration: number, rewards: Cost[]): Cost[] => {
  return rewards.map((cost) => ({
    resourceId: cost.resourceId,
    quantity: cost.quantity / (duration / 60),
  }));
};

const resourceIds = $derived(
  store.data.id === 'incarnon_adapters'
    ? ['pathos-clamp']
    : store.balance.map((cost) => cost.resourceId),
);
</script>

<Dialog
  bind:open
  aria-labelledby="buttons-title"
  aria-describedby="buttons-content"
  autoStackButtons={false}
>
  <Title id="form-title">Add Run</Title>
  <Content id="form-content">
    Add results of past runs to calculate average rewards over time as well as an estimation of total duration and required runs.

    <HistoryEntryForm
      store={store}
      costResourceIds={resourceIds}
    />
  </Content>

  <Title id="history-title">Run History (last 20)</Title>
  <Content>
    <DataTable>
      <Head>
        <Row>
          <Cell>Duration</Cell>
          <Cell>Rewards</Cell>
          <Cell>Average / minute</Cell>
          <Cell>Remove</Cell>
        </Row>
      </Head>
      <Body>
        {#each store.history as historyEntry}
          {@const duration = historyEntry.duration}
          {@const rewards = historyEntry.rewards.map(reward => getCostSpan(reward)).join(' / ')}
          {@const average = calculateAverages(duration, historyEntry.rewards).map(reward => getCostSpan(reward)).join(' / ')}
          <Row>
            <Cell>{secondsToMinutes(duration)}</Cell>
            <Cell>{@html rewards}</Cell>
            <Cell>{@html average}</Cell>
            <Cell>
              <Button onclick={()=>removeRun(historyEntry.id)}>X</Button>
            </Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  </Content>

  <Actions>
    <Button>Close</Button>
  </Actions>
</Dialog>
