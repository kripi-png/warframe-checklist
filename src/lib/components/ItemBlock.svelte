<script lang="ts">
import { DataTable } from '@careswitch/svelte-data-table';
import ItemControls from './molecules/ItemControls.svelte';
import InputWithButtons from './molecules/InputWithButtons.svelte';
import { isArcane } from '$lib/utils';
import { getChecklistContext } from '$lib/context/checklist';
import type { TGeneralItem } from '$lib/types/data';
import BlockTitleArea from './BlockTitleArea.svelte';

const checklist = getChecklistContext();
type Props = {
  block: (typeof checklist.blocks)[number];
};
let { block }: Props = $props();

let isOpen = $state(true);

type DataListType = TGeneralItem & {
  actions: string;
  arcane_needed: string;
  arcane_owned: string;
};

const table = new DataTable({
  pageSize: 1000,
  data: [...block.items] as DataListType[],
  columns: [
    { id: 'name', key: 'name', name: 'Name' },
    { id: 'price', key: 'price', name: 'Price' },
    // use isDrop key for rendering the buy and drop buttons
    { id: 'needed', key: 'arcane_needed', name: 'Needed' },
    { id: 'owned', key: 'arcane_owned', name: 'Owned' },
    { id: 'actions', key: 'actions', name: 'Actions' },
  ],
});

$effect(() => {
  table.baseRows = [...block.items] as DataListType[];
});
</script>

<div class="checklist">
  <BlockTitleArea bind:isOpen={isOpen} block={block} />
  {#if isOpen}
    <table>
        <tbody>
    		{#each table.rows as row (row.id)}
    			<tr>
    				{#each table.columns as column (column.id)}
    				    {@const canAfford = checklist.canAfford(checklist.balance, row.price)}
    				    {#if column.id === 'name'}
    						<td>
    						    {#if !isArcane(row) && row.forHelminth}(H){/if}
    							{row[column.key]}
    							{#if row.checked}
    							    <button onclick={() => checklist.setItemCount(row.id, 0)}>✔️</button>
    							{/if}
    						</td>
    					{:else if column.id === 'price'}
    						<td>
    							{row[column.key]}
    						</td>
    					{:else if column.id === 'needed' && isArcane(row)}
    						<td>
                                {String(Math.max(0, row.maxLevel === 5 ? 21 : 10 - row.ownedCount))}
    						</td>
    					{:else if column.id === 'owned' && isArcane(row)}
    						<td>
    		                    <InputWithButtons
    								value={row.ownedCount}
    								min={0}
    								onChange={(value: number) => {
    									checklist.setItemCount(row.id, value);
    								}}
    							/>
    						</td>
    					{:else if column.id === 'actions'}
    						<td>
    						    <ItemControls
    								item={row}
    								canAfford={canAfford}
    								buyClicked={() => {
    									checklist.buyItem(row.id);
    								}}
    								dropClicked={() => {
    									checklist.addItemCount(row.id, 1);
    								}}
    							/>
    						</td>
    					{/if}
    				{/each}
    			</tr>
    		{/each}
    	</tbody>
    </table>
  {/if}
</div>

<style>
    td { padding: 2px; }
</style>
