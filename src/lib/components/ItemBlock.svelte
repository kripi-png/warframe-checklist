<script lang="ts">
  import Paper from '@smui/paper';
  import Checkbox from '@smui/checkbox';
  import { type PersistedItem, type Item, deconstructItemId, getItemData } from '$lib/dataManager';

  interface Props {
    title: string;
    type: 'item' | 'arcane';
    items: PersistedItem[];
  }
  let { title, type: itemType, items = $bindable() }: Props = $props();

  let totalPrice = $derived(
    items.reduce((acc, item) => {
      const data = getItemData('nokko', item.id);
      if (data) return acc + data.price;
      return acc;
    }, 0),
  );
  let completedCount = $derived(items.filter((item) => item.checked).length);

  const onCheck = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const rawId = target.parentElement?.dataset.id;
    if (!rawId) return;

    const [id, _] = deconstructItemId(rawId);
    items[id].checked = target.checked;
  };
</script>

<Paper>
  <h2 class="text-2xl font-bold text-white">{title}</h2>
  <h3>{completedCount} / {items.length}</h3>
  <h3>Total: {totalPrice} Fergolyte</h3>
  <div class="flex flex-col text-white">
    {#each items as item (item.id)}
      {@const itemData = getItemData('nokko', item.id)}
      {#if itemData}
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <Checkbox data-id={item.id} onchange={onCheck} checked={item.checked} />
            <h4 class="">
              {itemData.name}
              {#if itemType === 'item'}
                {(<Item>itemData)?.forHelminth ? '(H)' : ''}
              {/if}
            </h4>
          </div>
          <span>{itemData.price}</span>
        </div>
      {/if}
    {/each}
  </div>
</Paper>
