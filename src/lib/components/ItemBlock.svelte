<script lang="ts">
  import type { ItemEntry } from '$lib/types/item';
  import type { DatasetBlock } from '$lib/types/data';
  import type { ChecklistStore } from '$lib/types/store';
  import { getContext } from 'svelte';
  // import Tooltip from '@smui/tooltip';
  import { Grid, PagingData } from '@mediakular/gridcraft';
  import ItemControls from './molecules/ItemControls.svelte';
  import InputWithButtons from './molecules/InputWithButtons.svelte';
  import { isArcane } from '$lib/utils';

  interface Props {
    block: DatasetBlock;
  }
  let { block }: Props = $props();

  const store = getContext<ChecklistStore>('checklist');

  let completedCount = $derived(block.items.filter((item) => item.checked).length);
  let totalPrice = $derived.by(() => {
    let total = 0;
    for (let item of block.items) {
      if (!item.price || item.checked) continue;
      let price = item.price;
      // calculate remaining to max level
      if (isArcane(item)) {
        const total = item.maxLevel === 5 ? 21 : 10;
        // clamp to 0
        const remaining = Math.max(0, total - item.ownedCount);
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
      accessor: (item: ItemEntry) => {
        return item.checked ? '✔️' : ' ';
      },
    },
    {
      key: 'name',
      title: 'Name',
      width: 150,
      accessor: (item: ItemEntry) => {
        if (isArcane(item) || !item.forHelminth) return item.name;
        return '(H) ' + item.name;
      },
    },
    { key: 'price', title: 'Price' },
    {
      key: 'arcane_needed',
      title: 'Needed',
      visible: block.type === 'arcane',
      accessor: (item: ItemEntry) => {
        if (!isArcane(item)) return null;
        const total = item.maxLevel === 5 ? 21 : 10;
        return String(Math.max(0, total - item.ownedCount));
      },
    },
    {
      key: 'arcane_owned',
      title: 'Owned',
      visible: block.type === 'arcane',
      accessor: (item: ItemEntry) => {
        if (!isArcane(item)) return null;
        return {
          value: item.ownedCount,
          min: 0,
          onChange: (value: number) => {
            if (item.id === undefined) return;
            store.setArcane(block.id, item.id, value); //arcane.ownedCount = value;
          },
        };
      },
      sortValue: (row: ItemEntry) => (isArcane(row) ? row.ownedCount : undefined),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderComponent: InputWithButtons as any,
    },
    {
      key: 'item_actions',
      title: 'Actions',
      visible: block.type === 'item',
      accessor: (item: ItemEntry) => {
        if (isArcane(item)) return null;
        return {
          row: item,
          buyClicked: () => {
            throw new Error('Not implemented');
          },
          dropClicked: () => {
            if (item.id === undefined) return;
            store.toggleItem(block.id, item.id);
          },
        };
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderComponent: ItemControls as any,
    },
  ]);
  let paging = {
    itemsPerPage: 9999,
    currentPage: 1,
  } as PagingData;

  // for faster reactivity in Grid; does not derive correctly for other usage however
  let _items = $derived(block.items);
</script>

<div>
  <h2 class="text-center text-2xl font-bold text-white">{block.title}</h2>
  <h3 class="text-center">{completedCount} / {block.items.length}</h3>
  <h3 class="text-center"><span class="text-xs">Fergolyte:</span> {totalPrice}</h3>
  <Grid bind:data={_items} {paging} bind:columns />
</div>
