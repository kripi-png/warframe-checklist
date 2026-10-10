import type { Item } from './types';

export const urielItems: Item[] = [
  { id: 'uriel-blueprint', type: 'warframe-part' },
  { id: 'uriel-chassis-blueprint', type: 'warframe-part' },
  { id: 'uriel-neuroptics-blueprint', type: 'warframe-part' },
  { id: 'uriel-systems-blueprint', type: 'warframe-part' },

  { id: 'vinquibus-blueprint', type: 'weapon-part' },
  { id: 'vinquibus-barrel-blueprint', type: 'weapon-part' },
  { id: 'vinquibus-blade-blueprint', type: 'weapon-part' },
  { id: 'vinquibus-receiver-blueprint', type: 'weapon-part' },
  { id: 'vinquibus-stock-blueprint', type: 'weapon-part' },

  { id: 'galariak-prime-blueprint', type: 'weapon-part' },
  { id: 'galariak-prime-blade-blueprint', type: 'weapon-part' },
  { id: 'galariak-prime-handle-blueprint', type: 'weapon-part' },

  { id: 'sagek-prime-blueprint', type: 'weapon-part' },
  { id: 'sagek-prime-receiver-blueprint', type: 'weapon-part' },
  { id: 'sagek-prime-barrel-blueprint', type: 'weapon-part' },

  { id: 'primary-bulwark', type: 'arcane', amountNeeded: 21 },
  { id: 'primary-overcharge', type: 'arcane', amountNeeded: 21 },
  { id: 'arcane-expertise', type: 'arcane', amountNeeded: 21 },
  { id: 'arcane-persistence', type: 'arcane', amountNeeded: 21 },
  { id: 'melee-careen', type: 'arcane', amountNeeded: 21 },
  { id: 'arcane-circumvent', type: 'arcane', amountNeeded: 21 },
  { id: 'secondary-irradiate', type: 'arcane', amountNeeded: 21 },
  { id: 'arcane-concentration', type: 'arcane', amountNeeded: 21 },
  { id: 'primary-debilitate', type: 'arcane', amountNeeded: 21 },

  { id: 'insign-bundle', type: 'other' },
  { id: 'makvos-cannon-scene', type: 'other' },
  { id: 'boro-overlook-scene', type: 'other' },
  { id: 'world-seeder-scene', type: 'other' },
  { id: 'fort-tennadis-scene', type: 'other' },
  { id: 'perita-manifestation-scene', type: 'other' },
  { id: 'lyons-room-scene', type: 'other' },
  { id: 'maries-room-scene', type: 'other' },
  { id: 'roathes-oblivion-arena', type: 'other' },
];

export const kullervoItems: Item[] = [
  { id: 'kullervo-blueprint', type: 'warframe-part' },
  { id: 'kullervo-chassis-blueprint', type: 'warframe-part' },
  { id: 'kullervo-neuroptics-blueprint', type: 'warframe-part' },
  { id: 'kullervo-systems-blueprint', type: 'warframe-part' },

  { id: 'rauta-blueprint', type: 'weapon-part' },
  { id: 'rauta-barrel', type: 'weapon-part' },
  { id: 'rauta-receiver', type: 'weapon-part' },
  { id: 'rauta-stock', type: 'weapon-part' },

  { id: 'kullervo-in-action-glyph', type: 'other' },
  { id: 'kullervos-hold-scene', type: 'other' },
];

