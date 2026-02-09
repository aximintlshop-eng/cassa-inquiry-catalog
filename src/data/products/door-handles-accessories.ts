import { Product } from '../products';

// Import product images
import doorHandleAxm01 from '@/assets/products/door-handle-axm-01.png';
import doorHandleAxm25 from '@/assets/products/door-handle-axm-25.png';
import doorHandleAxm18 from '@/assets/products/door-handle-axm-18.png';
import doorHandleAxm24 from '@/assets/products/door-handle-axm-24.png';
import doorHandleAxm02 from '@/assets/products/door-handle-axm-02.png';
import doorHandleAxm17 from '@/assets/products/door-handle-axm-17.png';
import doorHandleAxm23Gp from '@/assets/products/door-handle-axm-23-gp.png';
import doorHandleAxm19Cp from '@/assets/products/door-handle-axm-19-cp.png';
import doorHandleAxm20Cp from '@/assets/products/door-handle-axm-20-cp.png';
import doorHandleAxm22Cp from '@/assets/products/door-handle-axm-22-cp.png';
import doorHandleAxm23Cp from '@/assets/products/door-handle-axm-23-cp.png';
import doorHandleAxmHd02Gp from '@/assets/products/door-handle-axm-hd02-gp.png';
import doorHandleSlim from '@/assets/products/door-handle-slim.png';
import doorHandleAxmHd03Gp from '@/assets/products/door-handle-axm-hd03-gp.png';
import doorHandleAxmHd01Gp from '@/assets/products/door-handle-axm-hd01-gp.png';
import doorHandleAxmHd01Ac from '@/assets/products/door-handle-axm-hd01-ac.png';
import doorHandleAxmHd03Ac from '@/assets/products/door-handle-axm-hd03-ac.png';
import doorHandleAxmHd02Ac from '@/assets/products/door-handle-axm-hd02-ac.png';
import doorHandleAxmAc06 from '@/assets/products/door-handle-axm-ac06.png';
import doorHandleAxmAc03 from '@/assets/products/door-handle-axm-ac03.png';
import doorHandleAxmAc01 from '@/assets/products/door-handle-axm-ac01.png';
import doorHandleAxmAc08 from '@/assets/products/door-handle-axm-ac08.png';
import doorHandleAxmHd05Ac from '@/assets/products/door-handle-axm-hd05-ac.png';
import doorHandleAxmL751 from '@/assets/products/door-handle-axm-l751.png';
import doorHandleAxmL595 from '@/assets/products/door-handle-axm-l595.png';
import doorHandleFullsetAxm02Gp from '@/assets/products/door-handle-fullset-axm02-gp.png';
import doorHandleFullsetAxm01Gp from '@/assets/products/door-handle-fullset-axm01-gp.png';
import doorHandleFullsetAxm02Cp from '@/assets/products/door-handle-fullset-axm02-cp.png';
import doorHandleFullsetAxm01Cp from '@/assets/products/door-handle-fullset-axm01-cp.png';

// Import new product images
import doorHandleLockSetSmall from '@/assets/products/door-handle-lock-set-small.png';
import rozetAxm01 from '@/assets/products/rozet-axm-01.png';
import rozetAxm02 from '@/assets/products/rozet-axm-02.png';
import rozetAxm03 from '@/assets/products/rozet-axm-03.png';
import rozetAxm40 from '@/assets/products/rozet-axm-40.png';
import rozetR26 from '@/assets/products/rozet-r-26.png';
import rozetR28 from '@/assets/products/rozet-r-28.png';
import cabinetHHandle from '@/assets/products/cabinet-h-handle.png';
import designerCabinetHandle from '@/assets/products/designer-cabinet-handle.png';
import doorPullHandle from '@/assets/products/door-pull-handle.png';
import solidMetalCabinetHandle from '@/assets/products/solid-metal-cabinet-handle.png';
import windowHandleDoubleHook from '@/assets/products/window-handle-double-hook.png';
import windowHandle from '@/assets/products/window-handle.png';
import aluminiumDoorHandle from '@/assets/products/aluminium-door-handle.png';
import windowHolder from '@/assets/products/window-holder.png';
import squarePlateHandle from '@/assets/products/square-plate-handle.png';
import pullPlate from '@/assets/products/pull-plate.png';
import pushPlate from '@/assets/products/push-plate.png';
import roundKnobLockSet from '@/assets/products/round-knob-lock-set.png';
import roundKnob from '@/assets/products/round-knob.png';

// Import magnetic catchers and other accessories images
import magneticCatcherPushSingle from '@/assets/products/magnetic-catcher-push-single.png';
import magneticCatcherPushDouble from '@/assets/products/magnetic-catcher-push-double.png';
import butterflyPushMagneticCatcher from '@/assets/products/butterfly-push-magnetic-catcher.png';
import magneticCatcher from '@/assets/products/magnetic-catcher.png';
import pvcPushToOpenCatcher from '@/assets/products/pvc-push-to-open-catcher.png';
import crystalKnob from '@/assets/products/crystal-knob.png';
import plasticKnob from '@/assets/products/plastic-knob.png';
import chromeGoldPlatedKnob from '@/assets/products/chrome-gold-plated-knob.png';
import doorCloser from '@/assets/products/door-closer.png';
import studSsDoorStopper from '@/assets/products/stud-ss-door-stopper.png';

// Import additional door stopper and handle images
import roundRubberDoorStopper from '@/assets/products/round-rubber-door-stopper.png';
import mountainDoorStopper from '@/assets/products/mountain-door-stopper.png';
import fallingDoorStopper from '@/assets/products/falling-door-stopper.png';
import halfRoundDoorStopper from '@/assets/products/half-round-door-stopper.png';
import hGlassDoorHandle from '@/assets/products/h-glass-door-handle.png';
import pullPlateWithHandle from '@/assets/products/pull-plate-with-handle.png';

