/* Template file to be cloned */
import type { AcquisitionPage, Cost, PageSection, SectionItem } from './types';

const resource = (resourceId: string, quantity: number): Cost => ({
  resourceId,
  quantity,
});

const nacreousPebble = (): Cost => resource('nacreous-pebble', 100);
const aggristone = (): Cost => resource('aggristone', 150);
const saggenPearls = (): Cost => resource('saggen-pearls', 150);
const mawFang = (): Cost => resource('maw-fang', 20);
const arietteScale = (): Cost => resource('ariette-scale', 300);
const runeMarrow = (): Cost => resource('rune-marrow', 60);
const silphsela = (): Cost => resource('silphsela', 60);
const tasomaExtract = (): Cost => resource('tasoma-extract', 60);
const dracroot = (): Cost => resource('dracroot', 70);
const ueymag = (): Cost => resource('ueymag', 70);
const yaoShrubs = (): Cost => resource('yao-shrubs', 70);
const kovnik = (): Cost => resource('kovnik', 80);
const connolaSprouts = (): Cost => resource('connola-sprouts', 80);
const eevani = (): Cost => resource('eevani', 80);
const lamentus = (): Cost => resource('lamentus', 80);
const pathosClamp = (): Cost => resource('pathos-clamp', 20);

export const incarnons: SectionItem[][] = [
  // Rotation 1
  [
    {
      itemId: 'incarnon-braton',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-lato',
      cost: [yaoShrubs(), nacreousPebble(), pathosClamp()],
    },
    {
      itemId: 'incarnon-skana',
      cost: [dracroot(), connolaSprouts(), pathosClamp()],
    },
    {
      itemId: 'incarnon-paris',
      cost: [runeMarrow(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-kunai',
      cost: [yaoShrubs(), tasomaExtract(), pathosClamp()],
    },
  ],

  // Rotation 2
  [
    {
      itemId: 'incarnon-boar',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-gammacor',
      cost: [ueymag(), lamentus(), pathosClamp()],
    },
    {
      itemId: 'incarnon-angstrum',
      cost: [ueymag(), lamentus(), pathosClamp()],
    },
    {
      itemId: 'incarnon-gorgon',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-anku',
      cost: [ueymag(), arietteScale(), pathosClamp()],
    },
  ],

  // Rotation 3
  [
    { itemId: 'incarnon-bo', cost: [dracroot(), kovnik(), pathosClamp()] },
    {
      itemId: 'incarnon-latron',
      cost: [runeMarrow(), mawFang(), pathosClamp()],
    },
    {
      itemId: 'incarnon-furis',
      cost: [yaoShrubs(), lamentus(), pathosClamp()],
    },
    {
      itemId: 'incarnon-furax',
      cost: [dracroot(), arietteScale(), pathosClamp()],
    },
    {
      itemId: 'incarnon-strun',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
  ],

  // Rotation 4
  [
    {
      itemId: 'incarnon-lex',
      cost: [yaoShrubs(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-magistar',
      cost: [dracroot(), aggristone(), pathosClamp()],
    },
    {
      itemId: 'incarnon-boltor',
      cost: [runeMarrow(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-bronco',
      cost: [yaoShrubs(), nacreousPebble(), pathosClamp()],
    },
    {
      itemId: 'incarnon-ceramic-dagger',
      cost: [dracroot(), connolaSprouts(), pathosClamp()],
    },
  ],

  // Rotation 5
  [
    {
      itemId: 'incarnon-torid',
      cost: [runeMarrow(), mawFang(), pathosClamp()],
    },
    {
      itemId: 'incarnon-dual-toxocyst',
      cost: [yaoShrubs(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-dual-ichor',
      cost: [runeMarrow(), kovnik(), pathosClamp()],
    },
    {
      itemId: 'incarnon-miter',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-atomos',
      cost: [yaoShrubs(), lamentus(), pathosClamp()],
    },
  ],

  // Rotation 6
  [
    {
      itemId: 'incarnon-ack-and-brunt',
      cost: [dracroot(), arietteScale(), pathosClamp()],
    },
    {
      itemId: 'incarnon-soma',
      cost: [runeMarrow(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-vasto',
      cost: [yaoShrubs(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-nami-solo',
      cost: [dracroot(), aggristone(), pathosClamp()],
    },
    {
      itemId: 'incarnon-burston',
      cost: [runeMarrow(), nacreousPebble(), pathosClamp()],
    },
  ],

  // Rotation 7
  [
    {
      itemId: 'incarnon-zylok',
      cost: [yaoShrubs(), nacreousPebble(), pathosClamp()],
    },
    {
      itemId: 'incarnon-sibear',
      cost: [dracroot(), connolaSprouts(), pathosClamp()],
    },
    {
      itemId: 'incarnon-dread',
      cost: [runeMarrow(), tasomaExtract(), pathosClamp()],
    },
    {
      itemId: 'incarnon-despair',
      cost: [yaoShrubs(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-hate',
      cost: [dracroot(), nacreousPebble(), pathosClamp()],
    },
  ],

  // Rotation 8
  [
    {
      itemId: 'incarnon-dera',
      cost: [tasomaExtract(), ueymag(), pathosClamp()],
    },
    {
      itemId: 'incarnon-sybaris',
      cost: [saggenPearls(), ueymag(), pathosClamp()],
    },
    {
      itemId: 'incarnon-cestra',
      cost: [saggenPearls(), kovnik(), pathosClamp()],
    },
    {
      itemId: 'incarnon-sicarus',
      cost: [nacreousPebble(), aggristone(), pathosClamp()],
    },
    { itemId: 'incarnon-okina', cost: [mawFang(), lamentus(), pathosClamp()] },
  ],

  // Rotation 9
  [
    {
      itemId: 'incarnon-vectis',
      cost: [eevani(), saggenPearls(), pathosClamp()],
    },
    {
      itemId: 'incarnon-obex',
      cost: [nacreousPebble(), lamentus(), pathosClamp()],
    },
    {
      itemId: 'incarnon-destreza',
      cost: [dracroot(), runeMarrow(), pathosClamp()],
    },
    {
      itemId: 'incarnon-ballistica',
      cost: [kovnik(), silphsela(), pathosClamp()],
    },
    {
      itemId: 'incarnon-stug',
      cost: [aggristone(), tasomaExtract(), pathosClamp()],
    },
  ],
];

const sections: PageSection[] = incarnons.map((rotation, i) => {
  const id = 'rotation_' + i;
  const name = `Rotation ${i + 1} (${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i]})`;
  return {
    id,
    name,
    items: rotation,
  };
});

export const incaronAdapterPage: AcquisitionPage = {
  id: 'incarnon_adapters',
  name: 'Incarnon Adapters',
  sections,
};
