/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const vestigialMotes = (quantity: number): Cost[] => [
  {
    resourceId: 'vestigial-motes',
    quantity,
  },
];

const jadeSection: PageSection = {
  id: 'excalibur',
  name: 'Excalibur',
  items: [
    { itemId: 'jade-blueprint', cost: vestigialMotes(450), amountNeeded: 2 },
    {
      itemId: 'jade-chassis-blueprint',
      cost: vestigialMotes(150),
      amountNeeded: 2,
    },
    {
      itemId: 'jade-neuroptics-blueprint',
      cost: vestigialMotes(150),
      amountNeeded: 2,
    },
    {
      itemId: 'jade-systems-blueprint',
      cost: vestigialMotes(150),
      amountNeeded: 2,
    },
  ],
};

const weaponsSection: PageSection = {
  id: 'weapons',
  name: 'Weapons',
  items: [
    { itemId: 'evensong-blueprint', cost: vestigialMotes(300) },
    { itemId: 'cantare-blueprint', cost: vestigialMotes(300) },
    { itemId: 'harmony-blueprint', cost: vestigialMotes(300) },
  ],
};

const arcaneSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',
  items: [
    { itemId: 'arcane-ice-storm', cost: vestigialMotes(10) },
    { itemId: 'secondary-surge', cost: vestigialMotes(10) },
    { itemId: 'arcane-battery', cost: vestigialMotes(10) },
    { itemId: 'secondary-fortifier', cost: vestigialMotes(10) },
    { itemId: 'melee-afflictions', cost: vestigialMotes(10) },
  ],
};

export const jadePage: AcquisitionPage = {
  id: 'jade',
  name: 'Jade',

  sections: [jadeSection, weaponsSection, arcaneSection],
};
