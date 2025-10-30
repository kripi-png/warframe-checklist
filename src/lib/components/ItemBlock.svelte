<script lang="ts">
import { Grid, PagingData } from '@mediakular/gridcraft';
import ItemControls from './molecules/ItemControls.svelte';
import InputWithButtons from './molecules/InputWithButtons.svelte';
import { isArcane } from '$lib/utils';
import { getChecklistContext } from '$lib/context/checklist';
import type { TArcane, TGeneralItem, TGeneralMoney } from '$lib/types/data';
import BlockTitleArea from './BlockTitleArea.svelte';

const checklist = getChecklistContext();
type Props = {
  block: (typeof checklist.blocks)[number];
};
let { block }: Props = $props();

let columns = $derived([
  {
    key: 'checked',
    title: '',
    width: 45,
    accessor: (item: TGeneralItem) => {
      return item.checked ? '✔️' : ' ';
    },
  },
  {
    key: 'name',
    title: 'Name',
    width: 150,
    accessor: (item: TGeneralItem) => {
      if (isArcane(item) || !item.forHelminth) return item.name;
      return '(H) ' + item.name;
    },
  },
  {
    key: 'price',
    title: 'Price',
    accessor: (item: TGeneralItem) => {
      if (Array.isArray(item.price)) {
        return `${item.price[0]} | ${item.price[1]}`;
      }
      return item.price;
    },
  },
  {
    key: 'arcane_needed',
    title: 'Needed',
    visible: block.type === 'arcane',
    accessor: (_item: TGeneralItem) => {
      const item = <TArcane<TGeneralMoney>>_item;
      const total = item.maxLevel === 5 ? 21 : 10;
      return String(Math.max(0, total - item.ownedCount));
    },
  },
  {
    key: 'arcane_owned',
    title: 'Owned',
    visible: block.type === 'arcane',
    accessor: (item: TGeneralItem) => {
      if (!isArcane(item)) return null;
      return {
        value: item.ownedCount,
        min: 0,
        onChange: (value: number) => {
          checklist.setItemCount(item.id, value);
        },
      };
    },
    sortValue: (row: TGeneralItem) =>
      isArcane(row) ? row.ownedCount : undefined,
    // biome-ignore lint/suspicious/noExplicitAny: <Grid> columns break without
    renderComponent: InputWithButtons as any,
  },
  {
    key: 'item_actions',
    title: 'Actions',
    visible: block.type === 'item',
    accessor: (item: TGeneralItem) => {
      if (isArcane(item)) return null;
      return {
        row: item,
        canAfford: checklist.canAfford(checklist.balance, item.price),
        buyClicked: () => {
          checklist.buyItem(item.id);
        },
        dropClicked: () => {
          checklist.toggleItem(item.id);
        },
      };
    },
    // biome-ignore lint/suspicious/noExplicitAny: <Grid> columns break without
    renderComponent: ItemControls as any,
  },
]);
let paging = {
  itemsPerPage: 9999,
  currentPage: 1,
} as PagingData;

// for faster reactivity in Grid; does not derive correctly for other usage however
let items = $derived(block.items);
</script>

<div>
  <BlockTitleArea block={block} />
  <Grid bind:data={items} {paging} bind:columns />
</div>
