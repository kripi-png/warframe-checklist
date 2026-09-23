import type { AcquisitionPage, Cost, PageSection } from './types';

const atramentum = (quantity: number): Cost[] => [
	{
		resourceId: 'atramentum',
		quantity
	}
];

const follieSection: PageSection = {
	id: 'follie',
  name: 'Follie',

  items: [
    {
      itemId: 'arcane-foo',
      cost: atramentum(10)
    },
    {
      itemId: 'arcane-bar',
      cost: atramentum(10)
    },
		{
			itemId: 'follie-blueprint',
			cost: atramentum(1200),
      amountNeeded: 2
		},
		{
			itemId: 'follie-chassis',
			cost: atramentum(400),
      amountNeeded: 2
		},
		{
			itemId: 'follie-neuroptics',
			cost: atramentum(400),
      amountNeeded: 2
		},
		{
			itemId: 'follie-systems',
			cost: atramentum(400),
      amountNeeded: 2
		}
	]
};

const enkausSection: PageSection = {
	id: 'enkaus',
	name: 'Enkaus',

	items: [
		{
			itemId: 'enkaus-blueprint',
			cost: atramentum(1200)
		},
		{
			itemId: 'enkaus-barrel',
			cost: atramentum(400)
		},
		{
			itemId: 'enkaus-receiver',
			cost: atramentum(400)
		},
		{
			itemId: 'enkaus-stock',
			cost: atramentum(400)
		}
	]
};

const otherRewardsSection: PageSection = {
	id: 'other-rewards',
	name: 'Other Rewards',

	items: [
		{
			itemId: 'drip',
			cost: atramentum(200)
		},
		{
			itemId: 'stained-vespers',
			cost: atramentum(200)
		},
		{
			itemId: 'deadnaught',
			cost: atramentum(200)
		},
		{
			itemId: 'follie-prex',
			cost: atramentum(600)
		},
		{
			itemId: 'haunted-vesper-relay-scene',
			cost: atramentum(600)
		},
		{
			itemId: 'truths-hammer',
			cost: atramentum(360)
		}
	]
};

export const folliePage: AcquisitionPage = {
	id: 'follie',
  name: 'Follie',

	sections: [
    follieSection,
		enkausSection,
		otherRewardsSection,
	]
};
