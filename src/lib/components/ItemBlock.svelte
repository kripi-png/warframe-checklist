<script lang="ts">
import DataTable, {
  Head,
  Body,
  Row,
  Cell,
  Label
} from '@smui/data-table';
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
</script>

<div class="checklist">
  <BlockTitleArea bind:isOpen={isOpen} section={section} />
  {#if isOpen}
    <DataTable
      table$aria-label={`List for ${section.name} items`}
      style="width: 100%;"
    >
      <Head>
        <Row>
          <Cell columnId="name">
            <Label>Name</Label>
          </Cell>
          <Cell columnId="isCompleted"></Cell>
          <Cell numeric columnId="price">
            <Label>Price</Label>
          </Cell>
          <Cell columnId="actions">
            <div class="w-full text-center">
              <Label>Actions</Label>
            </div>
          </Cell>
        </Row>
      </Head>
      <Body>
        {#each section.items as sectionItem (sectionItem.itemId)}
          {@const item = checklist.getItem(sectionItem.itemId)}
          {#if item}
            {@const canAfford = checklist.canAfford(sectionItem.itemId)}
				    {@const isCompleted = checklist.isCompleted(sectionItem.itemId)}
            {@const requiredToComplete = checklist.getRequiredToComplete(sectionItem.itemId)}
            <Row>
              <!-- NAME & COUNT -->
              <Cell>
                {#if requiredToComplete > 1}
                  <span>{requiredToComplete}x</span>
                {/if}
                {itemName(sectionItem.itemId)}
              </Cell>
              <!-- IS COMPLETED -->
              <Cell>
                {#if isCompleted}
                  <button style="cursor: pointer;" onclick={() => checklist.setAcquired(item.id, 0)}>✔️</button>
                {:else}
                  <button style="cursor: pointer;" onclick={() => checklist.setAcquired(item.id, requiredToComplete)}>❌</button>
                {/if}
              </Cell>
              <!-- PRICE -->
              <Cell numeric>
                {#if sectionItem.cost?.length === 1}
                    {sectionItem.cost[0].quantity}
                {:else if sectionItem.cost?.length === 2}
                    <span style="color: red;">{sectionItem.cost[0].quantity}</span>
                    <span style="color: royalblue;">{sectionItem?.cost[1].quantity}</span>
                {/if}
              </Cell>
              <!-- ACTIONS -->
              <Cell>
                <div class="flex flex-wrap justify-center">
                  {#if requiredToComplete > 1}
                    <InputWithButtons
                      value={checklist.getAcquired(item.id)}
                      min={0}
    	      					onChange={(value: number) => {
       			            checklist.setAcquired(item.id, value);
     	        				}}
     	         			/>
                  {/if}
                  <ItemControls
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
                </div>
              </Cell>
            </Row>
          {/if}
        {/each}
      </Body>
    </DataTable>
  {/if}
</div>
