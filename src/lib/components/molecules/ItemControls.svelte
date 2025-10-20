<script lang="ts">
  import type { Item } from '$lib/types/item';
  import Button from '@smui/button';

  interface Props {
    item: Item;
    buyClicked: () => void;
    dropClicked: () => void;
  }
  let { item, buyClicked, dropClicked }: Props = $props();
</script>

<Button color="primary" onclick={buyClicked} disabled>Buy</Button>
<Button color="primary" onclick={dropClicked} disabled={item?.checked}>Drop</Button>
