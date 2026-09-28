/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from "./types";

const beatingHeartstrings = (quantity: number): Cost[] => [
  {
    resourceId: 'beating-heartstrings',
    quantity
  }
];

const templeSection: PageSection = {
  id: 'temple',
  name: 'Temple',
  items: [
    { itemId: "temple-blueprint", cost: beatingHeartstrings(195) },
    { itemId: "temple-chassis-blueprint", cost: beatingHeartstrings(65) },
    { itemId: "temple-neuroptics-blueprint", cost: beatingHeartstrings(65) },
    { itemId: "temple-systems-blueprint", cost: beatingHeartstrings(65) },
    { itemId: "temple-and-the-rippers-poster", cost: beatingHeartstrings(120) },
  ]
};

const riot848Section: PageSection = {
  id: 'riot-848',
  name: 'Riot-848',
  items: [
    { itemId: "riot-848-blueprint", cost: beatingHeartstrings(120) },
    { itemId: "riot-848-barrel" , cost: beatingHeartstrings(60) },
    { itemId: "riot-848-receiver", cost: beatingHeartstrings(60) },
    { itemId: "riot-848-stock", cost: beatingHeartstrings(60) },
  ]
}
const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: 'temple-and-the-rippers-poster', cost: beatingHeartstrings(30) },
    { itemId: 'drum-kit', cost: beatingHeartstrings(30) },
    { itemId: 'drum-cymbal', cost: beatingHeartstrings(30) },
    { itemId: 'tom-drum', cost: beatingHeartstrings(30) },
    { itemId: 'snare-drum', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-standard', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-large', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-drawers', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-small-long)', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-small-square)', cost: beatingHeartstrings(30) },
    { itemId: 'musical-equipment-cabinet', cost: beatingHeartstrings(30) },
    { itemId: 'electric-keyboard', cost: beatingHeartstrings(30) },
    { itemId: 'solstice-square-stage-scene', cost: beatingHeartstrings(100) },
  ],
};

export const templePage: AcquisitionPage = {
	id: 'temple',
  name: 'Temple',

  sections: [
    templeSection,
    riot848Section,
    otherSection
	]
};
