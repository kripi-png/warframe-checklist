/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const kullervosBane = (quantity: number): Cost[] => [
  {
    resourceId: 'kullervos-bane',
    quantity,
  },
];

const kullervoSection: PageSection = {
  id: 'kullervo',
  name: 'Kullervo',
  items: [
    { itemId: 'kullervo-blueprint', cost: kullervosBane(15) },
    {
      itemId: 'kullervo-chassis-blueprint',
      cost: kullervosBane(9),
    },
    {
      itemId: 'kullervo-neuroptics-blueprint',
      cost: kullervosBane(9),
    },
    {
      itemId: 'kullervo-systems-blueprint',
      cost: kullervosBane(9),
    },
  ],
};

const rautaSection: PageSection = {
  id: 'rauta',
  name: 'Rauta',
  items: [
    { itemId: 'rauta-blueprint', cost: kullervosBane(12) },
    { itemId: 'rauta-barrel', cost: kullervosBane(6) },
    { itemId: 'rauta-receiver', cost: kullervosBane(6) },
    { itemId: 'rauta-stock', cost: kullervosBane(6) },
  ],
};

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: 'kullervo-in-action-glyph', cost: kullervosBane(10) },
    { itemId: 'kullervos-hold-scene', cost: kullervosBane(15) },
  ],
};

export const kullervoPage: AcquisitionPage = {
  id: 'kullervo',
  name: 'Kullervo',

  sections: [kullervoSection, rautaSection, otherSection],
};
