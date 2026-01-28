import { doorHardwareLocksProducts } from './products/door-hardware-locks';

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

const baseProducts: Product[] = [
  // Paint Tools
  {
    id: 'pt-001',
    name: 'Premium Paint Roller Set',
    categoryId: 'paint-tools',
    category: 'Paint Tools',
    image: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-d11111ae564e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'High-quality paint roller set with ergonomic handle and multiple roller sizes for professional finish.',
    description: 'The Cassa® Premium Paint Roller Set is designed for professional painters and DIY enthusiasts who demand superior results. Featuring our patented ergonomic handle design and multiple roller sizes, this set delivers smooth, even coverage with minimal effort. The microfiber roller covers are suitable for all paint types and ensure excellent paint pickup and release for efficient application.',
    features: [
      'Ergonomic handle design reduces wrist fatigue',
      'Multiple roller sizes for versatile application',
      'Microfiber roller covers compatible with all paint types',
      'Easy-clean technology for quick roller maintenance',
      'Drip-free design minimizes mess'
    ],
    specifications: {
      'Handle Material': 'Reinforced polymer with comfort grip',
      'Roller Cover Material': 'Microfiber blend',
      'Included Sizes': '9-inch, 4-inch, and corner roller',
      'Compatible Paints': 'All types (latex, oil, enamel)',
      'Washable': 'Yes, reusable'
    }
  },
  {
    id: 'pt-002',
    name: 'Professional Paint Brush Set',
    categoryId: 'paint-tools',
    category: 'Paint Tools',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32d6c8884?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Set of 5 premium brushes with various sizes for detailed painting work.',
    description: 'The Cassa® Professional Paint Brush Set includes 5 high-quality brushes in various sizes, perfect for detailed painting work. Each brush features hand-selected bristles and ergonomic handles for precision and comfort.',
    features: [
      'Hand-selected bristles for optimal paint pickup and release',
      '5 sizes for different application needs',
      'Ergonomic handles reduce hand fatigue',
      'No-shed technology keeps bristles intact',
      'Compatible with all paint types'
    ],
    specifications: {
      'Brush Sizes': '0.5", 1", 1.5", 2", 3"',
      'Bristle Material': 'Synthetic-natural blend',
      'Handle Material': 'Lacquered hardwood',
      'Compatible Paints': 'All types (latex, oil, enamel)',
      'Ferrule': 'Stainless steel, double-crimped'
    }
  },
  
  // Drill Bits
  {
    id: 'db-001',
    name: 'Titanium-Coated Drill Bit Set',
    categoryId: 'drill-bits',
    category: 'Drill Bits',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567361808960-c7b6dd1072c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Complete set of titanium-coated drill bits for extended durability and performance.',
    description: 'The Cassa® Titanium-Coated Drill Bit Set features 21 precision-machined bits with titanium coating for extended life and superior performance. The set includes a comprehensive range of sizes for wood, metal, and plastic applications. Each bit features a patented split-point tip that prevents walking and allows for precision drilling without a center punch.',
    features: [
      'Titanium coating extends bit life up to 5x longer than standard bits',
      '21 sized bits from 1/16" to 1/2"',
      'Patented split-point tip prevents walking',
      'Compatible with wood, metal, and plastic',
      'Comes in a durable storage case'
    ],
    specifications: {
      'Material': 'High-speed steel with titanium coating',
      'Size Range': '1/16" to 1/2" (21 pieces)',
      'Shank Type': '3-flat design for secure chuck grip',
      'Compatible Materials': 'Wood, metal, plastic',
      'Storage': 'Index case with size markings'
    }
  },
  {
    id: 'db-002',
    name: 'Masonry Drill Bit Set',
    categoryId: 'drill-bits',
    category: 'Drill Bits',
    image: 'https://images.unsplash.com/photo-1622142437830-c186d68f9830?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Specialized drill bits for concrete, brick, and stone applications.',
    description: 'The Cassa® Masonry Drill Bit Set is designed for drilling into concrete, brick, stone, and other masonry materials. These carbide-tipped bits provide excellent durability and efficient penetration.',
    features: [
      'Carbide-tipped for extended life in masonry applications',
      'U-groove design efficiently removes dust and debris',
      'Precision-ground tips for accurate starting',
      'Compatible with hammer drills and standard drills',
      'Includes 7 commonly used sizes'
    ],
    specifications: {
      'Material': 'High-grade steel with carbide tips',
      'Size Range': '3/16" to 1/2" (7 pieces)',
      'Shank Type': 'Round with 3-flat sections',
      'Compatible Materials': 'Concrete, brick, stone, tile',
      'Storage': 'Plastic case with bit holders'
    }
  },
  
  // Power Tools
  {
    id: 'pt-501',
    name: 'Cordless Drill Driver',
    categoryId: 'power-tools',
    category: 'Power Tools',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547531455-c8831524be13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603733167667-0d3406fbdbb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Powerful 20V cordless drill with lithium-ion battery and variable speed control.',
    description: 'The Cassa® Cordless Drill Driver delivers professional performance in a compact design. Featuring a powerful 20V brushless motor, this drill offers exceptional torque and runtime for a wide range of drilling and fastening applications. The variable speed control and 20+1 clutch settings provide precise control for delicate tasks and maximum power when needed.',
    features: [
      '20V brushless motor for extended runtime and tool life',
      'Variable speed control for precision work',
      '20+1 clutch settings for optimal torque control',
      'Built-in LED work light illuminates dark work areas',
      'Ergonomic handle with overmold for comfort during extended use'
    ],
    specifications: {
      'Power': '20V Lithium-Ion',
      'Max Torque': '650 in-lbs',
      'Speed Settings': '0-450/0-1800 RPM',
      'Chuck Size': '1/2-inch keyless',
      'Weight': '3.5 lbs (with battery)',
      'Battery Life': 'Up to 2 hours continuous use'
    }
  },
  
  // Hand Tools
  {
    id: 'ht-001',
    name: 'Professional Hammer',
    categoryId: 'hand-tools',
    category: 'Hand Tools',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ergonomic steel hammer with shock-absorbing handle and precision balance.',
    description: 'The Cassa® Professional Hammer combines durability, balance, and comfort in a premium tool designed for professionals. The one-piece steel construction ensures strength and longevity, while the vibration-dampening handle reduces fatigue during extended use.',
    features: [
      'One-piece steel construction for maximum durability',
      'Vibration-dampening handle reduces impact stress',
      'Perfectly balanced for efficient striking',
      'Magnetic nail starter for one-handed operation',
      'Textured grip for secure handling in all conditions'
    ],
    specifications: {
      'Weight': '16 oz (1 lb)',
      'Handle Material': 'Fiberglass core with TPR overmold',
      'Head Material': 'Forged steel with polished striking face',
      'Overall Length': '13 inches',
      'Warranty': 'Lifetime against manufacturing defects'
    }
  },
  
  // Drawer Slides
  {
    id: 'ds-001',
    name: 'Ball Bearing Drawer Slides',
    categoryId: 'drawer-slides',
    category: 'Drawer Slides',
    image: 'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530119458221-cf266ca1273c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586153540587-889b59a2bb6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Premium ball bearing drawer slides with smooth operation and full extension capability.',
    description: 'Cassa® Ball Bearing Drawer Slides provide smooth, reliable operation for drawers of all sizes. These premium slides feature precision steel ball bearings for effortless movement and long life. The full extension design allows complete access to drawer contents, while the soft-close mechanism prevents slamming.',
    features: [
      'Precision steel ball bearings for smooth operation',
      'Full extension for complete drawer access',
      'Soft-close mechanism prevents slamming',
      'Heavy-duty construction supports up to 100 lbs',
      'Side mount design for easy installation'
    ],
    specifications: {
      'Material': 'Cold-rolled steel with zinc plating',
      'Load Capacity': '100 lbs per pair',
      'Extension': 'Full (100%)',
      'Mounting Type': 'Side mount',
      'Available Lengths': '10", 12", 14", 16", 18", 20", 22"',
      'Closing Type': 'Soft-close'
    }
  },
  
  // Hardware
  {
    id: 'hw-001',
    name: 'Premium Cabinet Hinges',
    categoryId: 'hardware',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1518709594023-6ebd2b5ae4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Soft-close cabinet hinges with European-style design and adjustable mounting.',
    description: 'Cassa® Premium Cabinet Hinges combine elegant design with functional excellence. These European-style concealed hinges feature a soft-close mechanism that prevents door slamming and extends furniture life. The 6-way adjustable mounting system ensures perfect door alignment even after years of use.',
    features: [
      'Soft-close mechanism for quiet, gentle closing',
      '6-way adjustment system for perfect door alignment',
      'Concealed design for clean, modern appearance',
      'Quick-mount plates for easy installation',
      'Tested for 200,000 open/close cycles'
    ],
    specifications: {
      'Material': 'Nickel-plated steel',
      'Opening Angle': '110°',
      'Closing Type': 'Soft-close',
      'Adjustments': '6-way (height, side, depth)',
      'Application': 'Frameless or face frame cabinets',
      'Durability': 'Tested for 200,000 cycles'
    }
  }
];

// Combine all products
export const products: Product[] = [
  ...doorHardwareLocksProducts,
  ...baseProducts
];

export const getProductsByCategoryId = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
