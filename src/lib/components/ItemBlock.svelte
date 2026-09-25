<script lang="ts">
import { DataTable } from '@careswitch/svelte-data-table';
import ItemControls from './molecules/ItemControls.svelte';
import InputWithButtons from './molecules/InputWithButtons.svelte';
import { getChecklistContext } from '$lib/context/checklist';
import type { PageSection } from '$lib/data/types';
import BlockTitleArea from './BlockTitleArea.svelte';
import { itemName } from '$lib/utils';

const checklist = getChecklistContext();
type Props = {
  section: PageSection;
};
let { section }: Props = $props();

let isOpen = $state(true);

const table = $derived(new DataTable({
  pageSize: 1000,
  data: [...section.items],
  columns: [
    { id: 'name', key: 'itemId', name: 'Name' },
    { id: 'price', key: 'cost', name: 'Price' },
    // use isDrop key for rendering the buy and drop buttons
    { id: 'needed', key: 'amountNeeded', name: 'Needed' },
    { id: 'owned', key: 'itemId', name: 'Owned' },
    { id: 'actions', key: 'itemId', name: 'Actions' },
  ],
}));

$effect(() => {
  table.baseRows = [...section.items];
});
</script>

<div class="checklist">
  <BlockTitleArea bind:isOpen={isOpen} section={section} />
  {#if isOpen}
    <table>
        <tbody>
    		{#each table.rows as sectionItem (sectionItem.itemId)}
    			<tr>
    				{#each table.columns as column (column.id)}
                        {@const item = checklist.getItem(sectionItem.itemId)}
                        {#if item}
        				    {@const canAfford = checklist.canAfford(sectionItem.itemId)}
        				    {@const isCompleted = checklist.isCompleted(sectionItem.itemId)}
                            {#if column.id === 'name'}
                                <td>
                                    {itemName(sectionItem.itemId)}
                                    {#if isCompleted}
                                        <button onclick={() => checklist.setAcquired(item.id, 0)}>✔️</button>
                                    {/if}
                                </td>
                            {:else if column.id === 'price'}
          						<td>
                                    {#if sectionItem.cost?.length === 1}
                                        {sectionItem.cost[0].quantity}
                                    {:else if sectionItem.cost?.length === 2}
                                        <span style="color: red;">{sectionItem.cost[0].quantity}</span>
                                        <span style="color: royalblue;">{sectionItem?.cost[1].quantity}</span>
                                    {/if}
                                </td>
                            {:else if column.id === 'needed' && checklist.getRequiredToComplete(sectionItem.itemId) > 1}
                                <td>
                                    {checklist.getRequiredToComplete(item.id)}
                                </td>
                            {:else if column.id === 'owned' && checklist.getRequiredToComplete(sectionItem.itemId) > 1}
                                <td>
                                    <InputWithButtons
                                        value={checklist.getAcquired(item.id)}
                                        min={0}
             							onChange={(value: number) => {
                				            checklist.setAcquired(item.id, value);
        								}}
         							/>
                                </td>
                            {:else if column.id === 'actions'}
                                <td>
                                    <ItemControls
                                        sectionItem={sectionItem}
                                        canAfford={canAfford}
                                        isCompleted={isCompleted}
                                        isDrop={item.isDrop ?? false}
                                        buyClicked={() => {
                                          checklist.purchase(item.id);
                                        }}
                                        dropClicked={() => {
                                          checklist.addAcquired(item.id, 1);
                                        }}
                                    />
                                </td>
                           	{/if}
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
