import type { Item, Resource } from './types';

export const follieItems: Item[] = [
  {
		id: 'arcane-foo',
		name: 'Arcane Foo',
		type: 'arcane',
		amountNeeded: 21
  },
  {
		id: 'arcane-bar',
		name: 'Arcane Bar',
		type: 'arcane',
		amountNeeded: 10
	},
	{
		id: 'follie-blueprint',
		name: 'Follie Blueprint',
    type: 'warframe',
		isDrop: true
	},
	{
		id: 'follie-chassis',
		name: 'Follie Chassis',
		type: 'warframe-part',
		isDrop: true
	},
	{
		id: 'follie-neuroptics',
		name: 'Follie Neuroptics',
		type: 'warframe-part',
		isDrop: true
	},
	{
		id: 'follie-systems',
		name: 'Follie Systems',
		type: 'warframe-part',
		isDrop: true
	},

	{
		id: 'enkaus-blueprint',
		name: 'Enkaus Blueprint',
		type: 'weapon',
		isDrop: true
	},
	{
		id: 'enkaus-barrel',
		name: 'Enkaus Barrel',
		type: 'weapon-part',
		isDrop: true
	},
	{
		id: 'enkaus-receiver',
		name: 'Enkaus Receiver',
		type: 'weapon-part',
		isDrop: true
	},
	{
		id: 'enkaus-stock',
		name: 'Enkaus Stock',
    type: 'weapon-part',
    isDrop: true
	},

	{
		id: 'drip',
		name: 'Drip',
		type: 'cosmetic'
	},
	{
		id: 'stained-vespers',
		name: 'Stained Vespers',
		type: 'cosmetic'
	},
	{
		id: 'deadnaught',
		name: 'Deadnaught',
		type: 'cosmetic'
	},
	{
		id: 'follie-prex',
		name: 'Follie Prex',
		type: 'other'
	},
	{
		id: 'haunted-vesper-relay-scene',
		name: 'Haunted Vesper Relay Scene',
		type: 'cosmetic'
	},
	{
		id: 'truths-hammer',
		name: "Truth's Hammer",
		type: 'other'
	}
];