export const jadeItems: Item[] = [
  { id: 'jade-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'jade-chassis-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'jade-neuroptics-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'jade-systems-blueprint', type: 'warframe-part', isDrop: true },

  { id: 'evensong-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'cantare-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'harmony-blueprint', type: 'weapon-part', isDrop: true },

  { id: 'arcane-ice-storm', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'secondary-surge', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'arcane-battery', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'secondary-fortifier', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'melee-afflictions', type: 'arcane', amountNeeded: 21, isDrop: true },
];

export const follieItems: Item[] = [
  // Follie
  {
    id: 'follie-blueprint',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'follie-chassis',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'follie-neuroptics',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'follie-systems',
    type: 'warframe-part',
    isDrop: true,
  },

  // Enkaus
  {
    id: 'enkaus-blueprint',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'enkaus-barrel',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'enkaus-receiver',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'enkaus-stock',
    type: 'weapon-part',
    isDrop: true,
  },

  // Other
  {
    id: 'drip',
    type: 'cosmetic',
  },
  {
    id: 'stained-vespers',
    type: 'cosmetic',
  },
  {
    id: 'deadnaught',
    type: 'cosmetic',
  },
  {
    id: 'follie-prex',
    type: 'other',
  },
  {
    id: 'haunted-vesper-relay-scene',
    type: 'cosmetic',
  },
  {
    id: 'truths-hammer',
    type: 'other',
  },
];

export const citrineItems: Item[] = [
  // Citrine
  {
    id: 'citrine-blueprint',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'citrine-chassis',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'citrine-neuro',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'citrine-systems',
    type: 'warframe-part',
    isDrop: true,
  },

  // Corufell
  {
    id: 'corufell-blueprint',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'corufell-barrell',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'corufell-receiver',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'corufell-handle',
    type: 'weapon-part',
    isDrop: true,
  },

  // Steflos
  {
    id: 'steflos-blueprint',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'steflos-barrell',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'steflos-receiver',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'steflos-stock',
    type: 'weapon-part',
    isDrop: true,
  },

  // Other
  {
    id: 'citrine-prex',
    type: 'other',
  },
  {
    id: 'citrine-in-action-glyph',
    type: 'other',
  },
  {
    id: 'citrine-last-wish-factory-scene',
    type: 'other',
  },

  // Arcanes
  {
    id: 'arcane-steadfast',
    type: 'arcane',
    isDrop: true,
  },
  {
    id: 'primary-plated-round',
    type: 'arcane',
    isDrop: true,
  },
  {
    id: 'arcane-double-back',
    type: 'arcane',
    isDrop: true,
  },
  {
    id: 'secondary-encumber',
    type: 'arcane',
    isDrop: true,
  },
  {
    id: 'secondary-kinship',
    type: 'arcane',
    isDrop: true,
  },
];

export const nokkoItems: Item[] = [
  // Nokko
  {
    id: 'nokko-blueprint',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'nokko-chassis',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'nokko-neuro',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'nokko-systems',
    type: 'warframe-part',
    isDrop: true,
  },

  // Arbucep
  {
    id: 'arbucep-blueprint',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'arbucep-barrel',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'arbucep-receiver',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'arbucep-stock',
    type: 'weapon-part',
    isDrop: true,
  },

  // Arcanes
  {
    id: 'primary-frostbite',
    type: 'arcane',
    amountNeeded: 21,
    isDrop: true,
  },
  {
    id: 'primary-blight',
    type: 'arcane',
    amountNeeded: 21,
    isDrop: true,
  },
  {
    id: 'conjunction-voltage',
    type: 'arcane',
    amountNeeded: 21,
    isDrop: true,
  },
  {
    id: 'secondary-encumber',
    type: 'arcane',
    amountNeeded: 21,
    isDrop: true,
  },
  {
    id: 'secondary-fortifier',
    type: 'arcane',
    amountNeeded: 21,
    isDrop: true,
  },

  // The Prince
  {
    id: 'the-prince-level1',
    type: 'other',
  },
  {
    id: 'the-prince-level2',
    type: 'other',
  },
  {
    id: 'the-prince-level3',
    type: 'other',
  },

  // Misc
  {
    id: 'rizoma-ephemera',
    type: 'cosmetic',
  },
  {
    id: 'ayatan-chattraka-sculpture',
    type: 'other',
  },
  {
    id: 'roots-n-fruits',
    type: 'other',
  },
  {
    id: 'roots-n-fruits-poster',
    type: 'other',
  },
  {
    id: 'onemind',
    type: 'other',
  },
  {
    id: 'onemind-poster',
    type: 'other',
  },
  {
    id: 'shooms',
    type: 'other',
  },
  {
    id: 'shooms-poster',
    type: 'other',
  },
  {
    id: 'deepmines-caves-scene',
    type: 'other',
  },
  {
    id: 'deepmines-scene',
    type: 'other',
  },
  {
    id: 'deepmines-lab-scene',
    type: 'other',
  },
  {
    id: 'deepmines-forward-base-scene',
    type: 'other',
  },
  {
    id: 'deepmine-nutrient-plant-scene',
    type: 'other',
  },

  // Nursery
  {
    id: 'autumnal-bonsai',
    type: 'other',
  },
  {
    id: 'lanceleaf-plant',
    type: 'other',
  },
  {
    id: 'monstera-plant',
    type: 'other',
  },
  {
    id: 'mushroom-clump',
    type: 'other',
  },
  {
    id: 'yellow-daisy-cluster',
    type: 'other',
  },
  {
    id: 'rho-plant',
    type: 'other',
  },
  {
    id: 'filter-flower',
    type: 'other',
  },
  {
    id: 'grossa-fern',
    type: 'other',
  },
  {
    id: 'birds-nest-gern-narrowly-opened',
    type: 'other',
  },
  {
    id: 'mocfi-fern',
    type: 'other',
  },
  {
    id: 'sunlight-dragonlily-decoration',
    type: 'other',
  },
  {
    id: 'moonlight-dragonlily-decoration',
    type: 'other',
  },
  {
    id: 'ruks-claw-decoration',
    type: 'other',
  },
  {
    id: 'moonlight-threshcone-decoration',
    type: 'other',
  },
  {
    id: 'sunlight-threshcone-decoration',
    type: 'other',
  },
  {
    id: 'moonlight-jadeleaf-decoration',
    type: 'other',
  },
  {
    id: 'sunlight-jadeleaf-decoration',
    type: 'other',
  },
  {
    id: 'silver-lady-fern',
    type: 'other',
  },
  {
    id: 'fern-healthy',
    type: 'other',
  },
  {
    id: 'fern-brown',
    type: 'other',
  },
  {
    id: 'boxwood-hedge1x1m',
    type: 'other',
  },
  {
    id: 'infested-flower-single',
    type: 'other',
  },
  {
    id: 'infested-flower-pair',
    type: 'other',
  },
  {
    id: 'croton-plant-green-single',
    type: 'other',
  },
  {
    id: 'croton-plant-green-cluster',
    type: 'other',
  },
  {
    id: 'croton-plant-yellow-single',
    type: 'other',
  },
  {
    id: 'croton-plant-yellow-cluster',
    type: 'other',
  },
  {
    id: 'palm-shrum-small',
    type: 'other',
  },
  {
    id: 'palm-shrum-medium',
    type: 'other',
  },
  {
    id: 'ficus-tree-single',
    type: 'other',
  },
  {
    id: 'ficus-tree-cluster',
    type: 'other',
  },
  {
    id: 'hanging-ivy-narrow',
    type: 'other',
  },
  {
    id: 'hanging-ivy-wide',
    type: 'other',
  },
  {
    id: 'ivy-tendrils',
    type: 'other',
  },
  {
    id: 'ivy-vine',
    type: 'other',
  },
  {
    id: 'ivy-patch',
    type: 'other',
  },
  {
    id: 'vestan-moss-decoration',
    type: 'other',
  },
  {
    id: 'ghost-bush-sickly',
    type: 'other',
  },
  {
    id: 'orokin-bush-small',
    type: 'other',
  },
  {
    id: 'geisang-reeds',
    type: 'other',
  },
  {
    id: 'glow-plants-dense',
    type: 'other',
  },
  {
    id: 'glow-plants-sparse',
    type: 'other',
  },
  {
    id: 'vallis-fern',
    type: 'other',
  },
  {
    id: 'vallis-mushrooms-small-group',
    type: 'other',
  },
  {
    id: 'bush-cluster-dense',
    type: 'other',
  },
  {
    id: 'autumn-tuvul-sapling',
    type: 'other',
  },
  {
    id: 'dusklight-sarracenia-decoration',
    type: 'other',
  },
  {
    id: 'frostleaf-decoration',
    type: 'other',
  },
  {
    id: 'grass-tuft-short',
    type: 'other',
  },
  {
    id: 'lunar-pitcher-decoration',
    type: 'other',
  },
  {
    id: 'grass-tuft-tall',
    type: 'other',
  },
  {
    id: 'planter-small-wood',
    type: 'other',
  },
  {
    id: 'planter-box-foliage-small',
    type: 'other',
  },
  {
    id: 'planter-large-wood',
    type: 'other',
  },
  {
    id: 'planter-small-stone',
    type: 'other',
  },
  {
    id: 'hanging-flowerpot-wide',
    type: 'other',
  },
  {
    id: 'assorted-flowers-red-and-white',
    type: 'other',
  },
  {
    id: 'assorted-flowers-blue-and-white',
    type: 'other',
  },
  {
    id: 'hanging-flowerpot-narrow',
    type: 'other',
  },
  {
    id: 'planter-clay',
    type: 'other',
  },
];

export const koumeiItems: Item[] = [
  // Koumei
  {
    id: 'koumei-blueprint',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'koumei-chassis',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'koumei-neuroptics',
    type: 'warframe-part',
    isDrop: true,
  },
  {
    id: 'koumei-systems',
    type: 'warframe-part',
    isDrop: true,
  },

  // Higasa
  {
    id: 'higasa-blueprint',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'higasa-barrel',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'higasa-receiver',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'higasa-stock',
    type: 'weapon-part',
    isDrop: true,
  },

  // Amanata
  {
    id: 'amanata-blueprint',
    type: 'weapon-part',
    isDrop: true,
  },
  {
    id: 'amanata-blade',
    type: 'weapon-part',
    amountNeeded: 2,
    isDrop: true,
  },
  {
    id: 'amanata-handle',
    type: 'weapon-part',
    isDrop: true,
  },

  // Mods & Prex
  {
    id: 'amanata-pressure',
    type: 'mod',
  },
  {
    id: 'higasa-serration',
    type: 'mod',
  },
  {
    id: 'koumei-prex-card',
    type: 'other',
  },
];

export const narinItems: Item[] = [
  // Narin
  { id: 'narin-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'narin-chassis', type: 'warframe-part', isDrop: true },
  { id: 'narin-neuroptics', type: 'warframe-part', isDrop: true },
  { id: 'narin-systems', type: 'warframe-part', isDrop: true },

  // Nunchasa
  { id: 'nunchasa-blueprint', type: 'weapon-part' },
  { id: 'nunchasa-upper-limb', type: 'weapon-part' },
  { id: 'nunchasa-string', type: 'weapon-part' },
  { id: 'nunchasa-grip', type: 'weapon-part' },
  { id: 'nunchasa-lower-limb', type: 'weapon-part' },

  // Aksondol
  { id: 'aksondol-blueprint', type: 'weapon-part' },
  { id: 'aksondol-barrel', type: 'weapon-part', amountNeeded: 2 },
  { id: 'aksondol-receiver', type: 'weapon-part', amountNeeded: 2 },
  { id: 'aksondol-link', type: 'weapon-part' },

  // Other
  { id: 'on-wings-of-ice-honoria', type: 'other' },
  { id: 'glacium-sigil', type: 'cosmetic' },
  { id: 'seonang-ephemera', type: 'cosmetic' },
  { id: 'narin-prex', type: 'other' },
  { id: 'niveus-sumdali', type: 'cosmetic' },
  { id: 'yuvan-peak-scene', type: 'other' },
  { id: 'melicas-laboratory-scene', type: 'other' },
  { id: 'neotes-dance', type: 'other' },
  { id: 'ice-speaker', type: 'other' },
  { id: 'tidon-shoulder-medallion', type: 'cosmetic' },
  { id: 'tidon-chest-medallion', type: 'cosmetic' },
  { id: 'tidon-leg-medallion', type: 'cosmetic' },
  { id: 'niveus-nepheri-skin', type: 'cosmetic' },
  { id: 'niveus-dark-split-sword-skin', type: 'cosmetic' },
  { id: 'niveus-dark-dagger-skin', type: 'cosmetic' },
  { id: 'niveus-dark-sword-skin', type: 'cosmetic' },
  { id: 'niveus-paracesis-skin', type: 'cosmetic' },
  { id: 'niveus-orvius-skin', type: 'cosmetic' },
  { id: 'niveus-glaxion-skin', type: 'cosmetic' },
  { id: 'niveus-quellor-skin', type: 'cosmetic' },
  { id: 'niveus-liset-skin', type: 'cosmetic' },
];

export const orionSiriusItems: Item[] = [
  // Sirius & Orion
  { id: 'sirius-orion-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'sirius-orion-chassis', type: 'warframe-part', isDrop: true },
  { id: 'sirius-orion-neuroptics', type: 'warframe-part', isDrop: true },
  { id: 'sirius-orion-systems', type: 'warframe-part', isDrop: true },

  // Pride
  { id: 'pride-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'pride-handle', type: 'weapon-part', isDrop: true },
  { id: 'pride-blade', type: 'weapon-part', isDrop: true },

  // Wrath
  { id: 'wrath-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'wrath-handle', type: 'weapon-part', isDrop: true },
  { id: 'wrath-blade', type: 'weapon-part', isDrop: true },

  // Misc
  { id: 'bladeswarm-liset-skin', type: 'cosmetic' },
  { id: 'sacred-light', type: 'other' },
  { id: 'bloodfrenzy-liset-skin', type: 'cosmetic' },
  { id: 'celestial-clash', type: 'other' },
  { id: 'scorias-angel-scene', type: 'other' },
  { id: 'kuva-wytch-scene', type: 'other' },
  { id: 'pontis-tower-scene', type: 'other' },
  { id: 'hunhows-trinket-blueprint', type: 'other' },

  // Railjack
  { id: 'ryoku', type: 'other' },
  { id: 'vena', type: 'other' },
  { id: 'latrox-une', type: 'other' },
  { id: 'jarka-lar', type: 'other' },

  // Appearance
  { id: 'jades-victory-syandana-blueprint', type: 'cosmetic' },
  { id: 'syndir-ephemera', type: 'cosmetic' },
  { id: 'bladeswarm-vectis-skin', type: 'cosmetic' },
  { id: 'bladeswarm-kunai-skin', type: 'cosmetic' },
  { id: 'bladeswarm-karyst-skin', type: 'cosmetic' },
  { id: 'bladeswarm-braton-skin', type: 'cosmetic' },
  { id: 'viserakta-ephemera', type: 'cosmetic' },
  { id: 'bloodfrenzy-nagantaka-skin', type: 'cosmetic' },
  { id: 'bloodfrenzy-ballistica-skin', type: 'cosmetic' },
  { id: 'bloodfrenzy-venka-skin', type: 'cosmetic' },

  // Arcanes
  { id: 'primary-compression', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'arcane-sculptor', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'secondary-cryogenic', type: 'arcane', amountNeeded: 21, isDrop: true },
  { id: 'melee-assimilation', type: 'arcane', amountNeeded: 21, isDrop: true },

  // Decoration
  { id: 'bladeswarm-domestik-drone', type: 'cosmetic' },
  { id: 'cloning-101-poster', type: 'other' },
  { id: 'bloodfrenzy-domestik-drone', type: 'cosmetic' },
  { id: 'relationship-goals-poster', type: 'other' },

  // Honoria
  // { id: 'as-one-honoria', type: 'other' },
  // { id: 'scorias-saint-honoria', type: 'other' },
  // { id: 'keeper-of-secrets-honoria', type: 'other' },
  // { id: 'the-awoken-sword-honoria', type: 'other' },
  // { id: 'force-of-nature-honoria', type: 'other' },
  // { id: 'feelin-lucky-honoria', type: 'other' },
  // { id: 'plague-bearer-honoria', type: 'other' },
  // { id: 'strikes-twice-honoria', type: 'other' },
];

export const vorunaItems: Item[] = [
  {
    id: 'voruna-blueprint',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'voruna-chassis',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'voruna-neuroptics',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'voruna-systems',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  { id: 'sarofang-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'sarofang-blade', type: 'weapon-part', isDrop: true },
  { id: 'sarofang-handle', type: 'weapon-part', isDrop: true },
  { id: 'perigale-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'perigale-barrel', type: 'weapon-part', isDrop: true },
  { id: 'perigale-receiver', type: 'weapon-part', isDrop: true },
  { id: 'perigale-stock', type: 'weapon-part', isDrop: true },
  { id: 'arcame-blessing', type: 'arcane', isDrop: true, amountNeeded: 21 },
  { id: 'arcame-rise', type: 'arcane', isDrop: true, amountNeeded: 21 },
  { id: 'arcame-frostbite', type: 'arcane', isDrop: true, amountNeeded: 21 },
  { id: 'arcame-voltage', type: 'arcane', isDrop: true, amountNeeded: 21 },
  { id: 'lua-circulus-scene', type: 'other' },
];

export const templeItems: Item[] = [
  {
    id: 'temple-blueprint',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'temple-chassis-blueprint',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'temple-neuroptics-blueprint',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },
  {
    id: 'temple-systems-blueprint',
    type: 'warframe-part',
    isDrop: true,
    amountNeeded: 2,
  },

  { id: 'riot-848-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'riot-848-barrel', type: 'weapon-part', isDrop: true },
  { id: 'riot-848-receiver', type: 'weapon-part', isDrop: true },
  { id: 'riot-848-stock', type: 'weapon-part', isDrop: true },

  { id: 'temple-and-the-rippers-poster', type: 'other' },
  { id: 'drum-kit', type: 'other' },
  { id: 'drum-cymbal', type: 'other' },
  { id: 'tom-drum', type: 'other' },
  { id: 'snare-drum', type: 'other' },
  { id: 'musical-equipment-standard', type: 'other' },
  { id: 'musical-equipment-large', type: 'other' },
  { id: 'musical-equipment-drawers', type: 'other' },
  { id: 'musical-equipment-small-long)', type: 'other' },
  { id: 'musical-equipment-small-square)', type: 'other' },
  { id: 'musical-equipment-cabinet', type: 'other' },
  { id: 'electric-keyboard', type: 'other' },
  { id: 'solstice-square-stage-scene', type: 'other' },
];

export const oraxiaItems: Item[] = [
  { id: 'oraxia-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'oraxia-chassis-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'oraxia-neuroptics-blueprint', type: 'warframe-part', isDrop: true },
  { id: 'oraxia-systems-blueprint', type: 'warframe-part', isDrop: true },

  { id: 'scyotid-blueprint', type: 'weapon-part', isDrop: true },
  {
    id: 'scyotid-barrel-blueprint',
    type: 'weapon-part',
    amountNeeded: 2,
    isDrop: true,
  },
  {
    id: 'scyotid-gauntlet-blueprint',
    type: 'weapon-part',
    amountNeeded: 2,
    isDrop: true,
  },

  { id: 'spinnerex-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'spinnerex-blade-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'spinnerex-handle-blueprint', type: 'weapon-part', isDrop: true },
  { id: 'spinnerex-string-blueprint', type: 'weapon-part', isDrop: true },

  { id: 'thalys-blueprint', type: 'weapon-part' },

  { id: 'octopede-arena-scene', type: 'other' },
  { id: 'isleweaver-cloud-islet-scene', type: 'other' },
  { id: 'isleweaver-drift-atoll-scene', type: 'other' },
  { id: 'scholars-landing-scene', type: 'other' },
  { id: 'duviri-throne-room-scene', type: 'other' },
];
