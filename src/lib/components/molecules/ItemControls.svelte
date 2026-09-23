<script lang="ts">
import type {  SectionItem } from '$lib/data/types';
import Button from '@smui/button';

interface Props {
  sectionItem: SectionItem;
  canAfford: boolean;
  isCompleted: boolean;
  isDrop: boolean;
  buyClicked: () => void;
  dropClicked: () => void;
}
let { sectionItem, canAfford, isCompleted, isDrop, buyClicked, dropClicked }: Props = $props();

let canPurchase = $derived(canAfford && !isCompleted);
</script>

<Button color="primary" onclick={buyClicked} disabled={!canPurchase}>Buy</Button>
{#if isDrop}
    <Button color="primary" onclick={dropClicked} disabled={isCompleted}>
    Drop
    </Button>
{/if}
