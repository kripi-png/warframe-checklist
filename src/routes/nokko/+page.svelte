<script module lang="ts">
  export interface Item {
    name: string;
    wikiUrl: string;
    price: number;
    checked: boolean;
    forHelminth?: boolean;
  }

  interface Arcane {
    name: string;
    price: number;
    maxLevel: 5;
    currentLevel: 0 | 1 | 2 | 3 | 4 | 5;
    owned: number;
    wikiUrl: string;
    checked: boolean;
  }

  interface DataBlock {
    title: string;
    type: 'item' | 'arcane';
    items: Item[] | Arcane[];
  }

  interface Data {
    blocks: DataBlock[];
  }

  const rawData: Data = {
    blocks: [
      {
        title: 'Nokko & Weapons',
        type: 'item',
        items: [
          { name: 'Nokko Blueprint', price: 240, checked: false, wikiUrl: '' },
          { name: 'Nokko Chassis', price: 160, checked: false, wikiUrl: '' },
          { name: 'Nokko Neuro', price: 160, checked: false, wikiUrl: '' },
          { name: 'Nokko Systems', price: 160, checked: false, wikiUrl: '' },
          { name: 'Nokko Blueprint', price: 240, checked: false, wikiUrl: '', forHelminth: true },
          { name: 'Nokko Chassis', price: 160, checked: false, wikiUrl: '', forHelminth: true },
          { name: 'Nokko Neuro', price: 160, checked: false, wikiUrl: '', forHelminth: true },
          { name: 'Nokko Systems', price: 160, checked: false, wikiUrl: '', forHelminth: true },
          { name: 'Arbucep Blueprint', price: 220, checked: false, wikiUrl: '' },
          { name: 'Arbucep Barrel', price: 150, checked: false, wikiUrl: '' },
          { name: 'Arbucep Receiver', price: 150, checked: false, wikiUrl: '' },
          { name: 'Arbucep Stock', price: 150, checked: false, wikiUrl: '' },
        ],
      },
      {
        title: 'Arcanes',
        type: 'arcane',
        items: [
          {
            name: 'Primary Frostbite',
            maxLevel: 5,
            currentLevel: 0,
            owned: 0,
            price: 150,
            wikiUrl: '',
            checked: false,
          },
          {
            name: 'Primary Blight',
            maxLevel: 5,
            currentLevel: 0,
            owned: 0,
            price: 150,
            wikiUrl: '',
            checked: false,
          },
          {
            name: 'Conjunction Voltage',
            maxLevel: 5,
            currentLevel: 0,
            owned: 0,
            price: 150,
            wikiUrl: '',
            checked: false,
          },
          {
            name: 'Secondary Encumber',
            maxLevel: 5,
            currentLevel: 0,
            owned: 0,
            price: 150,
            wikiUrl: '',
            checked: false,
          },
          {
            name: 'Secondary Fortifier',
            maxLevel: 5,
            currentLevel: 0,
            owned: 0,
            price: 150,
            wikiUrl: '',
            checked: false,
          },
        ],
      },
      {
        title: 'The Prince',
        type: 'item',
        items: [
          { name: 'Level 1', price: 20, wikiUrl: '', checked: false },
          { name: 'Level 2', price: 40, wikiUrl: '', checked: false },
          { name: 'Level 3', price: 60, wikiUrl: '', checked: false },
        ],
      },
      {
        title: 'Misc',
        type: 'item',
        items: [
          { name: 'Rizoma Ephemera', price: 150, wikiUrl: '', checked: false },
          { name: 'Ayatan Chattraka Sculpture', price: 75, wikiUrl: '', checked: false },
          { name: "Roots N' Fruits", price: 25, wikiUrl: '', checked: false },
          { name: "Roots N' Fruits Poster", price: 25, wikiUrl: '', checked: false },
          { name: 'Onemind', price: 25, wikiUrl: '', checked: false },
          { name: 'Onemind Poster', price: 25, wikiUrl: '', checked: false },
          { name: 'Shooms', price: 25, wikiUrl: '', checked: false },
          { name: 'Shooms Poster', price: 25, wikiUrl: '', checked: false },
          { name: 'Deepmines Lab Scene', price: 60, wikiUrl: '', checked: false },
          { name: 'Deepmines Forward Base Scene', price: 60, wikiUrl: '', checked: false },
          { name: 'Deepmine Nutrient Plant Scene', price: 60, wikiUrl: '', checked: false },
        ],
      },
      {
        title: 'Nursery',
        type: 'item',
        items: [
          { name: 'Autumnal Bonsai', price: 10, wikiUrl: '', checked: false },
          { name: 'Lanceleaf Plant', price: 10, wikiUrl: '', checked: false },
          { name: 'Monstera Plant', price: 10, wikiUrl: '', checked: false },
          { name: 'Mushroom Clump', price: 10, wikiUrl: '', checked: false },
          { name: 'Yellow Daisy Cluster', price: 10, wikiUrl: '', checked: false },
          { name: 'Rho Plant', price: 10, wikiUrl: '', checked: false },
          { name: 'Filter Flower', price: 10, wikiUrl: '', checked: false },
          { name: 'Grossa Fern', price: 10, wikiUrl: '', checked: false },
          { name: "Bird's Nest Gern (Narrowly Opened)", price: 10, wikiUrl: '', checked: false },
          { name: 'Mocfi Fern', price: 10, wikiUrl: '', checked: false },
          { name: 'Sunlight Dragonlily Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Moonlight Dragonlily Decoration', price: 10, wikiUrl: '', checked: false },
          { name: "Ruk's Claw Decoration", price: 10, wikiUrl: '', checked: false },
          { name: 'Moonlight Threshcone Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Sunlight Threshcone Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Moonlight Jadeleaf Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Sunlight Jadeleaf Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Silver Lady Fern', price: 10, wikiUrl: '', checked: false },
          { name: 'Fern (Healthy)', price: 10, wikiUrl: '', checked: false },
          { name: 'Fern (Brown)', price: 10, wikiUrl: '', checked: false },
          { name: 'Boxwood Hedge (1x1m)', price: 10, wikiUrl: '', checked: false },
          { name: 'Infested Flower (Single)', price: 10, wikiUrl: '', checked: false },
          { name: 'Infested Flower (Pair)', price: 10, wikiUrl: '', checked: false },
          { name: 'Croton Plant (Green, Single)', price: 10, wikiUrl: '', checked: false },
          { name: 'Croton Plant (Green, Cluster)', price: 10, wikiUrl: '', checked: false },
          { name: 'Croton Plant (Yellow, Single)', price: 10, wikiUrl: '', checked: false },
          { name: 'Croton Plant (Yellow, Cluster)', price: 10, wikiUrl: '', checked: false },
          { name: 'Palm Shrum (Small)', price: 10, wikiUrl: '', checked: false },
          { name: 'Palm Shrum (Medium)', price: 10, wikiUrl: '', checked: false },
          { name: 'Ficus Tree (Single)', price: 10, wikiUrl: '', checked: false },
          { name: 'Ficus Tree (Cluster)', price: 10, wikiUrl: '', checked: false },
          { name: 'Hanging Ivy (Narrow)', price: 10, wikiUrl: '', checked: false },
          { name: 'Hanging Ivy (Wide)', price: 10, wikiUrl: '', checked: false },
          { name: 'Ivy Tendrils', price: 10, wikiUrl: '', checked: false },
          { name: 'Ivy Vine', price: 10, wikiUrl: '', checked: false },
          { name: 'Ivy Patch', price: 10, wikiUrl: '', checked: false },
          { name: 'Vestan Moss Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Ghost Bush (Sickly)', price: 10, wikiUrl: '', checked: false },
          { name: 'Orokin Bush (Small)', price: 10, wikiUrl: '', checked: false },
          { name: 'Geisang Reeds', price: 10, wikiUrl: '', checked: false },
          { name: 'Glow Plants (Dense)', price: 10, wikiUrl: '', checked: false },
          { name: 'Glow Plants (Sparse)', price: 10, wikiUrl: '', checked: false },
          { name: 'Vallis Fern', price: 10, wikiUrl: '', checked: false },
          { name: 'Vallis Mushrooms (Small Group)', price: 10, wikiUrl: '', checked: false },
          { name: 'Bush Cluster (Dense)', price: 10, wikiUrl: '', checked: false },
          { name: 'Autumn Tuvul Sapling', price: 10, wikiUrl: '', checked: false },
          { name: 'Dusklight Sarracenia Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Frostleaf Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Grass Tuft (Short)', price: 10, wikiUrl: '', checked: false },
          { name: 'Lunar Pitcher Decoration', price: 10, wikiUrl: '', checked: false },
          { name: 'Grass Tuft (Tall)', price: 10, wikiUrl: '', checked: false },
          { name: 'Planter (Small, Wood)', price: 10, wikiUrl: '', checked: false },
          { name: 'Planter Box Foliage (Small)', price: 10, wikiUrl: '', checked: false },
          { name: 'Planter (Large, Wood)', price: 10, wikiUrl: '', checked: false },
          { name: 'Planter (Small, Stone)', price: 10, wikiUrl: '', checked: false },
          { name: 'Hanging Flowerpot (Wide)', price: 10, wikiUrl: '', checked: false },
          { name: 'Assorted Flowers (Red And White)', price: 10, wikiUrl: '', checked: false },
          { name: 'Assorted Flowers (Blue And White)', price: 10, wikiUrl: '', checked: false },
          { name: 'Hanging Flowerpot (Narrow)', price: 10, wikiUrl: '', checked: false },
          { name: 'Planter (Clay)', price: 10, wikiUrl: '', checked: false },
        ],
      },
    ],
  };
</script>

<script lang="ts">
  import Paper from '@smui/paper';
  // import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import ItemBlock from '$lib/components/ItemBlock.svelte';
  import Masonry from '$lib/components/Masonry.svelte';
  import { persistedState } from 'svelte-persisted-state';
  import { layout } from '$lib/layout.svelte';
  layout({ custom });

  let money = $state(0);
  const data = persistedState<Data>('nokko', rawData);
</script>

{#snippet custom()}
  <!-- class="flex-col gap-2" -->
  <Paper>
    <h1>Nightcap</h1>
    <TextField bind:value={money} label="Owned Fergolite" type="number">
      <!-- {#snippet helper()}
            <HelperText>Helper Text</HelperText>
          {/snippet} -->
    </TextField>
    <!-- <Button disabled>Field Guide</Button> -->
  </Paper>
{/snippet}

<Masonry>
  {#each data.current.blocks as block (block.title)}
    <ItemBlock title={block.title} type={block.type} bind:items={block.items} />
  {/each}
</Masonry>
