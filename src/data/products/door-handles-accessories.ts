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

// Placeholder for products without images yet
const placeholderImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

export const doorHandlesAccessoriesProducts: Product[] = [
  // 1. Door Handle AXM-01
  {
    id: 'dha-001',
    name: 'Door Handle AXM-01',
    categoryId: 'door-handles-accessories',
    category: 'Door Handles & Accessories',
    image: doorHandleAxm01,
    gallery: [doorHandleAxm01],
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
    image: doorHandleAxm25,
    gallery: [doorHandleAxm25],
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
    image: doorHandleAxm18,
    gallery: [doorHandleAxm18],
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
    image: doorHandleAxm24,
    gallery: [doorHandleAxm24],
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
    image: doorHandleAxm02,
    gallery: [doorHandleAxm02],
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
  }
];
