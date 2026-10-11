<script lang="ts">
import type { Cost } from '$lib/data/types';
import { itemName } from '$lib/utils';
import TextField from '@smui/textfield';

interface Props {
  resource: Cost;
  setBalance: (balance: { resourceId: string; quantity: number }) => void;
}

let { resource, setBalance }: Props = $props();

let inputValue = $state("0");
$effect(() => {
  inputValue = resource.quantity.toString();
});

const parseInput = () => {
  try {
    // sum the values in the input
    const value: number = Number(eval(inputValue));
    if (!Number.isFinite(value)) return;

    inputValue = value.toString();

    setBalance({
      resourceId: resource.resourceId,
      quantity: value,
    });
  } catch {
    inputValue = '0';
    setBalance({
      resourceId: resource.resourceId,
      quantity: 0,
    });
  }
};
</script>

<TextField
  bind:value={inputValue}
  label={`Owned ${itemName(resource.resourceId)}`}
  onfocusout={parseInput}
/>
