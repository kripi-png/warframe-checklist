<script lang="ts">
import Tooltip, { Wrapper } from '@smui/tooltip';
import DataTable, { Head, Body, Row, Cell, Label } from '@smui/data-table';
import ItemControls from './molecules/ItemControls.svelte';
import InputWithButtons from './molecules/InputWithButtons.svelte';
import { getChecklistContext } from '$lib/context/checklist';
import type { PageSection } from '$lib/data/types';
import BlockTitleArea from './BlockTitleArea.svelte';
import { getCostColor, itemName } from '$lib/utils';
import { settingsStore } from '$lib/stores/UserSettings';

const checklist = getChecklistContext();
type Props = {
  section: PageSection;
  rotation: number | null;
};
let { section, rotation }: Props = $props();

const includeHelminthSacrifice = $derived(
  settingsStore.getSetting('includeHelminthSacrifice') as boolean,
);
const hideCompleted = $derived(
  settingsStore.getSetting('hideCompleted') as boolean,
);

let completedCount = $derived(
  section.items.filter((sItem) =>
    checklist.isCompleted(sItem.itemId, includeHelminthSacrifice),
  ).length,
);

const isCompleted = $derived(
  hideCompleted && completedCount === section.items.length,
);
let isOpen = $derived(settingsStore.isSectionOpen(section.id) && !isCompleted);
</script>

<div class="checklist">
  <BlockTitleArea bind:isOpen={isOpen} {section} {completedCount} {rotation} />
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
          <Cell columnId="price">
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
        {#each section.items as sectionItem, i (sectionItem.itemId + '_' + i)}
          {@const item = checklist.getItem(sectionItem.itemId)}
          {#if item}
            {@const canAfford = checklist.canAfford(sectionItem.itemId)}
				    {@const isCompleted = checklist.isCompleted(sectionItem.itemId, includeHelminthSacrifice)}
            {@const requiredToComplete = checklist.getRequiredToComplete(sectionItem.itemId, includeHelminthSacrifice)}
            <!-- if hideCompleted === true and item is completed, hide it from the list -->
            <Row style={`display: ${settingsStore.getSetting('hideCompleted') && isCompleted ? 'none' : 'table-row'};`}>
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
              <Cell>
                <Wrapper>
                  <div class="flex w-full justify-between items-center">
                    {#each sectionItem.cost?.filter(cost => cost.resourceId !== 'pathos-clamp') as cost}
                      <span style={`color: ${getCostColor(cost.resourceId)};`}>{cost.quantity}</span>
                    {/each}
                  </div>
                  <Tooltip xPos="center" yPos="above">
                    <Label class="text-lg">{sectionItem.cost?.map((cost) => `${itemName(cost.resourceId)} ${cost.quantity}`).join(", ")}</Label>
                  </Tooltip>
                </Wrapper>
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
