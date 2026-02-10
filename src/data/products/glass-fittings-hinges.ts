import { Product } from '../products';

// Import images
import glassToGlassHingeImg from '@/assets/products/glass-to-glass-hinge.png';
import wallToGlassHingeImg from '@/assets/products/wall-to-glass-hinge.png';
import glassBottomMachineImg from '@/assets/products/glass-bottom-machine.png';
import msHingesImg from '@/assets/products/ms-hinges.png';
import bearingHingesImg from '@/assets/products/bearing-hinges.png';
import ssButterflyHingesImg from '@/assets/products/ss-butterfly-hinges.png';
import concealedHinges3dImg from '@/assets/products/3d-concealed-hinges.png';
import aluminiumFlagHingesImg from '@/assets/products/aluminium-flag-hinges.png';
import concealedHingeAImg from '@/assets/products/concealed-hinge-a-type.png';
import concealedHingeBImg from '@/assets/products/concealed-hinge-b-type.png';
import concealedHingeCImg from '@/assets/products/concealed-hinge-c-type.png';
import butterflyHingesSoftCloseImg from '@/assets/products/butterfly-hinges-soft-close.png';
import degree165HingesImg from '@/assets/products/165-degree-hinges.png';
import doubleActionHingesImg from '@/assets/products/double-action-hinges.png';
import glassSpacerImg from '@/assets/products/glass-spacer.png';

