import type {
  AcquisitionPage,
  Cost,
  PageSection
} from '$lib/data/types';

const fergolyte = (quantity: number): Cost[] => [
  {
    resourceId: 'fergolyte',
    quantity
  }
];

const nokkoSection: PageSection = {
  id: 'nokko',
  name: 'Nokko',
  items: [
    {
      itemId: 'nokko-blueprint',
      cost: fergolyte(240),
      amountNeeded: 2
    },
    {
      itemId: 'nokko-chassis',
      cost: fergolyte(160),
      amountNeeded: 2
    },
    {
      itemId: 'nokko-neuro',
      cost: fergolyte(160),
      amountNeeded: 2
    },
    {
      itemId: 'nokko-systems',
      cost: fergolyte(160),
      amountNeeded: 2
    },
  ]
};

const arbucepSection: PageSection = {
  id: 'arbucep',
  name: 'Arbucep',
  items: [
    {
      itemId: 'arbucep-blueprint',
      cost: fergolyte(220)
    },
    {
      itemId: 'arbucep-barrel',
      cost: fergolyte(150)
    },
    {
      itemId: 'arbucep-receiver',
      cost: fergolyte(150)
    },
    {
      itemId: 'arbucep-stock',
      cost: fergolyte(150)
    }
  ]
};

const arcanesSection: PageSection = {
  id: 'arcanes',
  name: 'Arcanes',
  items: [
    {
      itemId: 'primary-frostbite',
      cost: fergolyte(150)
    },
    {
      itemId: 'primary-blight',
      cost: fergolyte(150)
    },
    {
      itemId: 'conjunction-voltage',
      cost: fergolyte(150)
    },
    {
      itemId: 'secondary-encumber',
      cost: fergolyte(150)
    },
    {
      itemId: 'secondary-fortifier',
      cost: fergolyte(150)
    }
  ]
};

const princeSection: PageSection = {
  id: 'prince-levels',
  name: 'The Prince',
  items: [
    {
      itemId: 'the-prince-level1',
      cost: fergolyte(20)
    },
    {
      itemId: 'the-prince-level2',
      cost: fergolyte(40)
    },
    {
      itemId: 'the-prince-level3',
      cost: fergolyte(60)
    }
  ]
};

const miscSection: PageSection = {
  id: 'misc',
  name: 'Misc',
  items: [
    {
      itemId: 'rizoma-ephemera',
      cost: fergolyte(150)
    },
    {
      itemId: 'ayatan-chattraka-sculpture',
      cost: fergolyte(75)
    },
    {
      itemId: 'roots-n-fruits',
      cost: fergolyte(25)
    },
    {
      itemId: 'roots-n-fruits-poster',
      cost: fergolyte(25)
    },
    {
      itemId: 'onemind',
      cost: fergolyte(25)
    },
    {
      itemId: 'onemind-poster',
      cost: fergolyte(25)
    },
    {
      itemId: 'shooms',
      cost: fergolyte(25)
    },
    {
      itemId: 'shooms-poster',
      cost: fergolyte(25)
    },
    {
      itemId: 'deepmines-caves-scene',
      cost: fergolyte(60)
    },
    {
      itemId: 'deepmines-scene',
      cost: fergolyte(60)
    },
    {
      itemId: 'deepmines-lab-scene',
      cost: fergolyte(60)
    },
    {
      itemId: 'deepmines-forward-base-scene',
      cost: fergolyte(60)
    },
    {
      itemId: 'deepmine-nutrient-plant-scene',
      cost: fergolyte(60)
    }
  ]
};

