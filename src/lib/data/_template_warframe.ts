/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from "./types";

const _resource = (quantity: number): Cost[] => [
  {
    resourceId: 'resource',
    quantity
  }
];

const excaliburSection: PageSection = {
  id: 'excalibur',
  name: 'Excalibur',
  items: [

  ]
};

const bratonSection: PageSection = {
  id: 'braton',
  name: 'Braton',
  items: [

  ]
}

const latoSection: PageSection = {
  id: 'lato',
  name: 'Lato',
  items: [

  ]
}

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [

  ]
};

export const excaliburPage: AcquisitionPage = {
	id: 'excalibur',
  name: 'Excalibur',

  sections: [
    excaliburSection,
    bratonSection,
    latoSection,
    otherSection
	]
};
