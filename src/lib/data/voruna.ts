/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from "./types";

const luaThraxPlasm = (quantity: number): Cost[] => [
  {
    resourceId: 'lua-thrax-plasm',
    quantity
  }
];

const vorunaSection: PageSection = {
  id: 'voruna',
  name: 'Voruna',
  items: [
    {
      itemId: 'voruna-blueprint',
      cost: luaThraxPlasm(125),
      amountNeeded: 2
    },
    {
      itemId: 'voruna-chassis',
      cost: luaThraxPlasm(75),
      amountNeeded: 2
    },
    {
      itemId: 'voruna-neuroptics',
      cost: luaThraxPlasm(75),
      amountNeeded: 2
    },
    {
      itemId: 'voruna-systems',
      cost: luaThraxPlasm(75),
      amountNeeded: 2
    }
  ]
};

const sarofangSection: PageSection = {
  id: 'sarofang',
  name: 'Sarofang',
  items: [
    {
      itemId: 'sarofang-blueprint',
      cost: luaThraxPlasm(100)
    },
    {
      itemId: 'sarofang-blade',
      cost: luaThraxPlasm(50)
    },
    {
      itemId: 'sarofang-handle',
      cost: luaThraxPlasm(50)
    },
  ]
}

const perigaleSection: PageSection = {
  id: 'lato',
  name: 'Lato',
  items: [
    {
      itemId: 'perigale-blueprint',
      cost: luaThraxPlasm(100)
    },
    {
      itemId: 'perigale-barrel',
      cost: luaThraxPlasm(50)
    },
    {
      itemId: 'perigale-receiver',
      cost: luaThraxPlasm(50)
    },
    {
      itemId: 'perigale-stock',
      cost: luaThraxPlasm(50)
    },
  ]
}

const arcaneSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',
  items: [
    {
      itemId: 'arcame-blessing',
      cost: luaThraxPlasm(15)
    },
    {
      itemId: 'arcame-rise',
      cost: luaThraxPlasm(15)
    },
    {
      itemId: 'arcame-frostbite',
      cost: luaThraxPlasm(15)
    },
    {
      itemId: 'arcame-voltage',
      cost: luaThraxPlasm(15)
    },
  ]
};

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    {
      itemId: 'lua-circulus-scene',
      cost: luaThraxPlasm(250)
    },
  ]
};

export const vorunaPage: AcquisitionPage = {
	id: 'voruna',
  name: 'Voruna',

  sections: [
    vorunaSection,
    sarofangSection,
    perigaleSection,
    arcaneSection,
    otherSection
  ]
};
