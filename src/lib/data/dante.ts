/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const vesselCapillaries = (quantity: number): Cost[] => [
  {
    resourceId: 'vessel-capillaries',
    quantity,
  },
];

const danteSection: PageSection = {
  id: 'dante',
  name: 'Dante',
  items: [
    { itemId: 'dante-blueprint', cost: vesselCapillaries(270) },
    { itemId: 'dante-neuroptics-blueprint', cost: vesselCapillaries(90) },
    { itemId: 'dante-chassis-blueprint', cost: vesselCapillaries(90) },
    { itemId: 'dante-systems-blueprint', cost: vesselCapillaries(90) },
  ],
};

const weaponsSection: PageSection = {
  id: 'weapons',
  name: 'Weapons',
  items: [
    { itemId: 'onos-blueprint', cost: vesselCapillaries(360) },
    { itemId: 'ruvox-blueprint', cost: vesselCapillaries(180) },
    { itemId: 'ruvox-blade-blueprint', cost: vesselCapillaries(45) },
    { itemId: 'ruvox-glove-blueprint', cost: vesselCapillaries(45) },
  ],
};

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: 'dantes-retreat-scene', cost: vesselCapillaries(100) },
    { itemId: 'the-abandoned-vessel', cost: vesselCapillaries(100) },
    { itemId: 'sanctum-simulacrum', cost: vesselCapillaries(75) },
    { itemId: 'the-learned-honoria', cost: vesselCapillaries(150) },
  ],
};

export const dantePage: AcquisitionPage = {
  id: 'dante',
  name: 'Dante',

  sections: [danteSection, weaponsSection, otherSection],
};