export const doorHandlesAccessoriesProducts: Product[] = [
  // 1. Door Handle AXM-01
  {
    id: 'dha-001',
    name: 'Door Handle AXM-01',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm25,
    gallery: [doorHandleAxm25],
    shortDescription: 'Premium quality door handle designed for modern residential and commercial interiors, offering durability, smooth operation, and an elegant finish.',
    description: 'The Door Handle AXM-01 is crafted to meet both functional and aesthetic requirements of modern door hardware. Designed with precision, it offers a comfortable grip and smooth operation, making it ideal for daily use in homes, offices, hotels, and commercial spaces. Its durable metal body ensures reliability and resistance against wear and tear, while the premium surface finish enhances the overall appearance of the door. The AXM-01 model blends seamlessly with contemporary and classic interiors alike.',
    features: [
      'Strong metal construction for long-lasting performance',
      'Smooth grip with ergonomic design',
      'Corrosion-resistant surface finish',
      'Suitable for wooden and metal doors',
      'Manufactured using high-grade metal for superior strength',
      'Engineered for smooth rotation and easy handling',
      'Resistant to rust, corrosion, and surface fading',
      'Easy installation with standard lock and latch systems',
      'Compatible with standard mortise and cylindrical locks',
      'Ideal for interior and exterior doors',
      'Low maintenance and easy to clean'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-01',
      'Material': 'Metal',
      'Finish Options': 'As per availability',
      'Application': 'Wooden / Metal Doors',
      'Installation Type': 'Screw Fixing',
      'Usage Area': 'Residential & Commercial'
    }
  },
  // 2. Door Handle AXM-25
  {
    id: 'dha-002',
    name: 'Door Handle AXM-25',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm02,
    gallery: [doorHandleAxm02],
    shortDescription: 'Modern metal door handle designed for durability, smooth operation, and a refined architectural look.',
    description: 'Door Handle AXM-25 is engineered for long-term performance and visual appeal. Its sturdy build and smooth mechanism make it ideal for frequent use in homes, offices, and commercial buildings. The sleek design complements both modern and classic interiors.',
    features: [
      'Strong metal construction',
      'Smooth grip and comfortable handling',
      'Corrosion-resistant finish',
      'Suitable for residential and commercial doors',
      'High-quality metal body for enhanced strength',
      'Smooth rotation for effortless door operation',
      'Resistant to rust, moisture, and daily wear',
      'Easy installation on standard door fittings'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-25',
      'Material': 'Metal',
      'Finish': 'As per availability',
      'Door Type': 'Wooden / Metal',
      'Installation': 'Screw fixing',
      'Usage': 'Residential & Commercial'
    }
  },
  // 3. Door Handle AXM-18
  {
    id: 'dha-003',
    name: 'Door Handle AXM-18',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm24,
    gallery: [doorHandleAxm24],
    shortDescription: 'Elegant and durable door handle offering reliable performance and a premium finish.',
    description: 'The AXM-18 door handle is designed to provide smooth handling and dependable functionality. Its refined design enhances the appearance of doors while ensuring ease of use for daily operations in both residential and commercial environments.',
    features: [
      'Ergonomic handle design',
      'Durable metal construction',
      'Smooth surface finish',
      'Long service life',
      'Manufactured using high-grade metal',
      'Designed for smooth grip and balance',
      'Corrosion-resistant coating',
      'Compatible with standard lock systems'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-18',
      'Material': 'Metal',
      'Finish': 'Standard / Decorative',
      'Application': 'Wooden & Metal Doors',
      'Installation Type': 'Screw mounted'
    }
  },
  // 4. Door Handle AXM-24
  {
    id: 'dha-004',
    name: 'Door Handle AXM-24',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm01,
    gallery: [doorHandleAxm01],
    shortDescription: 'Premium door handle built for durability, comfort, and modern interior styling.',
    description: 'Door Handle AXM-24 delivers both strength and elegance. Designed for frequent use, it ensures smooth door operation while maintaining its finish and performance over time.',
    features: [
      'Solid metal body',
      'Comfortable grip',
      'Smooth and quiet operation',
      'Stylish appearance',
      'Heavy-duty metal construction',
      'Designed for long-term usage',
      'Resistant to corrosion and scratches',
      'Simple installation process'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-24',
      'Material': 'Metal',
      'Finish': 'As per stock',
      'Suitable Doors': 'Wooden / Metal'
    }
  },
  // 5. Door Handle AXM-02
  {
    id: 'dha-005',
    name: 'Door Handle AXM-02',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm18,
    gallery: [doorHandleAxm18],
    shortDescription: 'Classic design door handle suitable for various interior and exterior door applications.',
    description: 'AXM-02 door handle combines practicality with durability. It is designed to withstand regular use while maintaining a neat and professional look suitable for homes and offices.',
    features: [
      'Strong and reliable construction',
      'Comfortable grip design',
      'Smooth movement',
      'Low maintenance',
      'High-strength metal body',
      'Smooth operation with minimal friction',
      'Long-lasting surface finish',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-02',
      'Material': 'Metal',
      'Finish': 'Multiple options',
      'Installation': 'Standard fitting'
    }
  },
  // 6. Door Handle AXM-17
  {
    id: 'dha-006',
    name: 'Door Handle AXM-17',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm17,
    gallery: [doorHandleAxm17],
    shortDescription: 'Durable door handle designed for smooth handling and long-lasting performance.',
    description: 'The AXM-17 door handle is crafted for daily use in residential and commercial spaces. Its solid structure and smooth operation ensure reliable performance over time.',
    features: [
      'Heavy-duty metal construction',
      'Ergonomic shape',
      'Corrosion-resistant finish',
      'Easy installation',
      'Made from premium-quality metal',
      'Designed for easy grip and comfort',
      'Resistant to rust and surface damage',
      'Suitable for frequent use'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-17',
      'Material': 'Metal',
      'Finish': 'As available',
      'Door Compatibility': 'Wooden / Metal'
    }
  },
  // 7. Door Handle AXM-23 GP
  {
    id: 'dha-007',
    name: 'Door Handle AXM-23 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm23Gp,
    gallery: [doorHandleAxm23Gp],
    shortDescription: 'Gold-plated door handle offering a luxurious appearance with dependable strength.',
    description: 'AXM-23 GP door handle adds a touch of luxury to any door. The gold-plated finish enhances aesthetics while the solid construction ensures durability and smooth performance.',
    features: [
      'Premium gold-plated finish',
      'Strong metal body',
      'Elegant design',
      'Smooth handling',
      'High-quality gold-plated surface',
      'Durable internal structure',
      'Fade and corrosion resistance',
      'Ideal for premium interiors'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-23 GP',
      'Material': 'Metal',
      'Finish': 'Gold Plated',
      'Application': 'Residential / Commercial'
    }
  },
  // 8. Door Handle AXM-19 CP
  {
    id: 'dha-008',
    name: 'Door Handle AXM-19 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm19Cp,
    gallery: [doorHandleAxm19Cp],
    shortDescription: 'Chrome-plated door handle designed for modern interiors and reliable daily use.',
    description: 'The AXM-19 CP door handle features a sleek chrome finish that enhances modern interiors. Built for durability, it offers smooth operation and a refined look.',
    features: [
      'Chrome-plated finish',
      'Smooth and shiny surface',
      'Durable construction',
      'Easy grip',
      'High-quality chrome plating',
      'Resistant to corrosion and fading',
      'Smooth rotation mechanism',
      'Long service life'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-19 CP',
      'Material': 'Metal',
      'Finish': 'Chrome Plated',
      'Door Type': 'Wooden / Metal'
    }
  },
  // 9. Door Handle AXM-20 CP
  {
    id: 'dha-009',
    name: 'Door Handle AXM-20 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm20Cp,
    gallery: [doorHandleAxm20Cp],
    shortDescription: 'Stylish chrome-plated door handle with durable construction and smooth performance.',
    description: 'AXM-20 CP door handle is designed to deliver both style and reliability. Its chrome-plated surface provides a clean and contemporary look suitable for modern spaces.',
    features: [
      'Premium chrome finish',
      'Solid metal build',
      'Comfortable handling',
      'Modern appearance',
      'Strong metal core',
      'Smooth and noise-free operation',
      'Corrosion-resistant coating',
      'Easy installation'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-20 CP',
      'Material': 'Metal',
      'Finish': 'Chrome Plated'
    }
  },
  // 10. Door Handle AXM-22 CP
  {
    id: 'dha-010',
    name: 'Door Handle AXM-22 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm22Cp,
    gallery: [doorHandleAxm22Cp],
    shortDescription: 'Durable chrome-plated door handle ideal for residential and commercial use.',
    description: 'Door Handle AXM-22 CP is built for reliability and aesthetic appeal. Its smooth chrome finish adds elegance while ensuring consistent performance.',
    features: [
      'Smooth chrome finish',
      'Robust construction',
      'Comfortable grip',
      'Long-lasting performance',
      'High-grade metal body',
      'Scratch and corrosion resistance',
      'Designed for frequent usage',
      'Simple fitting'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-22 CP',
      'Material': 'Metal',
      'Finish': 'Chrome Plated'
    }
  },
  // 11. Door Handle AXM-23 CP
  {
    id: 'dha-011',
    name: 'Door Handle AXM-23 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm23Cp,
    shortDescription: 'Premium chrome-plated door handle offering durability, comfort, and modern style.',
    description: 'AXM-23 CP door handle delivers dependable performance with a polished appearance. It is suitable for both residential and commercial installations.',
    features: [
      'Polished chrome surface',
      'Strong metal construction',
      'Smooth operation',
      'Elegant design',
      'Durable chrome plating',
      'Resistant to wear and corrosion',
      'Ergonomic grip design',
      'Long operational life'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-23 CP',
      'Material': 'Metal',
      'Finish': 'Chrome Plated'
    }
  },
  // 12. Door Handle AXM-HD 02 GP
  {
    id: 'dha-012',
    name: 'Door Handle AXM-HD 02 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd02Gp,
    shortDescription: 'Heavy-duty gold-plated door handle designed for premium and high-traffic applications.',
    description: 'Door Handle AXM-HD 02 GP is engineered for strength and elegance. Its heavy-duty build makes it suitable for high-usage areas, while the gold-plated finish adds a luxurious touch.',
    features: [
      'Heavy-duty metal construction',
      'Gold plated luxury finish',
      'Strong grip and smooth handling',
      'Long-lasting durability',
      'Thick metal body for enhanced durability',
      'Premium gold plating',
      'Smooth mechanical performance',
      'Suitable for commercial and luxury interiors'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 02 GP',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Gold Plated (GP)',
      'Usage Area': 'Residential / Commercial',
      'Door Type': 'Wooden / Metal'
    }
  },
  // 13. Door Handle Slim
  {
    id: 'dha-013',
    name: 'Door Handle Slim',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleSlim,
    shortDescription: 'Slim-profile door handle designed for modern interiors with minimalistic styling.',
    description: 'The Door Handle Slim model is ideal for contemporary spaces where clean lines and minimal design are preferred. Despite its slim profile, it offers excellent strength and smooth operation.',
    features: [
      'Sleek and slim design',
      'Strong metal construction',
      'Smooth grip',
      'Modern appearance',
      'Minimalist slim structure',
      'Durable metal build',
      'Comfortable handling',
      'Easy installation and maintenance'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'Slim',
      'Material': 'Metal',
      'Finish': 'As available',
      'Application': 'Interior Doors',
      'Installation': 'Standard Fixing'
    }
  },
  // 14. Door Handle AXM-HD 03 GP
  {
    id: 'dha-014',
    name: 'Door Handle AXM-HD 03 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd03Gp,
    shortDescription: 'Heavy-duty gold-plated door handle designed for premium doors and high-usage environments.',
    description: 'The AXM-HD 03 GP door handle is built for strength, durability, and luxury. Its heavy-duty metal body ensures reliable performance, while the gold-plated finish adds an elegant touch to high-end residential and commercial interiors.',
    features: [
      'Heavy-duty metal construction',
      'Premium gold-plated finish',
      'Smooth and firm grip',
      'Long service life',
      'Thick metal structure for enhanced strength',
      'Gold plating for corrosion resistance',
      'Smooth handling even with frequent use',
      'Ideal for luxury and commercial doors'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 03 GP',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Gold Plated (GP)',
      'Door Type': 'Wooden / Metal',
      'Usage': 'Residential & Commercial'
    }
  },
  // 15. Door Handle AXM-HD 01 GP
  {
    id: 'dha-015',
    name: 'Door Handle AXM-HD 01 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd01Gp,
    shortDescription: 'Premium heavy-duty door handle with gold plating for durability and elegant appearance.',
    description: 'Door Handle AXM-HD 01 GP offers superior strength and premium aesthetics. Designed for demanding environments, it combines long-lasting performance with a luxurious gold finish.',
    features: [
      'Solid heavy-duty construction',
      'Gold-plated surface finish',
      'Comfortable ergonomic grip',
      'Resistant to wear and corrosion',
      'Manufactured from high-grade metal',
      'Smooth operation with firm grip',
      'Scratch and corrosion resistant',
      'Suitable for heavy-use doors'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 01 GP',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Gold Plated',
      'Application': 'Interior & Exterior Doors',
      'Installation': 'Screw Fixing'
    }
  },
  // 16. Door Handle AXM-HD 01 AC
  {
    id: 'dha-016',
    name: 'Door Handle AXM-HD 01 AC',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd01Ac,
    shortDescription: 'Antique copper finished heavy-duty door handle designed for classic and premium interiors.',
    description: 'The AXM-HD 01 AC door handle brings a classic appeal with its antique copper finish. Its strong construction ensures durability while complementing traditional and premium interior designs.',
    features: [
      'Heavy-duty metal build',
      'Antique copper finish',
      'Smooth handling',
      'Elegant traditional look',
      'High-strength metal body',
      'Antique copper coating for vintage style',
      'Smooth mechanical operation',
      'Long-lasting surface protection'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 01 AC',
      'Material': 'Metal',
      'Finish': 'Antique Copper (AC)',
      'Door Type': 'Wooden / Metal',
      'Usage Area': 'Residential & Commercial'
    }
  },
  // 17. Door Handle AXM-HD 03 AC
  {
    id: 'dha-017',
    name: 'Door Handle AXM-HD 03 AC',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd03Ac,
    shortDescription: 'Heavy-duty antique copper door handle offering strength and timeless design.',
    description: 'Door Handle AXM-HD 03 AC is designed for durability and visual appeal. Its antique copper finish adds a traditional touch while ensuring reliable daily performance.',
    features: [
      'Strong metal construction',
      'Antique copper finish',
      'Comfortable grip',
      'Suitable for high-traffic doors',
      'Durable heavy-duty metal body',
      'Resistant to corrosion and surface wear',
      'Smooth rotation mechanism',
      'Easy installation'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 03 AC',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Antique Copper',
      'Application': 'Wooden / Metal Doors',
      'Installation Type': 'Screw Fixing'
    }
  },
  // 18. Door Handle AXM-HD 02 AC
  {
    id: 'dha-018',
    name: 'Door Handle AXM-HD 02 AC',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd02Ac,
    shortDescription: 'Premium heavy-duty door handle with antique copper finish for long-lasting performance.',
    description: 'The AXM-HD 02 AC door handle is built for strength and elegance. Its antique copper finish enhances door aesthetics while the robust construction ensures extended service life.',
    features: [
      'Heavy-duty metal structure',
      'Antique copper surface finish',
      'Smooth and firm grip',
      'Durable and reliable',
      'High-grade metal construction',
      'Antique copper coating for classic look',
      'Smooth handling even with frequent use',
      'Low maintenance'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 02 AC',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Antique Copper (AC)',
      'Usage': 'Residential & Commercial',
      'Door Compatibility': 'Wooden / Metal'
    }
  },
  // 19. Door Handle AXM-AC-06
  {
    id: 'dha-019',
    name: 'Door Handle AXM-AC-06',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmAc06,
    shortDescription: 'Modern antique-finish door handle designed for durability and elegant interior styling.',
    description: 'Door Handle AXM-AC-06 is crafted to deliver reliable functionality with a refined antique look. Suitable for residential and commercial interiors, it enhances door aesthetics while ensuring smooth daily use.',
    features: [
      'Strong metal construction',
      'Antique-finish surface',
      'Smooth grip and operation',
      'Long-lasting performance',
      'High-quality metal body',
      'Antique coating for classic appearance',
      'Smooth rotational movement',
      'Resistant to corrosion and wear'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-AC-06',
      'Material': 'Metal',
      'Finish': 'Antique (AC)',
      'Door Type': 'Wooden / Metal',
      'Installation': 'Screw Fixing'
    }
  },
  // 20. Door Handle AXM-AC-03
  {
    id: 'dha-020',
    name: 'Door Handle AXM-AC-03',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmAc03,
    shortDescription: 'Durable antique-finish door handle offering strength and stylish appearance.',
    description: 'The AXM-AC-03 door handle blends durability with timeless design. Its sturdy construction and smooth handling make it suitable for daily use in both homes and commercial spaces.',
    features: [
      'Solid metal build',
      'Antique finish',
      'Comfortable hand grip',
      'Easy installation',
      'Premium-grade metal construction',
      'Smooth operational mechanism',
      'Corrosion-resistant surface',
      'Minimal maintenance'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-AC-03',
      'Material': 'Metal',
      'Finish': 'Antique',
      'Application': 'Interior & Exterior Doors',
      'Mounting': 'Screw Mounted'
    }
  },
  // 21. Door Handle AXM-AC-01
  {
    id: 'dha-021',
    name: 'Door Handle AXM-AC-01',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmAc01,
    shortDescription: 'Classic antique-style door handle designed for reliable performance and visual appeal.',
    description: 'Door Handle AXM-AC-01 is designed to suit traditional and modern interiors alike. Its solid build and elegant finish ensure dependable performance with a refined appearance.',
    features: [
      'Strong metal structure',
      'Antique-finish coating',
      'Smooth grip',
      'Long service life',
      'Durable metal body',
      'Smooth turning action',
      'Resistant to rust and scratches',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-AC-01',
      'Material': 'Metal',
      'Finish': 'Antique (AC)',
      'Usage': 'Residential & Commercial',
      'Door Compatibility': 'Wooden / Metal'
    }
  },
  // 22. Door Handle AXM-AC-08
  {
    id: 'dha-022',
    name: 'Door Handle AXM-AC-08',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmAc08,
    shortDescription: 'Premium antique-finish door handle offering durability and smooth operation.',
    description: 'The AXM-AC-08 door handle is engineered for strength and style. Its antique finish enhances door appearance while the sturdy metal body ensures long-term reliability.',
    features: [
      'Heavy-quality metal construction',
      'Antique surface finish',
      'Ergonomic design',
      'Reliable daily performance',
      'High-strength metal material',
      'Smooth grip and handling',
      'Corrosion and wear resistant',
      'Suitable for frequent use'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-AC-08',
      'Material': 'Metal',
      'Finish': 'Antique',
      'Door Type': 'Wooden / Metal',
      'Installation Type': 'Screw Fixing'
    }
  },
  // 23. Door Handle AXM-HD 05 AC
  {
    id: 'dha-023',
    name: 'Door Handle AXM-HD 05 AC',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmHd05Ac,
    shortDescription: 'Heavy-duty antique-finish door handle designed for strength and premium interiors.',
    description: 'Door Handle AXM-HD 05 AC is built for high-performance applications where durability and classic appearance are required. Its heavy-duty construction ensures long service life even in high-traffic areas.',
    features: [
      'Heavy-duty metal body',
      'Antique copper finish',
      'Smooth and firm grip',
      'High durability',
      'Thick metal structure for added strength',
      'Antique finish for premium look',
      'Smooth operational mechanism',
      'Low maintenance design'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-HD 05 AC',
      'Material': 'Heavy-Duty Metal',
      'Finish': 'Antique Copper',
      'Usage Area': 'Residential & Commercial',
      'Door Compatibility': 'Wooden / Metal'
    }
  },
  // 24. Door Handle AXM-L751
  {
    id: 'dha-024',
    name: 'Door Handle AXM-L751',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmL751,
    shortDescription: 'Stylish and durable door handle designed for modern and commercial interiors.',
    description: 'The AXM-L751 door handle is designed for modern spaces that require both aesthetics and durability. Its refined design and reliable performance make it suitable for homes, offices, and commercial buildings.',
    features: [
      'Solid metal construction',
      'Sleek contemporary design',
      'Comfortable grip',
      'Long-lasting finish',
      'Precision-engineered metal body',
      'Smooth handling experience',
      'Resistant to corrosion',
      'Easy installation'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-L751',
      'Material': 'Metal',
      'Finish': 'Mat Black',
      'Application': 'Interior & Exterior Doors',
      'Installation': 'Screw Fixing'
    }
  },
  // 25. Door Handle AXM-L595
  {
    id: 'dha-025',
    name: 'Door Handle AXM-L595',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxmL595,
    shortDescription: 'Durable and elegant door handle offering reliable performance for everyday use.',
    description: 'Door Handle AXM-L595 is crafted for durability and smooth functionality. Its balanced design ensures ease of use while complementing modern and classic door styles.',
    features: [
      'High-quality metal build',
      'Smooth grip design',
      'Premium surface finish',
      'Easy maintenance',
      'Strong metal structure',
      'Smooth rotation and grip',
      'Corrosion-resistant finish',
      'Suitable for residential and commercial use'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Model': 'AXM-L595',
      'Material': 'Metal',
      'Finish': 'Mat Black',
      'Door Type': 'Wooden / Metal',
      'Usage': 'Residential & Commercial'
    }
  },
  // 26. Door Handle Full Set AXM-02 GP
  {
    id: 'dha-026',
    name: 'Door Handle Full Set AXM-02 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleFullsetAxm02Gp,
    shortDescription: 'Complete gold-plated door handle set designed for premium doors with smooth locking and elegant finish.',
    description: 'The AXM-02 GP Full Set includes a complete door handle and locking system, offering both functionality and luxury. Designed for easy installation and long-term use, it enhances the appearance of residential and commercial doors.',
    features: [
      'Complete handle and lock set',
      'Gold-plated premium finish',
      'Strong metal construction',
      'Smooth locking operation',
      'High-quality metal components',
      'Smooth handle movement and locking',
      'Corrosion-resistant gold plating',
      'Ideal for premium interiors'
    ],
    specifications: {
      'Product Type': 'Door Handle Full Set',
      'Model': 'AXM-02 GP',
      'Material': 'Metal',
      'Finish': 'Gold Plated (GP)',
      'Application': 'Wooden / Metal Doors',
      'Installation': 'Standard Fixing'
    }
  },
  // 27. Door Handle Full Set AXM-01 GP
  {
    id: 'dha-027',
    name: 'Door Handle Full Set AXM-01 GP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleFullsetAxm01Gp,
    shortDescription: 'Premium full door handle set with gold plating for durability and elegant appearance.',
    description: 'The AXM-01 GP Full Set offers a reliable and stylish door hardware solution. Its gold-plated finish adds a luxurious touch while ensuring smooth operation and durability.',
    features: [
      'Complete handle and lock system',
      'Gold-plated surface finish',
      'Strong and reliable construction',
      'Easy installation',
      'High-grade metal construction',
      'Smooth locking and handling',
      'Long-lasting finish',
      'Suitable for residential and commercial use'
    ],
    specifications: {
      'Product Type': 'Door Handle Full Set',
      'Model': 'AXM-01 GP',
      'Material': 'Metal',
      'Finish': 'Gold Plated',
      'Door Type': 'Wooden / Metal',
      'Usage': 'Residential & Commercial'
    }
  },
  // 28. Door Handle Full Set AXM-02 CP
  {
    id: 'dha-028',
    name: 'Door Handle Full Set AXM-02 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleFullsetAxm02Cp,
    shortDescription: 'Chrome-plated full door handle set designed for modern and professional door installations.',
    description: 'The AXM-02 CP Full Set provides a complete door hardware solution with a modern chrome finish. Designed for performance and durability, it is ideal for residential and commercial doors.',
    features: [
      'Complete handle and lock set',
      'Chrome plated finish',
      'Durable metal body',
      'Smooth operation',
      'Premium metal construction',
      'Smooth and reliable locking mechanism',
      'Corrosion-resistant chrome coating',
      'Easy maintenance'
    ],
    specifications: {
      'Product Type': 'Door Handle Full Set',
      'Model': 'AXM-02 CP',
      'Material': 'Metal',
      'Finish': 'Chrome Plated',
      'Application': 'Interior & Exterior Doors',
      'Installation': 'Screw Fixing'
    }
  },
  // 29. Door Handle Full Set AXM-01 CP
  {
    id: 'dha-029',
    name: 'Door Handle Full Set AXM-01 CP',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleFullsetAxm01Cp,
    shortDescription: 'Complete chrome-finished door handle set offering strength, style, and smooth functionality.',
    description: 'Door Handle Full Set AXM-01 CP is designed for consistent performance and modern aesthetics. Its sturdy build ensures durability while the chrome finish enhances door appearance.',
    features: [
      'Full handle and lock assembly',
      'Chrome-plated surface',
      'Strong metal construction',
      'Long service life',
      'High-strength metal components',
      'Smooth locking and unlocking',
      'Resistant to corrosion',
      'Suitable for daily use'
    ],
    specifications: {
      'Product Type': 'Door Handle Full Set',
      'Model': 'AXM-01 CP',
      'Material': 'Metal',
      'Finish': 'CP',
      'Door Compatibility': 'Wooden / Metal',
      'Usage Area': 'Residential & Commercial'
    }
  },
  // 30. Small Iron Door Handle – Lock Set
  {
    id: 'dha-030',
    name: 'Small Iron Door Handle – Lock Set',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleLockSetSmall,
    shortDescription: 'Compact iron door handle lock set designed for strength and basic security needs.',
    description: 'The Small Iron Door Handle Lock Set is ideal for utility doors and simple door applications. Its robust iron build ensures durability and reliable locking performance.',
    features: [
      'Strong iron construction',
      'Compact and functional design',
      'Durable locking mechanism',
      'Easy installation',
      'Solid iron material',
      'Smooth locking operation',
      'Resistant to impact',
      'Low maintenance'
    ],
    specifications: {
      'Product Type': 'Door Handle Lock Set',
      'Material': 'Iron',
      'Finish': 'As available',
      'Application': 'Utility & Interior Doors',
      'Installation': 'Screw Mounted'
    }
  },
  // 31. Rozet AXM-01
  {
    id: 'dha-031',
    name: 'Rozet AXM-01',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetAxm01,
    shortDescription: 'Durable metal rozet designed to provide a clean and professional finish around door handles.',
    description: 'Rozet AXM-01 is designed to neatly cover handle mounting points, improving both appearance and protection. It ensures a refined look while supporting long-term durability in residential and commercial door installations.',
    features: [
      'Strong metal construction',
      'Smooth surface finish',
      'Enhances door aesthetics',
      'Easy installation',
      'Compatible with standard door handles',
      'Corrosion-resistant finish'
    ],
    specifications: {
      'Product Type': 'Door Rozet',
      'Model': 'AXM-01',
      'Material': 'Metal',
      'Finish': 'As available',
      'Application': 'Door Handles',
      'Installation': 'Screw Fixing'
    }
  },
  // 32. Rozet AXM-02
  {
    id: 'dha-032',
    name: 'Rozet AXM-02',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetAxm02,
    shortDescription: 'High-quality metal rozet for secure and decorative door handle installation.',
    description: 'Rozet AXM-02 provides structural support and visual enhancement to door handles. Designed for compatibility with standard handle systems, it delivers both strength and a polished appearance.',
    features: [
      'Durable metal body',
      'Corrosion-resistant finish',
      'Clean and modern design',
      'Long service life',
      'Universal compatibility'
    ],
    specifications: {
      'Product Type': 'Rozet',
      'Model': 'AXM-02',
      'Material': 'Metal',
      'Finish': 'CP / GP / AC (as available)',
      'Usage': 'Residential & Commercial'
    }
  },
  // 33. Rozet AXM-03
  {
    id: 'dha-033',
    name: 'Rozet AXM-03',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetAxm03,
    shortDescription: 'Premium metal rozet designed for smooth integration with door hardware.',
    description: 'Rozet AXM-03 is engineered to ensure precise fitting and enhanced door hardware appearance. It protects mounting areas while adding a professional finishing touch.',
    features: [
      'Solid metal construction',
      'Smooth edges and finish',
      'Improves handle alignment',
      'Easy to maintain',
      'Compatible with wooden and metal doors'
    ],
    specifications: {
      'Product Type': 'Door Rozet',
      'Model': 'AXM-03',
      'Material': 'Metal',
      'Finish': 'As available',
      'Application': 'Wooden / Metal Doors'
    }
  },
  // 34. Rozet AXM-40
  {
    id: 'dha-034',
    name: 'Rozet AXM-40',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetAxm40,
    shortDescription: 'Heavy-quality metal rozet suitable for modern and commercial door fittings.',
    description: 'Rozet AXM-40 is designed for demanding environments where strength and appearance are equally important. Ideal for offices and commercial installations.',
    features: [
      'Thick metal build',
      'Premium surface finish',
      'High durability',
      'Suitable for frequent use',
      'Professional appearance'
    ],
    specifications: {
      'Product Type': 'Rozet',
      'Model': 'AXM-40',
      'Material': 'Metal',
      'Usage': 'Commercial & Residential',
      'Installation': 'Screw Mounted'
    }
  },
  // 35. Rozet R-26
  {
    id: 'dha-035',
    name: 'Rozet R-26',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetR26,
    shortDescription: 'Compact and durable rozet for neat door handle finishing.',
    description: 'Rozet R-26 provides clean coverage around handle fittings, improving overall door presentation and protecting mounting points from wear.',
    features: [
      'Sturdy metal design',
      'Smooth finish',
      'Easy installation',
      'Long-lasting performance',
      'Protects mounting points'
    ],
    specifications: {
      'Product Type': 'Rozet',
      'Model': 'R-26',
      'Material': 'Metal',
      'Finish': 'As available',
      'Application': 'Door Hardware'
    }
  },
  // 36. Rozet R-28
  {
    id: 'dha-036',
    name: 'Rozet R-28',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: rozetR28,
    shortDescription: 'Strong metal rozet designed for reliable door handle support.',
    description: 'Rozet R-28 ensures proper handle alignment and enhances the visual quality of door hardware installations in residential and commercial spaces.',
    features: [
      'Durable metal body',
      'Professional finish',
      'Corrosion resistant',
      'Simple fitting',
      'Universal compatibility'
    ],
    specifications: {
      'Product Type': 'Rozet',
      'Model': 'R-28',
      'Material': 'Metal',
      'Usage': 'Residential & Commercial'
    }
  },
  // 37. Cupboard Cabinet "H" Handle (Hollow / Solid)
  {
    id: 'dha-037',
    name: 'Cupboard Cabinet "H" Handle (Hollow / Solid)',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: cabinetHHandle,
    shortDescription: 'Stylish cabinet handle designed for cupboards and drawers, available in hollow and solid options.',
    description: 'This H-type cabinet handle is suitable for kitchens, wardrobes, and furniture drawers. It offers comfortable handling and durable performance with a clean design.',
    features: [
      'Metal construction',
      'Hollow and solid variants',
      'Smooth grip',
      'Modern appearance',
      'Available in multiple colors'
    ],
    specifications: {
      'Product Type': 'Cabinet Handle',
      'Design': 'H-Type',
      'Material': 'Metal',
      'Variant': 'Hollow / Solid',
      'Application': 'Cupboards & Drawers'
    }
  },
  // 38. Designer Cabinet Handle
  {
    id: 'dha-038',
    name: 'Designer Cabinet Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: designerCabinetHandle,
    shortDescription: 'Premium cabinet handle designed to enhance modern furniture aesthetics.',
    description: 'Designer Cabinet Handle adds elegance and functionality to furniture. Ideal for modular kitchens, wardrobes, and premium cabinetry.',
    features: [
      'Stylish designer look',
      'Solid metal build',
      'Smooth edges',
      'Durable finish',
      'Multiple design options'
    ],
    specifications: {
      'Product Type': 'Cabinet Handle',
      'Material': 'Metal',
      'Finish': 'As available',
      'Application': 'Furniture & Cabinets'
    }
  },
  // 39. Solid Metal Cabinet Handle (C & D Type)
  {
    id: 'dha-039',
    name: 'Solid Metal Cabinet Handle (C & D Type)',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorPullHandle,
    shortDescription: 'Heavy-quality cabinet handle available in C and D design profiles.',
    description: 'This solid metal cabinet handle is designed for strength and style, making it suitable for high-use furniture applications.',
    features: [
      'Solid metal construction',
      'Strong grip',
      'C & D shape options',
      'Long-lasting durability',
      'Professional finish'
    ],
    specifications: {
      'Product Type': 'Cabinet Handle',
      'Design': 'C Type / D Type',
      'Material': 'Solid Metal',
      'Usage': 'Cabinets & Drawers'
    }
  },
  // 40. Aluminium D Section Handle (White / Silver / Brown)
  {
    id: 'dha-040',
    name: 'Aluminium D Section Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: solidMetalCabinetHandle,
    shortDescription: 'Lightweight aluminium handle with D-section profile for doors and furniture.',
    description: 'This aluminium D-section handle offers a clean and modern look while remaining lightweight and durable. Suitable for interior doors and cabinets.',
    features: [
      'Aluminium construction',
      'D-section design',
      'Available in multiple colors',
      'Corrosion resistant',
      'Lightweight and durable'
    ],
    specifications: {
      'Product Type': 'Aluminium Handle',
      'Profile': 'D Section',
      'Material': 'Aluminium',
      'Colors': 'White / Silver / Brown'
    }
  },
  // 41. Window Handle – Double Hook Type
  {
    id: 'dha-041',
    name: 'Window Handle – Double Hook Type',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: windowHandleDoubleHook,
    shortDescription: 'Durable window handle with double hook locking mechanism.',
    description: 'The double hook window handle ensures enhanced grip and security, making it ideal for residential and commercial window systems.',
    features: [
      'Strong metal body',
      'Double hook design',
      'Smooth operation',
      'Secure locking',
      'Easy installation'
    ],
    specifications: {
      'Product Type': 'Window Handle',
      'Design': 'Double Hook',
      'Material': 'Metal',
      'Application': 'Windows'
    }
  },
  // 42. Window Handle
  {
    id: 'dha-042',
    name: 'Window Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: windowHandle,
    shortDescription: 'Standard window handle designed for smooth opening and closing.',
    description: 'This window handle provides reliable functionality for various window types, ensuring ease of use and durability.',
    features: [
      'Durable metal construction',
      'Easy grip',
      'Smooth movement',
      'Long service life',
      'Universal compatibility'
    ],
    specifications: {
      'Product Type': 'Window Handle',
      'Material': 'Metal',
      'Usage': 'Residential & Commercial'
    }
  },
  // 43. Aluminium Door Handle
  {
    id: 'dha-043',
    name: 'Aluminium Door Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: solidMetalCabinetHandle,
    shortDescription: 'Lightweight aluminium door handle suitable for modern interiors.',
    description: 'Aluminium Door Handle offers a balance of strength and light weight, making it ideal for interior doors and contemporary spaces.',
    features: [
      'Aluminium body',
      'Corrosion resistant',
      'Smooth grip',
      'Easy installation',
      'Modern design'
    ],
    specifications: {
      'Product Type': 'Door Handle',
      'Material': 'Aluminium',
      'Finish': 'As available',
      'Application': 'Interior Doors'
    }
  },
  // 44. Window Holder (6", 8")
  {
    id: 'dha-044',
    name: 'Window Holder (6", 8")',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: windowHolder,
    shortDescription: 'Metal window holder designed to secure windows in open position.',
    description: 'Window Holder is used to keep windows fixed at desired positions. Suitable for homes and commercial buildings, ensuring safety and ventilation control.',
    features: [
      'Strong metal build',
      'Stable holding mechanism',
      'Available in two sizes',
      'Easy installation',
      'Durable construction'
    ],
    specifications: {
      'Product Type': 'Window Holder',
      'Material': 'Metal',
      'Sizes': '6 inch, 8 inch',
      'Application': 'Windows'
    }
  },
  // 45. Square Plate with Handle (72×55, 85×45)
  {
    id: 'dha-045',
    name: 'Square Plate with Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: squarePlateHandle,
    shortDescription: 'Modern square plate handle set designed for durability and smooth daily operation on interior and exterior doors.',
    description: 'The Square Plate with Handle is engineered to provide both strength and style. Its minimal square design complements modern interiors while offering reliable grip and long-term performance. Ideal for residential and commercial doors.',
    features: [
      'Strong metal construction',
      'Clean square plate design',
      'Smooth handle movement',
      'Suitable for standard lock bodies',
      'Professional appearance'
    ],
    specifications: {
      'Plate Sizes': '72×55 mm, 85×45 mm',
      'Material': 'Metal',
      'Finish': 'As per availability',
      'Application': 'Wooden / Metal doors',
      'Installation': 'Screw fixing'
    }
  },
  // 46. Pull Plate with Handle
  {
    id: 'dha-046',
    name: 'Pull Plate with Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: pullPlateWithHandle,
    shortDescription: 'Heavy-duty pull plate for manual opening of doors in high-traffic areas.',
    description: 'Pull Plates are widely used in commercial and industrial environments where frequent door operation is required. Designed to protect door surfaces while offering a firm pulling grip.',
    features: [
      'Flat ergonomic surface',
      'Scratch-resistant finish',
      'Strong mounting support',
      'Easy maintenance',
      'Professional appearance'
    ],
    specifications: {
      'Product Type': 'Pull Plate with Handle',
      'Material': 'Metal',
      'Finish': 'SN / CP / GP (as available)',
      'Mounting': 'Screw fixed',
      'Usage': 'Commercial & residential'
    }
  },
  // 47. Push Plate
  {
    id: 'dha-047',
    name: 'Push Plate',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: pushPlate,
    shortDescription: 'Durable push plate designed for effortless door operation and surface protection.',
    description: 'Push Plates provide convenient door operation while protecting doors from wear. Suitable for offices, hospitals, and public buildings.',
    features: [
      'Wide push area',
      'Long-lasting metal body',
      'Corrosion-resistant',
      'Simple installation',
      'Professional finish'
    ],
    specifications: {
      'Product Type': 'Push Plate',
      'Material': 'Metal',
      'Finish': 'Standard finishes available',
      'Application': 'Push doors',
      'Installation': 'Screw fixing'
    }
  },
  // 48. Round Knob Lock Set (SN / CP / GP)
  {
    id: 'dha-048',
    name: 'Round Knob Lock Set',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: roundKnobLockSet,
    shortDescription: 'Complete round knob lock set offering security and smooth locking action.',
    description: 'This Round Knob Lock Set combines locking functionality with classic styling. Ideal for bedroom, office, and interior doors.',
    features: [
      'Integrated locking system',
      'Comfortable round grip',
      'Durable internal mechanism',
      'Elegant metallic finish',
      'Easy installation'
    ],
    specifications: {
      'Type': 'Knob Lock Set',
      'Finishes': 'Satin Nickel, Chrome, Gold',
      'Door Type': 'Wooden doors',
      'Installation': 'Standard bore fitting'
    }
  },
  // 49. Round Knob (SN / CP / GP / Black)
  {
    id: 'dha-049',
    name: 'Round Knob',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: roundKnob,
    shortDescription: 'Stylish standalone round knob for doors and cabinets.',
    description: 'Designed for versatility, this round knob fits both modern and classic interiors. Suitable for light-duty door and cabinet applications.',
    features: [
      'Smooth rounded design',
      'Multiple color options',
      'Easy grip',
      'Rust-resistant coating',
      'Universal compatibility'
    ],
    specifications: {
      'Product Type': 'Door Knob',
      'Material': 'Metal',
      'Colors': 'SN / CP / GP / Black',
      'Installation': 'Screw fixing'
    }
  },
  // 50. Magnetic Catcher Push – Single (White & Black)
  {
    id: 'dha-050',
    name: 'Magnetic Catcher Push – Single',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: magneticCatcherPushSingle,
    shortDescription: 'Single push-type magnetic catcher for handle-less cabinet doors.',
    description: 'This push magnetic catcher allows doors to open with a simple press, creating a clean and modern cabinet appearance.',
    features: [
      'Push-to-open function',
      'Strong magnetic hold',
      'Smooth spring action',
      'Easy alignment',
      'Quiet operation'
    ],
    specifications: {
      'Type': 'Single Push',
      'Colors': 'White, Black',
      'Material': 'Plastic & Magnet',
      'Application': 'Cabinets / wardrobes'
    }
  },
  // 51. Magnetic Catcher Push – Double (White & Black)
  {
    id: 'dha-051',
    name: 'Magnetic Catcher Push – Double',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: magneticCatcherPushDouble,
    shortDescription: 'Double push magnetic catcher for stronger door holding capacity.',
    description: 'Designed for wider or heavier cabinet doors, the double push magnetic catcher ensures firm closure with smooth opening.',
    features: [
      'Dual magnet strength',
      'Push-to-open mechanism',
      'Stable door alignment',
      'Durable body',
      'Easy installation'
    ],
    specifications: {
      'Type': 'Double Push',
      'Colors': 'White, Black',
      'Usage': 'Heavy cabinet doors'
    }
  },
  // 52. Butterfly Push Magnetic Catcher (Single / Double)
  {
    id: 'dha-052',
    name: 'Butterfly Push Magnetic Catcher',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: butterflyPushMagneticCatcher,
    shortDescription: 'Butterfly-style magnetic catcher offering enhanced holding power.',
    description: 'This catcher provides superior stability and is ideal for frequently used cabinets and storage units.',
    features: [
      'Butterfly wing design',
      'Available in single & double',
      'Strong magnet grip',
      'Long service life',
      'Easy installation'
    ],
    specifications: {
      'Type': 'Single / Double',
      'Mounting': 'Screw fixing',
      'Application': 'Furniture doors'
    }
  },
  // 53. Magnetic Catcher (Small / Big)
  {
    id: 'dha-053',
    name: 'Magnetic Catcher',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: magneticCatcher,
    shortDescription: 'Standard magnetic door catcher for secure cabinet closure.',
    description: 'A practical solution for keeping cabinet doors securely closed in residential and commercial furniture.',
    features: [
      'Reliable magnetic hold',
      'Compact size options',
      'Easy installation',
      'Low maintenance',
      'Durable construction'
    ],
    specifications: {
      'Sizes': 'Small / Big',
      'Material': 'Plastic & Magnet',
      'Application': 'Cabinets'
    }
  },
  // 54. PVC Push to Open Catcher
  {
    id: 'dha-054',
    name: 'PVC Push to Open Catcher',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: pvcPushToOpenCatcher,
    shortDescription: 'PVC push-to-open catcher for modern furniture systems.',
    description: 'Ideal for modular furniture, this catcher eliminates the need for handles and supports clean design aesthetics.',
    features: [
      'Lightweight PVC body',
      'Smooth push action',
      'Noise-free operation',
      'Cost-effective solution',
      'Easy installation'
    ],
    specifications: {
      'Material': 'PVC',
      'Function': 'Push to open',
      'Application': 'Cabinet doors'
    }
  },
  // 55. Crystal Knob
  {
    id: 'dha-055',
    name: 'Crystal Knob',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: crystalKnob,
    shortDescription: 'Decorative crystal knob adding elegance to furniture and cabinets.',
    description: 'Perfect for luxury furniture, crystal knobs enhance visual appeal while offering functional usability.',
    features: [
      'Clear crystal finish',
      'Elegant appearance',
      'Smooth grip',
      'Easy mounting',
      'Premium look'
    ],
    specifications: {
      'Material': 'Crystal + Metal base',
      'Usage': 'Cabinets / drawers'
    }
  },
  // 56. Plastic Knob
  {
    id: 'dha-056',
    name: 'Plastic Knob',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: plasticKnob,
    shortDescription: 'Lightweight and economical plastic knob for general use.',
    description: 'Plastic knobs are ideal for budget furniture and utility cabinets.',
    features: [
      'Durable plastic body',
      'Easy installation',
      'Multiple design options',
      'Cost-effective',
      'Lightweight'
    ],
    specifications: {
      'Material': 'Plastic',
      'Application': 'Cabinets / drawers'
    }
  },
  // 57. Chrome Gold Plated Knob
  {
    id: 'dha-057',
    name: 'Chrome Gold Plated Knob',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: chromeGoldPlatedKnob,
    shortDescription: 'Premium plated knob with chrome-gold finish.',
    description: 'Designed for luxury interiors, this knob offers durability with a high-end look.',
    features: [
      'Glossy premium finish',
      'Corrosion resistant',
      'Strong metal core',
      'Elegant design',
      'Long-lasting shine'
    ],
    specifications: {
      'Finish': 'Chrome Gold',
      'Material': 'Metal',
      'Installation': 'Screw fixing'
    }
  },
  // 58. Door Closer
  {
    id: 'dha-058',
    name: 'Door Closer',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorCloser,
    shortDescription: 'Automatic hydraulic door closer for controlled door closing.',
    description: 'Door closers improve safety and durability of doors in commercial and residential spaces.',
    features: [
      'Smooth closing action',
      'Reduces door slamming',
      'Adjustable speed',
      'Heavy-duty mechanism',
      'Long service life'
    ],
    specifications: {
      'Type': 'Hydraulic',
      'Installation': 'Surface mounted',
      'Application': 'Wooden / metal doors'
    }
  },
  // 59. Stud S.S. Door Stopper
  {
    id: 'dha-059',
    name: 'Stud S.S. Door Stopper',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: studSsDoorStopper,
    shortDescription: 'Stainless steel stud stopper to prevent wall and door damage.',
    description: 'A solid stainless steel door stopper that provides reliable stopping power and rust-proof performance.',
    features: [
      'Solid stainless steel',
      'Strong impact resistance',
      'Floor mounted',
      'Rust proof',
      'Durable construction'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Mounting': 'Floor'
    }
  },
  // 60. Round Rubber Door Stopper
  {
    id: 'dha-060',
    name: 'Round Rubber Door Stopper',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: roundRubberDoorStopper,
    shortDescription: 'Rubber stopper designed to absorb door impact silently.',
    description: 'Provides quiet door stopping with shock-absorbing rubber construction.',
    features: [
      'Shock absorbing rubber',
      'Anti-slip base',
      'Quiet operation',
      'Durable material',
      'Easy installation'
    ],
    specifications: {
      'Material': 'Rubber',
      'Mounting': 'Floor'
    }
  },
  // 61. Mountain Door Stopper
  {
    id: 'dha-061',
    name: 'Mountain Door Stopper',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: mountainDoorStopper,
    shortDescription: 'Stylish mountain-style stopper with strong holding capacity.',
    description: 'Features a unique mountain shape design with strong base for effective door stopping.',
    features: [
      'Unique shape',
      'Strong base',
      'Decorative design',
      'Durable construction',
      'Modern look'
    ],
    specifications: {
      'Material': 'Metal',
      'Finish': 'As available'
    }
  },
  // 62. Falling Door Stopper (SN / CP / AC)
  {
    id: 'dha-062',
    name: 'Falling Door Stopper',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: fallingDoorStopper,
    shortDescription: 'Spring-loaded falling stopper for controlled door stopping.',
    description: 'Features a retractable mechanism for smooth door stopping operation.',
    features: [
      'Retractable mechanism',
      'Durable construction',
      'Smooth operation',
      'Multiple finish options',
      'Easy to use'
    ],
    specifications: {
      'Finishes': 'SN / CP / AC',
      'Mounting': 'Door bottom'
    }
  },
  // 63. Half Round Door Stopper
  {
    id: 'dha-063',
    name: 'Half Round Door Stopper',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: halfRoundDoorStopper,
    shortDescription: 'Compact half-round stopper for minimalistic interiors.',
    description: 'Space-saving design with strong metal body for effective door stopping.',
    features: [
      'Space-saving design',
      'Strong metal body',
      'Easy installation',
      'Low profile',
      'Durable finish'
    ],
    specifications: {
      'Shape': 'Half round',
      'Material': 'Metal'
    }
  },
  // 64. H Glass Door Handle (32×450, 32×600)
  {
    id: 'dha-064',
    name: 'H Glass Door Handle',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: hGlassDoorHandle,
    shortDescription: 'Premium H-type handle designed for glass doors.',
    description: 'Widely used in commercial glass partitions and doors, this handle offers both strength and visual appeal.',
    features: [
      'Strong grip design',
      'Suitable for glass doors',
      'Modern appearance',
      'High load capacity',
      'Stainless steel construction'
    ],
    specifications: {
      'Sizes': '32×450 mm, 32×600 mm',
      'Material': 'Metal',
      'Application': 'Glass doors'
    }
  }
];
