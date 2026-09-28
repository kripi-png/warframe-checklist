import type { AcquisitionPage, Cost, PageSection } from './types';

const emerald = (quantity: number): Cost => {
  return {
    resourceId: 'emerald',
    quantity,
  };
};

const crimson = (quantity: number): Cost => {
  return {
    resourceId: 'crimson',
    quantity,
  };
};

const money = (emerald_qty: number, crimson_qty: number): Cost[] => {
  return [emerald(emerald_qty), crimson(crimson_qty)];
};

const siriusOrionSection: PageSection = {
  id: 'sirius-orion',
  name: 'Sirius & Orion',
  items: [
    {
      itemId: 'sirius-orion-blueprint',
      cost: [emerald(275)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-blueprint',
      cost: [crimson(275)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-chassis',
      cost: [emerald(90)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-chassis',
      cost: [crimson(90)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-neuroptics',
      cost: [emerald(90)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-neuroptics',
      cost: [crimson(90)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-systems',
      cost: [emerald(90)],
      amountNeeded: 2
    },
    {
      itemId: 'sirius-orion-systems',
      cost: [crimson(90)],
      amountNeeded: 2
    },
  ],
};

const weaponSection: PageSection = {
  id: 'weapons',
  name: 'Weapons',
  items: [
    { itemId: 'pride-blueprint', cost: [emerald(90)] },
    { itemId: 'pride-handle', cost: [emerald(45)] },
    { itemId: 'pride-blade', cost: [emerald(45)], amountNeeded: 2 },
    { itemId: 'wrath-blueprint', cost: [crimson(90)] },
    { itemId: 'wrath-handle', cost: [crimson(45)] },
    { itemId: 'wrath-blade', cost: [crimson(45)], amountNeeded: 2 },
  ],
};

const miscSection: PageSection = {
  id: 'misc',
  name: 'Misc',
  items: [
    { itemId: 'bladeswarm-liset-skin', cost: [emerald(100)] },
    { itemId: 'sacred-light', cost: [emerald(60)] },
    { itemId: 'bloodfrenzy-liset-skin', cost: [crimson(100)] },
    { itemId: 'celestial-clash', cost: [crimson(60)] },
    { itemId: 'scorias-angel-scene', cost: [emerald(50)] },
    { itemId: 'kuva-wytch-scene', cost: [crimson(50)] },
    { itemId: 'pontis-tower-scene', cost: money(25, 25) },
    { itemId: 'hunhows-trinket-blueprint', cost: money(12, 12) },
  ],
};

const railjackSection: PageSection = {
  id: 'railjack',
  name: 'Railjack',
  items: [
    {
      itemId: 'ryoku',
      cost: [emerald(50)],
    },
    {
      itemId: 'vena',
      cost: [crimson(50)],
    },
    {
      itemId: 'latrox-une',
      cost: money(25, 25),
    },
    {
      itemId: 'jarka-lar',
      cost: money(25, 25),
    },
  ],
};

const appearanceSection: PageSection = {
  id: 'appearance',
  name: 'Appearance',
  items: [
    { itemId: 'jades-victory-syandana-blueprint', cost: money(50, 50) },
    { itemId: 'syndir-ephemera', cost: [emerald(100)] },
    { itemId: 'bladeswarm-vectis-skin', cost: [emerald(60)] },
    { itemId: 'bladeswarm-kunai-skin', cost: [emerald(60)] },
    { itemId: 'bladeswarm-karyst-skin', cost: [emerald(60)] },
    { itemId: 'bladeswarm-braton-skin', cost: [emerald(60)] },
    { itemId: 'viserakta-ephemera', cost: [crimson(100)] },
    { itemId: 'bloodfrenzy-nagantaka-skin', cost: [crimson(60)] },
    { itemId: 'bloodfrenzy-ballistica-skin', cost: [crimson(60)] },
    { itemId: 'bloodfrenzy-venka-skin', cost: [crimson(60)] },
  ],
};

const arcaneSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',
  items: [
    { itemId: 'primary-compression', cost: money(15, 15) },
    { itemId: 'arcane-sculptor', cost: money(10, 10) },
    { itemId: 'secondary-cryogenic', cost: money(10, 10) },
    { itemId: 'melee-assimilation', cost: money(10, 10) },
  ],
};

const decorationSection: PageSection = {
  id: 'decorations',
  name: 'Decorations',
  items: [
    { itemId: 'bladeswarm-domestik-drone', cost: [emerald(50)] },
    { itemId: 'cloning-101-poster', cost: [emerald(20)] },
    { itemId: 'bloodfrenzy-domestik-drone', cost: [crimson(50)] },
    { itemId: 'relationship-goals-poster', cost: [crimson(20)] },
  ],
};

export const orionSiriusPage: AcquisitionPage = {
  id: 'orion-sirius',
  name: 'Orion & Sirius',

  sections: [
    siriusOrionSection,
    weaponSection,
    arcaneSection,
    railjackSection,
    appearanceSection,
    decorationSection,
    miscSection,
  ],
};


// {
//   id: 'honoria',
//   name: 'Honoria',
//   items: [
//     { itemId: 'as-one-honoria', cost: [{ resourceId: 'titanium', quantity: 50000 }] },
//     { itemId: 'scorias-saint-honoria', cost: [{ resourceId: 'bellow-voca', quantity: 50 }] },
//     { itemId: 'keeper-of-secrets-honoria', cost: [{ resourceId: 'alloy-plate', quantity: 500000 }] },
//     { itemId: 'the-awoken-sword-honoria', cost: [{ resourceId: 'circuits', quantity: 150000 }] },
//     { itemId: 'force-of-nature-honoria', cost: [{ resourceId: 'mutalist-alad-v-nav-coordinate', quantity: 10 }] },
//     { itemId: 'feelin-lucky-honoria', cost: [{ resourceId: 'neurodes', quantity: 500 }] },
//     { itemId: 'plague-bearer-honoria', cost: [{ resourceId: 'morphics', quantity: 500 }] },
//     {
//       itemId: 'strikes-twice-honoria',
//       cost: [
//         { resourceId: 'emerald', quantity: 15 },
//         { resourceId: 'crimson', quantity: 15 },
//       ],
//     },
//   ],
// },
