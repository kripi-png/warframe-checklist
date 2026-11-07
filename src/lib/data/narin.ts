import type { AcquisitionPage, Cost, PageSection, SectionItem } from "./types"

const entropicKuva = (quantity: number): Cost[] => [
  {
    resourceId: 'entropic-kuva',
    quantity
  }
];

const narinSection: PageSection = {
  id: 'narin',
  name: 'Narin',
  items: [
    { itemId: "narin-blueprint", cost: entropicKuva(400) },
    { itemId: "narin-chassis", cost: entropicKuva(130) },
    { itemId: "narin-neuroptics", cost: entropicKuva(130) },
    { itemId: "narin-systems", cost: entropicKuva(130) }
  ]
};

const nunchasaSection: PageSection = {
  id: 'nunchasa',
  name: 'Nunchasa',
  items: [
    { itemId: "nunchasa-blueprint", cost: entropicKuva(200) },
    { itemId: "nunchasa-upper-limb", cost: entropicKuva(50) },
    { itemId: "nunchasa-string", cost: entropicKuva(50) },
    { itemId: "nunchasa-grip", cost: entropicKuva(50) },
    { itemId: "nunchasa-lower-limb", cost: entropicKuva(50) }
  ]
};

const aksondolSection: PageSection = {
  id: 'aksondol',
  name: 'Aksondol',
  items: [
    { itemId: "aksondol-blueprint", cost: entropicKuva(200) },
    { itemId: "aksondol-barrel", cost: entropicKuva(30) },
    { itemId: "aksondol-receiver", cost: entropicKuva(30) },
    { itemId: "aksondol-link", cost: entropicKuva(60) }
  ]
};

const otherSection: PageSection = {
  id: 'other',
  name: 'Other',
  items: [
    { itemId: "glacium-sigil", cost: entropicKuva(250) },
    { itemId: "on-wings-of-ice-honoria", cost: entropicKuva(500) },
    { itemId: "seonang-ephemera", cost: entropicKuva(500) },
    { itemId: "narin-prex", cost: entropicKuva(500) },
    { itemId: "niveus-sumdali", cost: entropicKuva(500) },
    { itemId: "yuvan-peak-scene", cost: entropicKuva(500) },
    { itemId: "melicas-laboratory-scene", cost: entropicKuva(500) },
    { itemId: "neotes-dance", cost: entropicKuva(50) },
    { itemId: "ice-speaker", cost: entropicKuva(50) },
    { itemId: "tidon-shoulder-medallion", cost: entropicKuva(80) },
    { itemId: "tidon-chest-medallion", cost: entropicKuva(80) },
    { itemId: "tidon-leg-medallion", cost: entropicKuva(80) },
    { itemId: "niveus-nepheri-skin", cost: entropicKuva(150) },
    { itemId: "niveus-dark-split-sword-skin", cost: entropicKuva(150) },
    { itemId: "niveus-dark-dagger-skin", cost: entropicKuva(150) },
    { itemId: "niveus-dark-sword-skin", cost: entropicKuva(150) },
    { itemId: "niveus-paracesis-skin", cost: entropicKuva(150) },
    { itemId: "niveus-orvius-skin", cost: entropicKuva(150) },
    { itemId: "niveus-glaxion-skin", cost: entropicKuva(150) },
    { itemId: "niveus-quellor-skin", cost: entropicKuva(150) },
    { itemId: "niveus-liset-skin", cost: entropicKuva(150) },
    { itemId: "10500-kuva", cost: entropicKuva(150) }
  ]
};

export const narinPage: AcquisitionPage = {
	id: 'narin',
  name: 'Narin',

  sections: [
    narinSection,
    nunchasaSection,
    aksondolSection,
    otherSection
	]
};
