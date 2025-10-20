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
</script>

<div class="flex w-max">
  <button onclick={decrement} aria-label="decrement" class="">
    <i class="fa-solid fa-minus"></i>
  </button>

  <input
    onchange={(e) => onChange(Number(e.currentTarget.value))}
    {...rest}
    class="w-10 text-center"
    bind:value
    type="number"
  />

  <button onclick={increment} aria-label="increment" class="">
    <i class="fa-solid fa-plus"></i>
  </button>
</div>

<style>
  div {
    margin: 0 auto;
  }
</style>
