<script lang="ts">
import Button, { Group } from '@smui/button';

interface Props {
  value: number;
  min?: number | string;
  max?: number | string;
  onChange?: (value: number) => void;
}

let { value = $bindable(0), onChange = () => null, ...rest }: Props = $props();

const increment = () => {
  // if max is not specified OR value is low enough
  if (rest.max === undefined || value < Number(rest.max)) {
    value += 1;
    onChange(value);
  }
};
const decrement = () => {
  // if min is not specified OR value is high enough
  if (rest.min === undefined || value > Number(rest.min)) {
    value -= 1;
    onChange(value);
  }
};

const _onChange = (newValue: number) => {
  if (rest?.min !== undefined && newValue < Number(rest.min)) {
    value = Number(rest.min);
    return;
  } else if (rest?.max !== undefined && newValue > Number(rest.max)) {
    value = Number(rest.max);
    return;
  }

  onChange(newValue);
};
</script>

<Group class="flex basis-full justify-center">
  <!-- decrement button -->
  <Button class="compact-item" onclick={decrement} aria-label="decrement">
    <i class="fa-solid fa-minus"></i>
  </Button>

  <!-- count -->
  <input
    onchange={(e) => _onChange(Number(e.currentTarget.value))}
    {...rest}
    class="w-10 text-center compact-item"
    bind:value
    type="number"
  />

  <!-- increment button -->
  <Button class="compact-item" onclick={increment} aria-label="increment">
    <i class="fa-solid fa-plus"></i>
  </Button>
</Group>

<style>
  :global(.compact-item) {
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 0;
  }
</style>
