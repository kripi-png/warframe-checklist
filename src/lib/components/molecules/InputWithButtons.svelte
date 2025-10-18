<script module lang="ts">
  import type { Props as InputProps } from '../atoms/Input.svelte';
  interface Props extends InputProps {
    value: number;
  }
</script>

<script lang="ts">
  import Input from '../atoms/Input.svelte';

  let { value = $bindable(0), ...rest }: Props = $props();

  const increment = () => value++;
  const decrement = () => value--;
</script>

<!-- TODO: Input highlighting -->
<div class="flex w-max rounded-2xl text-2xl">
  <button onclick={decrement} aria-label="decrement" class="px-2 py-1">
    <i class="fa-solid fa-minus"></i>
  </button>

  <Input {...rest} className="w-10 text-center" bind:value type="number" />

  <button onclick={increment} aria-label="increment" class="px-2 py-1">
    <i class="fa-solid fa-plus"></i>
  </button>
</div>
