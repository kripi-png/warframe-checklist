<script lang="ts">
import { getChecklistContext } from '$lib/context/checklist';
import type { TArcaneBlock, TGeneralMoney, TItemBlock } from '$lib/types/data';
import { isArcane } from '$lib/utils';

type Props = {
  block: TArcaneBlock<TGeneralMoney> | TItemBlock<TGeneralMoney>;
  isOpen: boolean;
};
let { block, isOpen = $bindable() }: Props = $props();
const checklist = getChecklistContext();

let completedCount = $derived(
  block.items.filter((item) => item.checked).length,
);

let totalPrice = $derived.by(() => {
  if (Array.isArray(checklist.balance)) {
    return block.items.reduce(
      (acc, item) => {
        if (item.checked) return acc;
        if (!Array.isArray(item.price)) return acc;
        acc[0] += item.price[0];
        acc[1] += item.price[1];
        return acc;
      },
      [0, 0] as [number, number],
    );
  }
  let total = 0;
  for (let item of block.items) {
    if (!item.price || item.checked) continue;
    let price = item.price as number;
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
</script>

<h2 class="text-center text-2xl font-bold text-white">
    {block.title}
    <button onclick={() => {isOpen = !isOpen}}>{isOpen? '⬆️' : '⬇️'}</button>
</h2>
<h3 class="text-center">{completedCount} / {block.items.length}</h3>
<h3 class="text-center">
  <span class="text-xs">Fergolyte:</span>
  {Array.isArray(totalPrice) ? totalPrice.join(' | ') : totalPrice}
</h3>
