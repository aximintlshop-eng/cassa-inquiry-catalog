
export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  subcategories?: string[];
}

export const categories: Category[] = [
  {
    id: 'door-handles-accessories',
    name: 'Door Handles & Accessories',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 65,
    subcategories: [
      'Door Handles',
      'Rozets',
      'Cabinet Handles',
      'Window Handles',
      'Door Plates',
      'Knobs',
      'Magnetic Catchers',
      'Door Closers & Stoppers'
    ]
  },
  {
    id: 'locks-cylinders',
    name: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 32,
    subcategories: [
      'Mortise Locks',
      'Rim Locks',
      'Pad Locks',
      'Cylinders',
      'Drawer & Cabinet Locks',
      'Sliding Locks',
      'Glass Locks & Patches'
    ]
  },
  {
    id: 'keys-hooks-misc',
    name: 'Keys, Hooks & Misc. Hardware',
    image: 'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 10,
    subcategories: [
      'Key Rings',
      'S Hooks',
      'Safety Locks',
      'Curtain Hooks',
      'Shelf Supporters',
      'Glass Lifters'
    ]
  },
  {
    id: 'glass-fittings-hinges',
    name: 'Glass Fittings & Hinges',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 16,
    subcategories: [
      'Glass Hinges',
      'Glass Bottom Machines',
      'MS Hinges',
      'Bearing Hinges',
      'Concealed Hinges',
      'Butterfly Hinges',
      'Special Hinges'
    ]
  },
  {
    id: 'slides-drawer-systems',
    name: 'Slides & Drawer Systems',
    image: 'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 8,
    subcategories: [
      'Sliding Wheels',
      'Drawer Slides',
      'Push-to-Open Systems'
    ]
  },
  {
    id: 'brackets-channels',
    name: 'Brackets & Channels',
    image: 'https://images.unsplash.com/photo-1518709594023-6ebd2b5ae4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 29,
    subcategories: [
      'L Brackets',
      'Corner Brackets',
      'Shelf Brackets',
      'Pipe Connectors',
      'Towel Brackets',
      'Flanges & Sockets',
      'Pipes & Channels',
      'Display Accessories'
    ]
  },
  {
    id: 'drilling-cutting-tools',
    name: 'Drilling & Cutting Tools',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 29,
    subcategories: [
      'Arbors & Chucks',
      'Drill Bits',
      'Cutting Discs',
      'Grinding Discs',
      'Hole Saws',
      'Hand Saws',
      'Hacksaw Blades'
    ]
  },
  {
    id: 'hand-tools',
    name: 'Hand Tools',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 75,
    subcategories: [
      'Scrapers & Blades',
      'Plastering Tools',
      'Measuring Tools',
      'Paint Tools',
      'Hammers',
      'Chisels',
      'Pliers & Cutters',
      'Wrenches & Spanners',
      'Screwdrivers',
      'Chains & Ropes',
      'Ladders & Trolleys'
    ]
  },
  {
    id: 'cassa-screws-fasteners',
    name: 'Cassa Screws & Fasteners',
    image: 'https://images.unsplash.com/photo-1518709594023-6ebd2b5ae4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 20,
    subcategories: [
      'Wall Plugs',
      'Expansion Bolts',
      'Nails',
      'Screws',
      'Rivets'
    ]
  },
  {
    id: 'cassa-electronic-paint-machinery',
    name: 'Cassa Electronic Paint Machinery',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 0,
    subcategories: []
  }
];

// Get featured categories for homepage (first 8)
export const getFeaturedCategories = (): Category[] => {
  return categories.slice(0, 8);
};
