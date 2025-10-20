<script lang="ts">
  import type { Arcane } from '$lib/types/item';
  import InputWithButtons from './InputWithButtons.svelte';

  interface Props {
    arcane: Arcane;
  }
  let { arcane }: Props = $props();

  let level = $state(arcane.currentLevel);
  let owned = $state(arcane.ownedCount);
</script>

<InputWithButtons min={0} bind:value={level} max={arcane.maxLevel} />
<InputWithButtons min={0} bind:value={owned} />