export const glassFittingsHingesProducts: Product[] = [
  {
    id: 'gfh-001',
    name: 'CASSA Glass to Glass Hinge – 90 Degree',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: glassToGlassHingeImg,
    shortDescription: '90 degree glass to glass hinge for shower enclosures.',
    description: 'CASSA Glass to Glass Hinge with 90 degree opening for frameless shower enclosures and glass partitions.',
    features: ['90 degree opening', 'Glass to glass connection', 'Stainless steel', 'Shower compatible', 'Heavy duty'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Stainless Steel 304', 'Finish': 'Satin / Chrome', 'Angle': '90 Degree', 'Application': 'Shower / Glass Partitions' }
  },
  {
    id: 'gfh-002',
    name: 'CASSA Wall to Glass Hinge – 90 Degree',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: wallToGlassHingeImg,
    shortDescription: '90 degree wall to glass hinge for glass doors.',
    description: 'CASSA Wall to Glass Hinge with 90 degree opening for mounting frameless glass doors to walls.',
    features: ['90 degree opening', 'Wall to glass mount', 'Stainless steel', 'Heavy load capacity', 'Professional grade'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Stainless Steel 304', 'Finish': 'Satin / Chrome', 'Angle': '90 Degree', 'Application': 'Glass Doors' }
  },
  {
    id: 'gfh-003',
    name: 'Glass Bottom Machine / Full Set (90 kg, 120 kg)',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: glassBottomMachineImg,
    shortDescription: 'Glass bottom fitting machine in 90kg and 120kg capacities.',
    description: 'Glass Bottom Machine full set available in 90kg and 120kg capacities for floor spring installations.',
    features: ['Two capacity options', 'Floor spring system', 'Smooth operation', 'Adjustable', 'Professional installation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Stainless Steel', 'Capacity': '90 kg / 120 kg', 'Type': 'Floor Spring', 'Application': 'Heavy Glass Doors' }
  },
  {
    id: 'gfh-004',
    name: 'MS Hinges – All Sizes',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: msHingesImg,
    shortDescription: 'Mild steel hinges in all standard sizes.',
    description: 'Mild Steel Hinges available in all standard sizes for doors, gates, and general applications.',
    features: ['All sizes available', 'MS construction', 'Heavy duty', 'General purpose', 'Paintable finish'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Mild Steel', 'Finish': 'Self Color / Painted', 'Sizes': 'Various', 'Application': 'Doors & Gates' }
  },
  {
    id: 'gfh-005',
    name: 'Bearing Hinges 4×3×3 (SN / CP / GP / Black)',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: bearingHingesImg,
    shortDescription: 'Ball bearing hinges 4×3×3 in four finishes.',
    description: 'Ball Bearing Hinges 4×3×3 inch with smooth operation, available in SN, CP, GP, and Black finishes.',
    features: ['Ball bearing design', 'Smooth operation', 'Four finish options', 'Heavy duty rated', 'Long lasting'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Stainless Steel', 'Size': '4×3×3 inch', 'Finish': 'SN / CP / GP / Black', 'Type': 'Ball Bearing Hinge' }
  },
  {
    id: 'gfh-006',
    name: 'Stainless Steel Butterfly Wooden Door Hinges',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: ssButterflyHingesImg,
    shortDescription: 'Stainless steel butterfly hinges for wooden doors.',
    description: 'Stainless Steel Butterfly Hinges designed specifically for wooden door applications.',
    features: ['Butterfly design', 'Stainless steel', 'For wooden doors', 'Decorative look', 'Corrosion resistant'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Stainless Steel', 'Finish': 'Satin / Polished', 'Type': 'Butterfly Hinge', 'Application': 'Wooden Doors' }
  },
  {
    id: 'gfh-007',
    name: '3D Concealed Hinges – All Sizes',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: concealedHinges3dImg,
    shortDescription: '3D adjustable concealed hinges in all sizes.',
    description: '3D Concealed Hinges with three-way adjustment for perfect door alignment, available in all sizes.',
    features: ['3D adjustment', 'Concealed design', 'All sizes available', 'Perfect alignment', 'Modern doors'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Zinc Alloy', 'Finish': 'Various', 'Type': '3D Concealed', 'Adjustment': 'Height, Side, Depth' }
  },
  {
    id: 'gfh-008',
    name: 'Aluminium Flag Hinges',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: aluminiumFlagHingesImg,
    shortDescription: 'Aluminium flag hinges for aluminium doors and windows.',
    description: 'Aluminium Flag Hinges designed for aluminium doors and windows with easy installation.',
    features: ['Flag design', 'Aluminium construction', 'Lightweight', 'For Al doors/windows', 'Easy installation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Aluminium', 'Finish': 'White / Silver / Brown', 'Type': 'Flag Hinge', 'Application': 'Aluminium Doors & Windows' }
  },
  {
    id: 'gfh-009',
    name: 'Concealed Hinges "A" Type – Soft Closing / Normal',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: concealedHingeAImg,
    shortDescription: 'A-type concealed hinges with soft close option.',
    description: 'Concealed Hinges A-Type available in soft closing and normal versions for cabinet doors.',
    features: ['A-type design', 'Soft close option', 'Concealed mounting', 'Cabinet grade', 'Smooth operation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Type': 'A Type Concealed', 'Options': 'Soft Close / Normal' }
  },
  {
    id: 'gfh-010',
    name: 'Concealed Hinges "B" Type – Soft Closing / Normal',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: concealedHingeBImg,
    shortDescription: 'B-type concealed hinges with soft close option.',
    description: 'Concealed Hinges B-Type available in soft closing and normal versions for overlay doors.',
    features: ['B-type design', 'Soft close option', 'For overlay doors', 'Quality mechanism', 'Easy adjustment'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Type': 'B Type Concealed', 'Options': 'Soft Close / Normal' }
  },
  {
    id: 'gfh-011',
    name: 'Concealed Hinges "C" Type – Soft Closing / Normal',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: concealedHingeCImg,
    shortDescription: 'C-type concealed hinges with soft close option.',
    description: 'Concealed Hinges C-Type available in soft closing and normal versions for inset doors.',
    features: ['C-type design', 'Soft close option', 'For inset doors', 'Precision fit', 'Quality construction'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Type': 'C Type Concealed', 'Options': 'Soft Close / Normal' }
  },
  {
    id: 'gfh-012',
    name: 'Butterfly Hinges – Soft Closing / Normal',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: butterflyHingesSoftCloseImg,
    shortDescription: 'Butterfly hinges with soft close option.',
    description: 'Butterfly Hinges available in soft closing and normal versions for cabinet and furniture applications.',
    features: ['Butterfly design', 'Soft close option', 'Decorative', 'For furniture', 'Easy installation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Various', 'Type': 'Butterfly', 'Options': 'Soft Close / Normal' }
  },
  {
    id: 'gfh-013',
    name: 'Magnum Hinges',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: bearingHingesImg,
    shortDescription: 'Heavy duty magnum hinges for main doors.',

    description: 'Heavy Duty Magnum Hinges designed for main doors and heavy wooden doors.',
    features: ['Heavy duty', 'For main doors', 'High load capacity', 'Durable construction', 'Professional grade'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel / Brass', 'Finish': 'Various', 'Type': 'Magnum Hinge', 'Application': 'Heavy Doors' }
  },
  {
    id: 'gfh-014',
    name: '165 Degree Hinges – Soft Closing',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: degree165HingesImg,
    shortDescription: '165 degree opening hinges with soft close.',
    description: '165 Degree Hinges with soft closing mechanism for corner cabinets and wide opening applications.',
    features: ['165 degree opening', 'Soft closing', 'For corner cabinets', 'Wide angle', 'Smooth operation'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Nickel Plated', 'Opening': '165 Degree', 'Type': 'Wide Angle Hinge' }
  },
  {
    id: 'gfh-015',
    name: 'Double Action Hinges',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: doubleActionHingesImg,
    shortDescription: 'Double action hinges for swing doors.',
    description: 'Double Action Hinges allowing doors to swing both ways with self-closing mechanism.',
    features: ['Swings both ways', 'Self closing', 'For swing doors', 'Spring loaded', 'Commercial grade'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Steel', 'Finish': 'Chrome / Satin', 'Type': 'Double Action', 'Application': 'Swing Doors' }
  },
  {
    id: 'gfh-016',
    name: 'Glass Spacer – All Sizes',
    categoryId: 'glass-fittings-hinges',
    category: 'Glass Fittings & Hinges',
    image: glassToGlassHingeImg,
    shortDescription: 'Glass spacers in all sizes for glass installation.',
    description: 'Glass Spacers available in all sizes for proper glass panel spacing and installation.',
    features: ['All sizes available', 'For glass installation', 'Precision spacing', 'Various thicknesses', 'Easy to use'],
    specifications: { 'Brand': 'CASSA', 'Material': 'Plastic / Rubber', 'Sizes': 'Various', 'Type': 'Glass Spacer', 'Application': 'Glass Installation' }
  }
];
