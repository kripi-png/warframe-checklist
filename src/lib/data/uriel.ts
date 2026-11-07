/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const maphica = (quantity: number): Cost[] => [
  {
    resourceId: 'maphica',
    quantity,
  },
];

const urielSection: PageSection = {
  id: 'uriel',
  name: 'Uriel',
  items: [
    { itemId: 'uriel-blueprint', cost: maphica(75) },
    { itemId: 'uriel-chassis-blueprint', cost: maphica(25) },
    {
      itemId: 'uriel-neuroptics-blueprint',
      cost: maphica(25),
    },
    { itemId: 'uriel-systems-blueprint', cost: maphica(25) },
  ],
};

const vinquibusSection: PageSection = {
  id: 'vinquibus',
  name: 'Vinquibus',
  items: [
    { itemId: 'vinquibus-blueprint', cost: maphica(35) },
    { itemId: 'vinquibus-barrel-blueprint', cost: maphica(25) },
    { itemId: 'vinquibus-blade-blueprint', cost: maphica(25) },
    { itemId: 'vinquibus-receiver-blueprint', cost: maphica(25) },
    { itemId: 'vinquibus-stock-blueprint', cost: maphica(25) },
  ],
};

const galariakSection: PageSection = {
  id: 'galariak',
  name: 'Galariak',
  items: [
    { itemId: 'galariak-prime-blueprint', cost: maphica(35) },
    { itemId: 'galariak-prime-blade-blueprint', cost: maphica(25) },
    { itemId: 'galariak-prime-handle-blueprint', cost: maphica(25) },
  ],
};

const sagekSection: PageSection = {
  id: 'sagek',
  name: 'Sagek',
  items: [
    { itemId: 'sagek-prime-blueprint', cost: maphica(35) },
    { itemId: 'sagek-prime-receiver-blueprint', cost: maphica(25) },
    { itemId: 'sagek-prime-barrel-blueprint', cost: maphica(25) },
  ],
};

const arcaneSection: PageSection = {
  id: 'arcane',
  name: 'Arcane',
  items: [
    { itemId: 'primary-bulwark', cost: maphica(5) },
    { itemId: 'primary-overcharge', cost: maphica(5) },
    { itemId: 'arcane-expertise', cost: maphica(5) },
    { itemId: 'arcane-persistence', cost: maphica(5) },
    { itemId: 'melee-careen', cost: maphica(5) },
    { itemId: 'arcane-circumvent', cost: maphica(5) },
    { itemId: 'secondary-irradiate', cost: maphica(5) },
    { itemId: 'arcane-concentration', cost: maphica(5) },
    { itemId: 'primary-debilitate', cost: maphica(5) },
  ],
};

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: 'insign-bundle', cost: maphica(150) },
    { itemId: 'makvos-cannon-scene', cost: maphica(100) },
    { itemId: 'boro-overlook-scene', cost: maphica(100) },
    { itemId: 'world-seeder-scene', cost: maphica(100) },
    { itemId: 'fort-tennadis-scene', cost: maphica(100) },
    { itemId: 'perita-manifestation-scene', cost: maphica(100) },
    { itemId: 'lyons-room-scene', cost: maphica(100) },
    { itemId: 'maries-room-scene', cost: maphica(100) },
    { itemId: 'roathes-oblivion-arena', cost: maphica(150) },
  ],
};

export const urielPage: AcquisitionPage = {
  id: 'uriel',
  name: 'Uriel',

  sections: [
    urielSection,
    vinquibusSection,
    galariakSection,
    sagekSection,
    arcaneSection,
    otherSection,
  ],
};
