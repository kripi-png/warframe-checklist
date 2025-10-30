<script lang="ts">
  import type { TArcane } from '$lib/types/data';
  import InputWithButtons from './InputWithButtons.svelte';

  interface Props {
    arcane: TArcane;
  }
  let { arcane }: Props = $props();

  let level = $state(arcane.currentLevel);
  let owned = $state(arcane.ownedCount);
</script>

<InputWithButtons min={0} bind:value={level} max={arcane.maxLevel} />
<InputWithButtons min={0} bind:value={owned} />
