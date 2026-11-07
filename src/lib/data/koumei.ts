import type { AcquisitionPage, Cost, PageSection } from "./types";

const fatePearl = (quantity: number): Cost[] => [
  {
    resourceId: 'fate-pearl',
    quantity
  }
];

const koumeiSection: PageSection = {
  id: 'koumei',
  name: 'Koumei',
  items: [
    {
      itemId: 'koumei-blueprint',
      cost: fatePearl(165)
    },
    {
      itemId: 'koumei-chassis',
      cost: fatePearl(55)
    },
    {
      itemId: 'koumei-neuroptics',
      cost: fatePearl(55)
    },
    {
      itemId: 'koumei-systems',
      cost: fatePearl(55)
    }
  ]
};

const higasaSection: PageSection = {
  id: 'higasa',
  name: 'Higasa',
  items: [
    {
      itemId: 'higasa-blueprint',
      cost: fatePearl(135)
    },
    {
      itemId: 'higasa-barrel',
      cost: fatePearl(45)
    },
    {
      itemId: 'higasa-receiver',
      cost: fatePearl(45)
    },
    {
      itemId: 'higasa-stock',
      cost: fatePearl(45)
    }
  ]
}

const amanataSection: PageSection = {
  id: 'amanata',
  name: 'Amanata',
  items: [
    {
      itemId: 'amanata-blueprint',
      cost: fatePearl(135)
    },
    {
      itemId: 'amanata-blade',
      cost: fatePearl(45)
    },
    {
      itemId: 'amanata-handle',
      cost: fatePearl(45)
    }
  ]
}

const koumeiMiscSection: PageSection = {
  id: 'misc',
  name: 'Mods & Prex',
  items: [
    {
      itemId: 'amanata-pressure',
      cost: fatePearl(150)
    },
    {
      itemId: 'higasa-serration',
      cost: fatePearl(150)
    },
    {
      itemId: 'koumei-prex-card',
      cost: fatePearl(200)
    }
  ]
};

export const koumeiPage: AcquisitionPage = {
	id: 'koumei',
  name: 'Koumei',

  sections: [
    koumeiSection,
    higasaSection,
    amanataSection,
    koumeiMiscSection
	]
};
