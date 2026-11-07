import type { AcquisitionPage, Cost, PageSection } from './types';

const crystals = (blue: number, red: number): Cost[] => [
  { resourceId: 'blue', quantity: blue },
	{ resourceId: 'red', quantity: red },
];

const citrineSection: PageSection = {
  id: 'citrine',
  name: 'Citrine',

  items: [
    {
      itemId: 'citrine-blueprint',
      cost: crystals(500, 500),
    },
    {
      itemId: 'citrine-chassis',
      cost: crystals(350, 350),
    },
    {
      itemId: 'citrine-neuro',
      cost: crystals(350, 350),
    },
    {
      itemId: 'citrine-systems',
      cost: crystals(350, 300),
    },
  ],
};

const corufellSection: PageSection = {
  id: 'corufell',
  name: 'Corufell',

  items: [
    {
      itemId: 'corufell-blueprint',
      cost: crystals(500, 300),
    },
    {
      itemId: 'corufell-barrell',
      cost: crystals(250, 150),
    },
    {
      itemId: 'corufell-receiver',
      cost: crystals(250, 150),
    },
    {
      itemId: 'corufell-handle',
      cost: crystals(250, 150),
    },
  ],
};

const steflosSection: PageSection = {
  id: 'steflos',
  name: 'Steflos',

  items: [
    {
      itemId: 'steflos-blueprint',
      cost: crystals(300, 500),
    },
    {
      itemId: 'steflos-barrell',
      cost: crystals(150, 250),
    },
    {
      itemId: 'steflos-receiver',
      cost: crystals(150, 250),
    },
    {
      itemId: 'steflos-stock',
      cost: crystals(150, 250),
    },
  ],
};

const otherRewardsSection: PageSection = {
	id: 'other-rewards',
	name: 'Other Rewards',

	items: [
    {
      itemId: 'citrine-prex',
      cost: crystals(100, 100)
    },
    {
      itemId: 'citrine-in-action-glyph',
      cost: crystals(100, 100),
    },
    {
      itemId: 'citrine-last-wish-factory-scene',
      cost: crystals(1000, 1000),
    },
	]
};

const arcanesSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',

  items: [
    {
      itemId: 'arcane-steadfast',
      cost: crystals(60, 60),
      amountNeeded: 21,
    },
    {
      itemId: 'primary-plated-round',
      cost: crystals(60, 60),
      amountNeeded: 21,
    },
    {
      itemId: 'arcane-double-back',
      cost: crystals(60, 60),
      amountNeeded: 21,
    },
    {
      itemId: 'secondary-encumber',
      cost: crystals(60, 60),
      amountNeeded: 21,
    },
    {
      itemId: 'secondary-kinship',
      cost: crystals(60, 60),
      amountNeeded: 21,
    },
  ],
};

export const citrinePage: AcquisitionPage = {
	id: 'citrine',
  name: 'Citrine',

	sections: [
    citrineSection,
    corufellSection,
    steflosSection,
    otherRewardsSection,
    arcanesSection
	]
};
