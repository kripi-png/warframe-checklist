<script lang="ts">
interface Props {
  value: number;
  min?: number | string;
  max?: number | string;
  onChange?: (value: number) => void;
}

let { value = $bindable(0), onChange = () => {}, ...rest }: Props = $props();

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

<div class="flex w-max">
  <!-- decrement button -->
  <button onclick={decrement} aria-label="decrement" class="">
    <i class="fa-solid fa-minus"></i>
  </button>

  <!-- count -->
  <input
    onchange={(e) => _onChange(Number(e.currentTarget.value))}
    {...rest}
    class="w-10 text-center"
    bind:value
    type="number"
  />

  <!-- increment button -->
  <button onclick={increment} aria-label="increment" class="">
    <i class="fa-solid fa-plus"></i>
  </button>
</div>

<style>
  div {
    margin: 0 auto;
  }
</style>
