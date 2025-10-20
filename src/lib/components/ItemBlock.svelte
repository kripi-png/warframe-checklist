<script lang="ts">
  import type { ChecklistStore, DatasetBlock } from '$lib/types/data';
  import type { Arcane, Item } from '$lib/types/item';
  import { getContext } from 'svelte';
  // import Tooltip from '@smui/tooltip';
  import { Grid } from '@mediakular/gridcraft';
  import ItemControls from './molecules/ItemControls.svelte';
  import { deconstructItemId } from '$lib/dataManager';
  import InputWithButtons from './molecules/InputWithButtons.svelte';

  interface Props {
    block: DatasetBlock;
  }
  let { block }: Props = $props();

  let items = $derived(block.items);
  const store = getContext<ChecklistStore>('checklist');

  let completedCount = $derived(items.filter((item) => item.checked).length);
  let totalPrice = $derived.by(() => {
    let total = 0;
    for (let item of items) {
      if (!item.price || item.checked) continue;
      let price = item.price;
      // calculate remaining to max level
      if (block.type === 'arcane') {
        const arcane = item as Arcane;
        const total = arcane.maxLevel === 5 ? 21 : 10;
        // clamp to 0
        const remaining = Math.max(0, total - arcane.ownedCount);
        price = remaining * price;
      }
      total += price;
    }
    return total;
  });

  let columns = $derived([
    {
      key: 'checked',
      title: '',
      width: 45,
      visible: false,
      accessor: (item: Item | Arcane) => {
        return item.checked ? '✔️' : ' ';
      },
    },
    { key: 'name', title: 'Name', width: 150 },
    { key: 'price', title: 'Price' },
    {
      key: 'arcane_needed',
      title: 'Needed',
      visible: block.type === 'arcane',
      accessor: (row: Item | Arcane) => {
        const arcane = row as Arcane;
        const total = arcane.maxLevel === 5 ? 21 : 10;
        return String(Math.max(0, total - arcane.ownedCount));
      },
    },
    {
      key: 'arcane_owned',
      title: 'Owned',
      visible: block.type === 'arcane',
      accessor: (row: Item | Arcane) => {
        const arcane = row as Arcane;
        return {
          value: arcane.ownedCount,
          min: 0,
          onChange: (value: number) => {
            if (!arcane.id) return;
            store.setArcane(block.id, deconstructItemId(arcane.id)[0], value); //arcane.ownedCount = value;
          },
        };
      },
      sortValue: (row: Arcane | Item) => (<Arcane>row).ownedCount,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderComponent: InputWithButtons as any,
    },
    {
      key: 'item_actions',
      title: 'Actions',
      visible: block.type === 'item',
      accessor: (row: Item | Arcane) => {
        const item = row as Item;
        return {
          item,
          buyClicked: () => {
            throw new Error('Not implemented');
          },
          dropClicked: () => {
            if (!item.id) return;
            store.toggleItem(block.id, deconstructItemId(item.id)[0]);
          },
        };
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderComponent: ItemControls as any,
    },
  ]);
</script>

<div>
  <h2 class="text-center text-2xl font-bold text-white">{block.title}</h2>
  <h3 class="text-center">{completedCount} / {block.items.length}</h3>
  <h3 class="text-center"><span class="text-xs">Fergolyte:</span> {totalPrice}</h3>
  <Grid bind:data={items} bind:columns />
</div>
