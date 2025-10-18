<script lang="ts">
  import { onMount } from 'svelte';
  import { layout } from '$lib/layout.svelte';
  layout({});

  let x = $state(0);

  onMount(() => {
    console.log('Page mounted');
  });
</script>

<h1>{x}</h1>

<button onclick={() => x++}>Increment</button>
