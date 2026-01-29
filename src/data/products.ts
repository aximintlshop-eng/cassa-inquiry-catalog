import { doorHandlesAccessoriesProducts } from './products/door-handles-accessories';
import { locksCylindersProducts } from './products/locks-cylinders';
import { keysHooksMiscProducts } from './products/keys-hooks-misc';
import { glassFittingsHingesProducts } from './products/glass-fittings-hinges';
import { slidesDrawerSystemsProducts } from './products/slides-drawer-systems';
import { bracketsChannelsProducts } from './products/brackets-channels';
import { drillingCuttingToolsProducts } from './products/drilling-cutting-tools';
import { handToolsProducts } from './products/hand-tools';
import { cassaScrewsFastenersProducts } from './products/cassa-screws-fasteners';
import { cassaElectronicPaintMachineryProducts } from './products/cassa-electronic-paint-machinery';

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  category: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

// Combine all products from all categories
export const products: Product[] = [
  ...doorHandlesAccessoriesProducts,
  ...locksCylindersProducts,
  ...keysHooksMiscProducts,
  ...glassFittingsHingesProducts,
  ...slidesDrawerSystemsProducts,
  ...bracketsChannelsProducts,
  ...drillingCuttingToolsProducts,
  ...handToolsProducts,
  ...cassaScrewsFastenersProducts,
  ...cassaElectronicPaintMachineryProducts
];

export const getProductsByCategoryId = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
