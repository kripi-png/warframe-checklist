<script lang="ts">
// Helper component to calculate the actual size of a section block, and use
// that size in masonry-grid's Frame.

import { Frame } from '@masonry-grid/svelte';

let { children }: { children: import('svelte').Snippet } = $props();

let element: HTMLDivElement;
let width = $state(1);
let height = $state(1);

$effect(() => {
  const observer = new ResizeObserver(([entry]) => {
    width = entry.target.scrollWidth;
    height = entry.target.scrollHeight;
  });

  observer.observe(element);

  return () => observer.disconnect();
});
</script>

<Frame {width} {height}>
  <div bind:this={element}>
    {@render children()}
  </div>
</Frame>
