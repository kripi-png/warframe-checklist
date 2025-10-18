<script module lang="ts">
  import Paper from '@smui/paper';
  import Checkbox from '@smui/checkbox';
  import type { Item } from '$lib/../routes/nokko/+page.svelte';
  interface Props {
    title: string;
    type: 'item' | 'arcane';
    items: Item[];
  }
</script>

<script lang="ts">
  let { title, type, items = $bindable() }: Props = $props();

  let totalPrice = $derived(items.reduce((acc, item) => acc + (!item.checked ? item.price : 0), 0));
  let completedCount = $derived(items.filter((item) => item.checked).length);

  const onCheck = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const id = Number(target.parentElement?.dataset.id);
    items[id].checked = target.checked;
  };
</script>

<Paper>
  <h2 class="text-2xl font-bold text-white">{title}</h2>
  <h3>{completedCount} / {items.length}</h3>
  <h3>Total: {totalPrice} Fergolyte</h3>
  <div class="flex flex-col text-white">
    {#each items as item, i (item)}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <Checkbox data-id={i} onchange={onCheck} checked={item.checked} />
          <h4 class="">{item.name} {item.forHelminth ? '(H)' : ''}</h4>
        </div>
        <span>{item.price}</span>
      </div>
    {/each}
  </div>
</Paper>
