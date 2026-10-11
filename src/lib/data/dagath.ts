/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection } from './types';

const vainthorn = (quantity: number): Cost[] => [
  {
    resourceId: 'vainthorn',
    quantity,
  },
];

const dagathSection: PageSection = {
  id: 'dagath',
  name: 'Dagath',
  items: [
    { itemId: 'dagath-neuroptics', cost: vainthorn(34) },
    { itemId: 'dagath-chassis', cost: vainthorn(34) },
    { itemId: 'dagath-systems', cost: vainthorn(34) },
  ],
};

const dorrclaveSection: PageSection = {
  id: 'dorrclave',
  name: 'Dorrclave',
  items: [
    { itemId: 'dorrclave-blade', cost: vainthorn(20) },
    { itemId: 'dorrclave-hilt', cost: vainthorn(20) },
    { itemId: 'dorrclave-hook', cost: vainthorn(20) },
    { itemId: 'dorrclave-string', cost: vainthorn(20) },
  ],
};

export const dagathPage: AcquisitionPage = {
  id: 'dagath',
  name: 'Dagath',

  sections: [dagathSection, dorrclaveSection],
};
