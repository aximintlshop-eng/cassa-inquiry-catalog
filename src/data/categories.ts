
export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'paint-tools',
    name: 'Paint Tools',
    image: 'https://images.unsplash.com/photo-1588779180563-d7599d96d8a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 12
  },
  {
    id: 'drill-bits',
    name: 'Drill Bits',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 18
  },
  {
    id: 'drawer-slides',
    name: 'Drawer Slides',
    image: 'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 8
  },
  {
    id: 'hand-tools',
    name: 'Hand Tools',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 24
  },
  {
    id: 'power-tools',
    name: 'Power Tools',
    image: 'https://images.unsplash.com/photo-1572981986848-b8baf5da9fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 15
  },
  {
    id: 'hardware',
    name: 'Hardware',
    image: 'https://images.unsplash.com/photo-1518709594023-6ebd2b5ae4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 30
  }
];
