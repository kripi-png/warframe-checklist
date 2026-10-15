/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const moonflesh = (quantity: number): Cost[] => [
  {
    resourceId: 'moonflesh',
    quantity,
  },
];

const weaponsSection: PageSection = {
  id: 'weapons',
  name: 'Weapons',
  items: [
    { itemId: 'haalvu', cost: moonflesh(150) },
    { itemId: 'spectra-vandal', cost: moonflesh(150) },
    { itemId: 'basmu-blueprint', cost: moonflesh(125) },
  ],
};

const generalSection: PageSection = {
  id: 'general',
  name: 'General',
  items: [
    { itemId: 'devourer', cost: moonflesh(125) },
    { itemId: 'khadati-sumdali', cost: moonflesh(250) },
    { itemId: 'the-ballroom-simulacrum', cost: moonflesh(500) },
    { itemId: 'tauforged-crimson-archon-shard', cost: moonflesh(375) },
    { itemId: 'tauforged-azure-archon-shard', cost: moonflesh(375) },
    { itemId: 'tauforged-amber-archon-shard', cost: moonflesh(375) },
    { itemId: 'legendary-core', cost: moonflesh(500) },
    { itemId: 'the-moon-killer-honoria', cost: moonflesh(175) },
  ],
};

const cosmeticsSection: PageSection = {
  id: 'cosmetics',
  name: 'Cosmetics',
  items: [
    { itemId: 'arturos-vessel-glyph', cost: moonflesh(100) },
    { itemId: 'zioa-vessel-glyph', cost: moonflesh(100) },
    { itemId: 'neolyst-natah-glyph', cost: moonflesh(100) },
    { itemId: 'neolyst-natah-floof', cost: moonflesh(125) },
    { itemId: 'contegorus-greaves', cost: moonflesh(175) },
    { itemId: 'contegorus-pauldrons', cost: moonflesh(175) },
    { itemId: 'contegorus-chest-plate', cost: moonflesh(175) },
    { itemId: 'vacis-amp-skin', cost: moonflesh(375) },
    { itemId: 'dhampyre-syandana', cost: moonflesh(500) },
    { itemId: 'taubound-sigil', cost: moonflesh(100) },
    { itemId: 'epoch-operation-vessel-emblem', cost: moonflesh(100) },
    { itemId: 'naktavyre-leg-armor', cost: moonflesh(75) },
    { itemId: 'naktavyre-shoulder-armor', cost: moonflesh(75) },
    { itemId: 'naktavyre-chest-armor', cost: moonflesh(75) },
    { itemId: 'valdurs-syandana', cost: moonflesh(175) },
    { itemId: 'sling-stone-emblem', cost: moonflesh(75) },
    { itemId: 'arid-fear-emblem', cost: moonflesh(75) },
    { itemId: 'breeding-grounds-emblem', cost: moonflesh(75) },
    { itemId: 'rift-sigil', cost: moonflesh(75) },
    { itemId: 'cortege-supulchrax-skin', cost: moonflesh(125) },
    { itemId: 'morgha-supulchrax-skin', cost: moonflesh(125) },
    { itemId: 'krios-signa', cost: moonflesh(100) },
    { itemId: 'phased-clan-sigil', cost: moonflesh(50) },
    { itemId: 'glyphed-clan-sigil', cost: moonflesh(50) },
    { itemId: 'gilded-clan-sigil', cost: moonflesh(50) },
  ],
};

const arcanesSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',
  items: [
    { itemId: 'melee-fortification', cost: moonflesh(8) },
    { itemId: 'melee-retaliation', cost: moonflesh(8) },
    { itemId: 'arcane-battery', cost: moonflesh(8) },
    { itemId: 'arcane-ice-storm', cost: moonflesh(8) },
    { itemId: 'melee-afflictions', cost: moonflesh(8) },
    { itemId: 'melee-animosity', cost: moonflesh(8) },
    { itemId: 'melee-exposure', cost: moonflesh(8) },
    { itemId: 'melee-influence', cost: moonflesh(8) },
    { itemId: 'melee-vortex', cost: moonflesh(8) },
    { itemId: 'secondary-fortifier', cost: moonflesh(8) },
    { itemId: 'secondary-surge', cost: moonflesh(8) },
  ],
};

export const praghasaPage: AcquisitionPage = {
  id: 'praghasa',
  name: 'Epoch Operation: Taubound',

  sections: [generalSection, weaponsSection, cosmeticsSection, arcanesSection],
};
