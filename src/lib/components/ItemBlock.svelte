<script lang="ts">
  import type { ChecklistStore, DatasetBlock } from '$lib/types/data';
  import type { Item } from '$lib/types/item';
  import { getContext } from 'svelte';
  import Paper from '@smui/paper';
  import Checkbox from '@smui/checkbox';

  interface Props {
    block: DatasetBlock;
  }
  let { block }: Props = $props();

  const store = getContext<ChecklistStore>('checklist');

  let totalPrice = $derived.by(() => {
    let total = 0;
    for (let item of block.items) {
      if (!item.price || item.checked) continue;
      total += item.price;
    }
    return total;
  });

  let completedCount = $derived(block.items.filter((item) => item.checked).length);

  const onCheck = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const id = Number(target.parentElement?.dataset.id);

    store.toggleItem(block.id, id);
  };
</script>

<Paper>
  <h2 class="text-2xl font-bold text-white">
    {block.title}
  </h2>
  <h3>{completedCount} / {block.items.length}</h3>
  <h3>Total: {totalPrice} Fergolyte</h3>
  <div class="flex flex-col text-white">
    {#each block.items as item, i (item)}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <Checkbox data-id={i} onchange={onCheck} checked={item.checked} />
          <h4 class="">
            {item.name}
            {#if block.type === 'item'}
              {(<Item>item)?.forHelminth ? '(H)' : ''}
            {/if}
          </h4>
        </div>
        <span>{item.price}</span>
      </div>
    {/each}
  </div>
</Paper>
