<script lang="ts">
import type { TGeneralItem } from '$lib/types/data';
import Button from '@smui/button';

interface Props {
  item: TGeneralItem;
  canAfford: boolean;
  buyClicked: () => void;
  dropClicked: () => void;
}
let { item, canAfford, buyClicked, dropClicked }: Props = $props();

let canPurchase = $derived(canAfford && !item.checked);
</script>

<Button color="primary" onclick={buyClicked} disabled={!canPurchase}>Buy</Button>
{#if item?.isDrop}
    <Button color="primary" onclick={dropClicked} disabled={item?.checked}>
    Drop
    </Button>
{/if}
