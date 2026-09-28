/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from "./types";

const scuttlerHusks = (quantity: number): Cost[] => [
  {
    resourceId: 'scuttler-husks',
    quantity
  }
];

const oraxiaSection: PageSection = {
  id: 'oraxia',
  name: 'Oraxia',
  items: [
    { itemId: 'oraxia-blueprint', cost: scuttlerHusks(60), amountNeeded: 2 },
    { itemId: 'oraxia-chassis-blueprint', cost: scuttlerHusks(20), amountNeeded: 2 },
    { itemId: 'oraxia-neuroptics-blueprint', cost: scuttlerHusks(20), amountNeeded: 2 },
    { itemId: 'oraxia-systems-blueprint', cost: scuttlerHusks(20), amountNeeded: 2 },
  ]
};

const weaponsSection: PageSection = {
  id: 'weapons',
  name: 'Weapons',
  items: [
    { itemId: 'scyotid-blueprint', cost: scuttlerHusks(48) },
    { itemId: 'scyotid-barrel-blueprint', cost: scuttlerHusks(12) },
    { itemId: 'scyotid-gauntlet-blueprint', cost: scuttlerHusks(12) },
    { itemId: 'spinnerex-blueprint', cost: scuttlerHusks(48) },
    { itemId: 'spinnerex-blade-blueprint', cost: scuttlerHusks(16) },
    { itemId: 'spinnerex-handle-blueprint', cost: scuttlerHusks(16) },
    { itemId: 'spinnerex-string-blueprint', cost: scuttlerHusks(16) },
    { itemId: 'thalys-blueprint', cost: scuttlerHusks(96) },
  ]
}

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: 'octopede-arena-scene', cost: scuttlerHusks(25) },
    { itemId: 'isleweaver-cloud-islet-scene', cost: scuttlerHusks(25) },
    { itemId: 'isleweaver-drift-atoll-scene', cost: scuttlerHusks(25) },
    { itemId: 'scholars-landing-scene', cost: scuttlerHusks(25) },
    { itemId: 'duviri-throne-room-scene', cost: scuttlerHusks(25) },
  ]
};

export const oraxiaPage: AcquisitionPage = {
	id: 'oraxia',
  name: 'Oraxia',

  sections: [
    oraxiaSection,
    weaponsSection,
    otherSection
	]
};
