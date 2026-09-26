<script lang="ts">
import '../app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import favicon from '$lib/assets/favicon.svg';
import LayoutGrid, { Cell } from '@smui/layout-grid';
import { initLayout } from '$lib/layout.svelte';
import Button from '@smui/button';
import { goto } from '$app/navigation';

let { children } = $props();
const slots = initLayout();

const goHome = () => {
  goto('/');
};
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<LayoutGrid>
  {#if slots.custom}
    <Cell span={2}>
      <Button onclick={goHome} class="text-white text-3xl"><i class="fa-solid fa-arrow-left"></i> Back</Button>
      {@render slots.custom()}
    </Cell>
  {/if}
  <Cell spanDevices={{ desktop: 10, tablet: 6, phone: 12 }}>
    <main>
      {@render children?.()}
    </main>
  </Cell>
</LayoutGrid>
