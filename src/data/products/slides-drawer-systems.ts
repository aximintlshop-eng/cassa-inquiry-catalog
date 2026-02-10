import { Product } from '../products';

import doorSlidingWheelSetImg from '@/assets/products/door-sliding-wheel-set.png';
import slidingWheelOpen25mmImg from '@/assets/products/sliding-wheel-open-25mm.png';
import slidingWheelDoubleCapImg from '@/assets/products/sliding-wheel-double-cap.png';
import doorSlidingWheel1925mmImg from '@/assets/products/door-sliding-wheel-19-25mm.png';
import slidingWheelGreenOrangeImg from '@/assets/products/sliding-wheel-green-orange.png';

export const slidesDrawerSystemsProducts: Product[] = [
  {
    id: 'sds-001',
    name: 'Door Sliding Wheel Set',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: doorSlidingWheelSetImg,
    shortDescription: 'Complete sliding wheel set for sliding doors.',
    description: 'Complete Door Sliding Wheel Set including wheels, track, and mounting hardware for sliding door installations.',
    features: ['Complete set', 'Includes track', 'Smooth rolling', 'Easy installation', 'Heavy duty wheels'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel / Nylon', 'Type': 'Wheel Set', 'Includes': 'Wheels, Track, Hardware', 'Application': 'Sliding Doors' }
  },
  {
    id: 'sds-002',
    name: 'Sliding Wheel – Open Type (25 mm)',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelOpen25mmImg,
    shortDescription: '25mm open type sliding wheel for doors.',
    description: '25mm Open Type Sliding Wheel for sliding doors and cabinets with exposed wheel design.',
    features: ['Open type design', '25mm diameter', 'Smooth rolling', 'For sliding doors', 'Easy replacement'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Nylon / Metal', 'Size': '25 mm', 'Type': 'Open Wheel', 'Load Capacity': 'Medium' }
  },
  {
    id: 'sds-003',
    name: 'Sliding Wheel – Double Cap (120 kg)',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelDoubleCapImg,
    shortDescription: 'Heavy duty double cap sliding wheel rated 120kg.',
    description: 'Heavy Duty Double Cap Sliding Wheel with 120kg load capacity for heavy sliding doors.',
    features: ['120kg capacity', 'Double cap design', 'Heavy duty', 'Ball bearing', 'Quiet operation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel / Nylon', 'Load Capacity': '120 kg', 'Type': 'Double Cap', 'Application': 'Heavy Doors' }
  },
  {
    id: 'sds-004',
    name: 'Door Sliding Wheel (Sizes 19 mm, 25 mm)',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: doorSlidingWheel1925mmImg,
    shortDescription: 'Door sliding wheels in 19mm and 25mm sizes.',
    description: 'Door Sliding Wheels available in 19mm and 25mm sizes for various sliding door applications.',
    features: ['Two size options', 'Standard design', 'Smooth operation', 'Replaceable', 'Quality bearings'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Nylon / Metal', 'Sizes': '19 mm, 25 mm', 'Type': 'Standard Wheel', 'Application': 'Sliding Doors' }
  },
  {
    id: 'sds-005',
    name: 'Sliding Wheel – Green / Orange (25 mm)',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelGreenOrangeImg,
    shortDescription: '25mm colored sliding wheels in green and orange.',
    description: '25mm Sliding Wheels in Green and Orange colors for easy identification and specific applications.',
    features: ['Color coded', '25mm diameter', 'Green & orange options', 'Easy identification', 'Quality material'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Nylon', 'Size': '25 mm', 'Color': 'Green / Orange', 'Type': 'Colored Wheel' }
  },
  {
    id: 'sds-006',
    name: 'Soft Closing & Push-to-Open Drawer Slides (Sizes 10" to 24")',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelDoubleCapImg,
    shortDescription: 'Premium drawer slides with soft close and push-to-open.',
    description: 'Premium Drawer Slides featuring both soft closing and push-to-open mechanisms, available in sizes from 10" to 24".',
    features: ['Soft close mechanism', 'Push-to-open', 'Full extension', 'Size range 10"-24"', 'Ball bearing'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Cold Rolled Steel', 'Sizes': '10" to 24"', 'Load Capacity': '45 kg', 'Type': 'Soft Close + Push Open' }
  },
  {
    id: 'sds-007',
    name: 'Full Extension Drawer Slides (Sizes 10" to 24")',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelDoubleCapImg,
    shortDescription: 'Full extension drawer slides in all standard sizes.',
    description: 'Full Extension Drawer Slides providing 100% drawer access, available in sizes from 10" to 24".',
    features: ['Full extension', '100% access', 'Ball bearing', 'Size range 10"-24"', 'Smooth operation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Cold Rolled Steel', 'Sizes': '10" to 24"', 'Extension': '100%', 'Load Capacity': '45 kg' }
  },
  {
    id: 'sds-008',
    name: 'White Drawer Slides (Sizes 10" to 24")',
    categoryId: 'slides-drawer-systems',
    category: 'Slides & Drawer Systems',
    image: slidingWheelDoubleCapImg,
    shortDescription: 'White epoxy coated drawer slides in all sizes.',
    description: 'White Epoxy Coated Drawer Slides for light colored furniture, available in sizes from 10" to 24".',
    features: ['White epoxy coating', 'Full extension', 'For light furniture', 'Size range 10"-24"', 'Corrosion resistant'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel with Epoxy', 'Color': 'White', 'Sizes': '10" to 24"', 'Load Capacity': '35 kg' }
  }
];
