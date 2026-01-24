
export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  subcategories?: string[];
}

export const categories: Category[] = [
  {
    id: 'door-hardware-locks',
    name: 'Door Hardware & Locks',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 45,
    subcategories: [
      'Door Handles (Lever, Pull, Full Set)',
      'Cabinet & Cupboard Handles',
      'Door Knobs',
      'Door Closers',
      'Door Stoppers',
      'Mortise Locks',
      'Rim Locks',
      'Pad Locks',
      'Cylinders & Lock Accessories',
      'Magnetic Catchers',
      'Push to Open Systems',
      'Door Plates (Push / Pull Plates)'
    ]
  },
  {
    id: 'furniture-fittings-hinges',
    name: 'Furniture Fittings & Hinges',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 52,
    subcategories: [
      'Concealed Hinges (Soft Close / Normal)',
      'Butterfly Hinges',
      '3D Concealed Hinges',
      'Glass Hinges',
      'MS Hinges',
      'Bearing Hinges',
      'Flag Hinges',
      'Double Action Hinges',
      'Magnum Hinges',
      'Tower Bolts',
      'Aldrops',
      'Hasp & Staples',
      'L Brackets & Corner Brackets',
      'Shelf Brackets'
    ]
  },
  {
    id: 'drawer-slides-sliding-systems',
    name: 'Drawer Slides & Sliding Systems',
    image: 'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 38,
    subcategories: [
      'Full Extension Drawer Slides',
      'Soft Closing Drawer Slides',
      'Push to Open Slides',
      'Sliding Door Wheels',
      'Sliding Door Wheel Sets',
      'Curtain Pipes & Accessories',
      'Chrome Pipes & Oval Pipes',
      'Pipe Brackets & Sockets',
      'Shelf Supporters',
      'Slat Board Channels',
      'Mirror Clips & Display Hooks'
    ]
  },
  {
    id: 'tools-accessories',
    name: 'Hand Tools',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 48,
    subcategories: [
      'Hammers',
      'Chisels',
      'Pliers & Cutters',
      'Wrenches & Spanners',
      'Screwdrivers & Bits',
      'Allen Keys',
      'Measuring Tools',
      'Scrapers & Putty Tools',
      'Rivet Guns',
      'Tool Boxes',
      'Ladders',
      'Clamps & Hooks',
      'Utility Knives'
    ]
  },
  {
    id: 'drilling-cutting-tools',
    name: 'Drilling & Cutting Tools',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 42,
    subcategories: [
      'SDS Drill Bits',
      'HSS Drill Bits',
      'Masonry Drill Bits',
      'Wood Drill Bits',
      'Flat Wood Bits',
      'Hole Saws (TCT & Bi-Metal)',
      'Cutting Discs (Metal, Marble, Concrete, Wood)',
      'Grinding & Flap Discs',
      'Saw Blades',
      'Jigsaw Blades',
      'Drill Chucks & Adaptors'
    ]
  },
  {
    id: 'painting-tools',
    name: 'Painting & Finishing Tools',
    image: 'https://images.unsplash.com/photo-1588779180563-d7599d96d8a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 24,
    subcategories: [
      'Paint Brushes',
      'Paint Rollers',
      'Paint Refills',
      'Silicon Guns',
      'Scrapers',
      'Water Paper (Sand Paper)',
      'Chalk Line Set',
      'Net Fixing Rollers'
    ]
  },
  {
    id: 'screws-fasteners',
    name: 'Screws & Fasteners',
    image: 'https://images.unsplash.com/photo-1518709594023-6ebd2b5ae4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 65,
    subcategories: [
      'Drywall Screws (Fine / Coarse)',
      'Self Drilling Screws',
      'Self Tapping Screws',
      'Hex Head Screws',
      'CSK Screws',
      'Gypsum Screws',
      'Expansion Bolts',
      'Fischer & Wall Plugs',
      'Nails & Pins',
      'Hose Clips',
      'Binding Wire'
    ]
  },
  {
    id: 'glass-aluminum-fittings',
    name: 'Glass & Aluminum Fittings',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 32,
    subcategories: [
      'Glass Door Hinges',
      'Glass Lifters (1 Way / 2 Way / 3 Way)',
      'Glass Spacers',
      'Glass Bottom Machines',
      'Aluminum Handles',
      'Aluminum Profiles',
      'PVC Tile Trims',
      'Window Handles',
      'Window Holders'
    ]
  },
  {
    id: 'cassa-machinery',
    name: 'CASSA Machinery',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 15,
    subcategories: [
      'Airless Putty & Painting Machines',
      'Injection Grouting Machines',
      'Sanding & Grinding Machines',
      'Machinery Spare Parts'
    ]
  }
];

// Get featured categories for homepage (first 8)
export const getFeaturedCategories = (): Category[] => {
  return categories.slice(0, 8);
};
