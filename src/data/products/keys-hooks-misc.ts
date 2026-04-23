import { Product } from '../products';

// Import images
import steelKeyRingImg from '@/assets/products/steel-key-ring.png';
import sHookImg from '@/assets/products/s-hook.png';
import babyWindowSafetyLockImg from '@/assets/products/baby-window-safety-lock.png';
import curtainHookImg from '@/assets/products/curtain-hook.png';
import bindingWireImg from '@/assets/products/binding-wire.png';
import shelfSupporterImg from '@/assets/products/shelf-supporter.png';
import metalShelfSupporterImg from '@/assets/products/metal-shelf-supporter.png';
import glassLifter3wayImg from '@/assets/products/glass-lifter-3way.png';

export const keysHooksMiscProducts: Product[] = [
  {
    id: 'khm-001',
    name: 'Steel Key Ring – All Sizes',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: steelKeyRingImg,
    shortDescription: 'Steel key rings available in all standard sizes.',
    description: 'Steel Key Rings available in all standard sizes for organizing keys securely.',
    features: ['All sizes available', 'Durable steel', 'Split ring design', 'Easy key attachment', 'Bulk packing available'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Sizes': '15mm to 35mm', 'Type': 'Split Ring' }
  },
  {
    id: 'khm-002',
    name: 'S Hook – All Sizes',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: sHookImg,
    shortDescription: 'S hooks in various sizes for hanging applications.',
    description: 'S Hooks available in all sizes for various hanging and display applications.',
    features: ['All sizes available', 'S-shaped design', 'Multiple materials', 'Hanging applications', 'Durable construction'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel / Stainless Steel', 'Finish': 'Zinc / Chrome', 'Sizes': 'Various', 'Type': 'S Hook' }
  },
  {
    id: 'khm-003',
    name: 'Baby Window Safety Lock',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: babyWindowSafetyLockImg,
    shortDescription: 'Child safety lock for windows.',
    description: 'Baby Window Safety Lock to prevent children from opening windows unsupervised.',
    features: ['Child safety', 'Easy adult operation', 'Window compatible', 'Simple installation', 'Durable plastic'],
    specifications: { 'Brand': 'CASSA', 'Material': 'ABS Plastic', 'Color': 'White', 'Type': 'Safety Lock', 'Application': 'Windows' }
  },
  {
    id: 'khm-004',
    name: '4-Ply Curtain Hook (Long / Short)',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: curtainHookImg,
    shortDescription: '4-ply curtain hooks in long and short versions.',
    description: '4-Ply Curtain Hooks available in long and short versions for different curtain styles.',
    features: ['4-ply strength', 'Long & short options', 'Easy to use', 'For all curtains', 'Rust resistant'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Options': 'Long / Short', 'Type': 'Curtain Hook' }
  },
  {
    id: 'khm-005',
    name: 'Binding Wire',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: bindingWireImg,
    shortDescription: 'GI binding wire for construction and general use.',
    description: 'Galvanized Iron Binding Wire for construction, reinforcement tying, and general binding applications.',
    features: ['Galvanized coating', 'Flexible', 'Various gauges', 'Construction grade', 'Corrosion resistant'],
    specifications: { 'Brand': 'CASSA', 'Material': 'GI Wire', 'Finish': 'Galvanized', 'Gauges': 'Various', 'Type': 'Binding Wire' }
  },
  {
    id: 'khm-006',
    name: 'Shelf Supporter (White / Clear / Brown / Black)',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: shelfSupporterImg,
    shortDescription: 'Plastic shelf supporters in four colors.',
    description: 'Plastic Shelf Supporters available in White, Clear, Brown, and Black to match any furniture.',
    features: ['Four color options', 'Easy installation', 'For adjustable shelves', '5mm pin', 'Invisible support'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Plastic', 'Color': 'White / Clear / Brown / Black', 'Pin Size': '5mm', 'Type': 'Shelf Support' }
  },
  {
    id: 'khm-007',
    name: 'Metal Shelf Supporter',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: metalShelfSupporterImg,
    shortDescription: 'Metal shelf supporters for heavy duty applications.',
    description: 'Metal Shelf Supporters for heavy duty applications requiring additional strength.',
    features: ['Heavy duty', 'Metal construction', 'High load capacity', 'Multiple finishes', 'Durable support'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Metal', 'Finish': 'Nickel / Chrome', 'Pin Size': '5mm / 7mm', 'Type': 'Heavy Duty Support' }
  },
  {
    id: 'khm-008',
    name: 'Glass Lifter – 3 Way',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: glassLifter3wayImg,
    shortDescription: '3-way suction glass lifter for heavy glass.',
    description: '3-Way Glass Lifter with powerful suction cups for safely lifting and moving heavy glass panels.',
    features: ['3 suction cups', 'Heavy glass handling', 'Secure grip', 'Professional tool', 'Ergonomic handle'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Aluminium / Rubber', 'Type': '3 Way Lifter', 'Capacity': '75 kg', 'Application': 'Glass Handling' }
  },
  {
    id: 'khm-009',
    name: 'Glass Lifter – 1 Way',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: glassLifter3wayImg,
    shortDescription: 'Single suction glass lifter for light glass.',
    description: 'Single Suction Glass Lifter for lifting and positioning lighter glass panels and mirrors.',
    features: ['Single suction cup', 'Light glass handling', 'Portable', 'Easy operation', 'Quick release'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Plastic / Rubber', 'Type': '1 Way Lifter', 'Capacity': '25 kg', 'Application': 'Glass & Mirrors' }
  },
  {
    id: 'khm-010',
    name: 'Glass Lifter – 2 Way',
    categoryId: 'keys-hooks-misc',
    category: 'Keys, Hooks & Misc. Hardware',
    image: glassLifter3wayImg,
    shortDescription: '2-way suction glass lifter for medium glass.',
    description: '2-Way Glass Lifter with dual suction cups for medium weight glass handling.',
    features: ['2 suction cups', 'Medium glass handling', 'Balanced lift', 'Professional grade', 'Secure suction'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Aluminium / Rubber', 'Type': '2 Way Lifter', 'Capacity': '50 kg', 'Application': 'Glass Handling' }
  }
];