const nurserySection: PageSection = {
  id: 'nursery',
  name: 'Nursery',
  items: [
    {
      itemId: 'autumnal-bonsai',
      cost: fergolyte(10)
    },
    {
      itemId: 'lanceleaf-plant',
      cost: fergolyte(10)
    },
    {
      itemId: 'monstera-plant',
      cost: fergolyte(10)
    },
    {
      itemId: 'mushroom-clump',
      cost: fergolyte(10)
    },
    {
      itemId: 'yellow-daisy-cluster',
      cost: fergolyte(10)
    },
    {
      itemId: 'rho-plant',
      cost: fergolyte(10)
    },
    {
      itemId: 'filter-flower',
      cost: fergolyte(10)
    },
    {
      itemId: 'grossa-fern',
      cost: fergolyte(10)
    },
    {
      itemId: 'birds-nest-gern-narrowly-opened',
      cost: fergolyte(10)
    },
    {
      itemId: 'mocfi-fern',
      cost: fergolyte(10)
    },
    {
      itemId: 'sunlight-dragonlily-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'moonlight-dragonlily-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'ruks-claw-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'moonlight-threshcone-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'sunlight-threshcone-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'moonlight-jadeleaf-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'sunlight-jadeleaf-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'silver-lady-fern',
      cost: fergolyte(10)
    },
    {
      itemId: 'fern-healthy',
      cost: fergolyte(10)
    },
    {
      itemId: 'fern-brown',
      cost: fergolyte(10)
    },
    {
      itemId: 'boxwood-hedge-1x1m',
      cost: fergolyte(10)
    },
    {
      itemId: 'infested-flower-single',
      cost: fergolyte(10)
    },
    {
      itemId: 'infested-flower-pair',
      cost: fergolyte(10)
    },
    {
      itemId: 'croton-plant-green-single',
      cost: fergolyte(10)
    },
    {
      itemId: 'croton-plant-green-cluster',
      cost: fergolyte(10)
    },
    {
      itemId: 'croton-plant-yellow-single',
      cost: fergolyte(10)
    },
    {
      itemId: 'croton-plant-yellow-cluster',
      cost: fergolyte(10)
    },
    {
      itemId: 'palm-shrum-small',
      cost: fergolyte(10)
    },
    {
      itemId: 'palm-shrum-medium',
      cost: fergolyte(10)
    },
    {
      itemId: 'ficus-tree-single',
      cost: fergolyte(10)
    },
    {
      itemId: 'ficus-tree-cluster',
      cost: fergolyte(10)
    },
    {
      itemId: 'hanging-ivy-narrow',
      cost: fergolyte(10)
    },
    {
      itemId: 'hanging-ivy-wide',
      cost: fergolyte(10)
    },
    {
      itemId: 'ivy-tendrils',
      cost: fergolyte(10)
    },
    {
      itemId: 'ivy-vine',
      cost: fergolyte(10)
    },
    {
      itemId: 'ivy-patch',
      cost: fergolyte(10)
    },
    {
      itemId: 'vestan-moss-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'ghost-bush-sickly',
      cost: fergolyte(10)
    },
    {
      itemId: 'orokin-bush-small',
      cost: fergolyte(10)
    },
    {
      itemId: 'geisang-reeds',
      cost: fergolyte(10)
    },
    {
      itemId: 'glow-plants-dense',
      cost: fergolyte(10)
    },
    {
      itemId: 'glow-plants-sparse',
      cost: fergolyte(10)
    },
    {
      itemId: 'vallis-fern',
      cost: fergolyte(10)
    },
    {
      itemId: 'vallis-mushrooms-small-group',
      cost: fergolyte(10)
    },
    {
      itemId: 'bush-cluster-dense',
      cost: fergolyte(10)
    },
    {
      itemId: 'autumn-tuvul-sapling',
      cost: fergolyte(10)
    },
    {
      itemId: 'dusklight-sarracenia-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'frostleaf-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'grass-tuft-short',
      cost: fergolyte(10)
    },
    {
      itemId: 'lunar-pitcher-decoration',
      cost: fergolyte(10)
    },
    {
      itemId: 'grass-tuft-tall',
      cost: fergolyte(10)
    },
    {
      itemId: 'planter-small-wood',
      cost: fergolyte(10)
    },
    {
      itemId: 'planter-box-foliage-small',
      cost: fergolyte(10)
    },
    {
      itemId: 'planter-large-wood',
      cost: fergolyte(10)
    },
    {
      itemId: 'planter-small-stone',
      cost: fergolyte(10)
    },
    {
      itemId: 'hanging-flowerpot-wide',
      cost: fergolyte(10)
    },
    {
      itemId: 'assorted-flowers-red-and-white',
      cost: fergolyte(10)
    },
    {
      itemId: 'assorted-flowers-blue-and-white',
      cost: fergolyte(10)
    },
    {
      itemId: 'hanging-flowerpot-narrow',
      cost: fergolyte(10)
    },
    {
      itemId: 'planter-clay',
      cost: fergolyte(10)
    }
  ]
};

export const nokkoPage: AcquisitionPage = {
  id: 'nokko',
  name: 'Nokko',

  sections: [
    nokkoSection,
    arbucepSection,
    arcanesSection,
    princeSection,
    miscSection,
    nurserySection
  ]
};
