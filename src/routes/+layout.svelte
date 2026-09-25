<script lang="ts">
import '../app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import favicon from '$lib/assets/favicon.svg';
// import Paper from '@smui/paper';
import LayoutGrid, { Cell } from '@smui/layout-grid';
import { initLayout } from '$lib/layout.svelte';

let { children } = $props();
const slots = initLayout();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<LayoutGrid>
  <Cell span={2}>
    {#if slots.custom}
      {@render slots.custom()}
    {/if}

    <!-- <Paper> -->
      <!-- <nav>
        <h1>Warframes</h1>
        <h2>- Citrine</h2>
        <h2>- Temple</h2>
        <h2>- Oraxia</h2>

        <h1>Factions</h1>
        <h2>- The Hex</h2>
        <h2>- Nightcap</h2>
      </nav> -->
    <!-- </Paper> -->
  </Cell>
  <Cell spanDevices={{ desktop: 10, tablet: 6, phone: 12 }}>
    <main>
      {@render children?.()}
    </main>
  </Cell>
</LayoutGrid>
