<script lang="ts">
import Button from '@smui/button';

interface Props {
  canAfford: boolean;
  isCompleted: boolean;
  isDrop: boolean;
  buyClicked: () => void;
  dropClicked: () => void;
}
let { canAfford, isCompleted, isDrop, buyClicked, dropClicked }: Props = $props();

let canPurchase = $derived(canAfford && !isCompleted);
</script>

<Button color="primary" onclick={buyClicked} disabled={!canPurchase}>Buy</Button>
{#if isDrop}
  <Button color="primary" onclick={dropClicked} disabled={isCompleted}>Drop</Button>
{/if}
