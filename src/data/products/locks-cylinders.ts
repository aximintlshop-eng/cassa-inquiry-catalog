import { Product } from '../products';

// Import images
import godrejLockImg from '@/assets/products/godrej-lock.jpg';
import leverLocksetImg from '@/assets/products/lever-lockset.png';
import cassaMortiseLockImg from '@/assets/products/cassa-mortise-lock.png';
import haspLockImg from '@/assets/products/hasp-lock.png';
import padLockBlisterImg from '@/assets/products/pad-lock-blister.png';
import brassPlatePadLockImg from '@/assets/products/brass-plate-pad-lock.png';
import padLockAllSizesImg from '@/assets/products/pad-lock-all-sizes.png';
import cassaRimLockImg from '@/assets/products/cassa-rim-lock.png';
import cassaBathCylinderImg from '@/assets/products/cassa-bath-cylinder.png';
import cassa45mmShortCylinderImg from '@/assets/products/cassa-45mm-short-cylinder.png';
import cassaDoorCylinder70mmImg from '@/assets/products/cassa-door-cylinder-70mm.png';
import cassaDoorCylinderAllSizesImg from '@/assets/products/cassa-door-cylinder-all-sizes.png';
import drawerLockImg from '@/assets/products/drawer-lock.png';
import centerLockImg from '@/assets/products/center-lock.png';
import camLockImg from '@/assets/products/cam-lock.png';
import doorViewerImg from '@/assets/products/door-viewer.png';
import doorChainGuardImg from '@/assets/products/door-chain-guard.png';
import steelCupboardLockBlackImg from '@/assets/products/steel-cupboard-lock-black.png';
import cabinetLockImg from '@/assets/products/cabinet-lock.png';
import cycleLockImg from '@/assets/products/cycle-lock.png';
import slidingKlickLockImg from '@/assets/products/sliding-klick-lock.png';
import slidingPushLockImg from '@/assets/products/sliding-push-lock.png';
import aluminiumLockBodyImg from '@/assets/products/aluminium-lock-body.png';
import aluminiumLockBodyRollerImg from '@/assets/products/aluminium-lock-body-roller.png';
import doorLockBody85x45Img from '@/assets/products/door-lock-body-85x45.png';
import doorLockBody72x55Img from '@/assets/products/door-lock-body-72x55.png';
import glassCenterLockImg from '@/assets/products/glass-center-lock.png';
import glassPatchLockImg from '@/assets/products/glass-patch-lock.png';
import glassLPatchMaleImg from '@/assets/products/glass-l-patch-male.png';
import glassLPatchFemaleImg from '@/assets/products/glass-l-patch-female.png';

export const locksCylindersProducts: Product[] = [
  {
    id: 'lc-001',
    name: 'Godrej Lock',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: godrejLockImg,
    shortDescription: 'High-quality, reliable locking solution from Godrej for doors and security applications.',
    description: 'The Godrej Lock is a premium lock designed for residential and commercial doors. Engineered with precision, it offers a strong and reliable locking mechanism while maintaining smooth operation. Its corrosion-resistant finish ensures longevity even in humid or high-use environments.',
    features: ['Durable steel body', 'Smooth key operation', 'Anti-corrosion finish', 'Trusted brand quality', 'Reliable locking mechanism'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Lock Type': 'Mortise / Cylinder (varies by model)', 'Finish': 'Satin / Chrome / Nickel', 'Keys': '2–3 Included', 'Application': 'Wooden & Metal Doors' }
  },
  {
    id: 'lc-002',
    name: 'Lever Lockset',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: leverLocksetImg,
    shortDescription: 'Modern lever-operated lockset for doors, offering convenience and style.',
    description: 'A stylish and functional lever lockset designed for easy door operation. Ideal for high-traffic areas where quick access is needed. Combines aesthetic design with robust security.',
    features: ['Ergonomic lever handle', 'Durable lock mechanism', 'Suitable for residential and office doors', 'Sleek finish options', 'Easy installation'],
    specifications: { 'Material': 'Zinc Alloy / Steel', 'Lock Type': 'Lever Lockset', 'Backset': 'Standard 60 mm', 'Finish': 'Satin / Chrome / Polished', 'Keys': 'Included' }
  },
  {
    id: 'lc-003',
    name: 'CASSA Mortise Lock (H/D & L/D)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassaMortiseLockImg,
    shortDescription: 'Heavy-duty (H/D) and light-duty (L/D) mortise locks for secure door closure.',
    description: 'CASSA Mortise Locks are ideal for both residential and commercial doors, offering secure locking with a smooth action. The heavy-duty version is designed for high-traffic or heavy doors, while the light-duty version is suitable for interior doors.',
    features: ['Sturdy construction for varying door types', 'Smooth latch and deadbolt operation', 'Easy installation', 'Long-lasting durability', 'H/D and L/D options'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Backset': 'Standard / Adjustable', 'Finish': 'Satin Nickel / Chrome / Polished', 'Door Thickness': '35–45 mm', 'Keys': '2–3 Supplied' }
  },
  {
    id: 'lc-004',
    name: 'Hasp Lock (2.5", 3", 4")',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: haspLockImg,
    shortDescription: 'Traditional hasp lock for cabinets, doors, and storage areas.',
    description: 'A classic security solution, the Hasp Lock provides a simple yet reliable way to secure doors, cupboards, and lockers. Available in 2.5", 3", and 4" sizes to suit different applications.',
    features: ['Easy to install', 'Works with padlocks', 'Durable metal construction', 'Multiple size options', 'Strong security'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Sizes': '2.5", 3", 4"', 'Finish': 'Chrome / Zinc Plated / Painted', 'Application': 'Doors, Cabinets, Storage' }
  },
  {
    id: 'lc-005',
    name: 'Pad Lock – Blister Pack',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: padLockBlisterImg,
    shortDescription: 'Conveniently packaged pad lock for retail and DIY applications.',
    description: 'The Pad Lock – Blister Pack is ideal for home, office, and light industrial use. It comes pre-packaged for retail convenience and features a durable locking body with smooth key operation.',
    features: ['Corrosion-resistant', 'Hardened steel shackle', 'Compact packaging for sale', 'Key-operated', 'Multiple sizes available'],
    specifications: { 'Material': 'Steel / Brass', 'Shackle': 'Hardened Steel', 'Keys': '2 Supplied', 'Finish': 'Brass / Chrome', 'Applications': 'Cabinets, Doors, Lockers' }
  },
  {
    id: 'lc-006',
    name: 'Brass Plate Pad Lock',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: brassPlatePadLockImg,
    shortDescription: 'Classic brass pad lock with durable locking mechanism.',
    description: 'The Brass Plate Pad Lock offers long-lasting performance and resistance to environmental wear. Suitable for outdoor gates, sheds, and lockers requiring heavy-duty protection.',
    features: ['Solid brass body', 'Anti-corrosion', 'Heavy-duty shackle', 'Reliable security', 'Classic design'],
    specifications: { 'Material': 'Brass Body + Steel Shackle', 'Shackle Diameter': '6–10 mm (model dependent)', 'Keys': '2–3 Supplied', 'Finish': 'Polished Brass' }
  },
  {
    id: 'lc-007',
    name: 'Pad Lock – All Sizes',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: padLockAllSizesImg,
    shortDescription: 'Wide range of pad locks available in multiple sizes to suit various applications.',
    description: 'CASSA Pad Locks come in multiple sizes to meet any security requirement. From small cupboard locks to large industrial padlocks, each is designed for durability, reliability, and smooth key operation.',
    features: ['Compact to heavy-duty options', 'Corrosion-resistant body', 'Hardened shackle', 'Keyed locking system', 'Multiple size range'],
    specifications: { 'Material': 'Brass / Steel', 'Sizes': 'Mini to Large (varies by model)', 'Keys': '2–3 Included', 'Finish': 'Chrome / Brass / Painted', 'Application': 'Doors, Gates, Storage' }
  },
  {
    id: 'lc-008',
    name: 'CASSA Rim Lock',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassaRimLockImg,
    shortDescription: 'Surface-mounted rim lock for added security on doors.',
    description: 'The CASSA Rim Lock is a traditional locking solution offering strong security with simple installation. Ideal for residential and office doors where extra locking reinforcement is needed.',
    features: ['Easy surface mounting', 'Smooth latch and deadbolt operation', 'Strong metal body', 'Suitable for wooden doors', 'Reliable performance'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Mounting': 'Surface', 'Backset': 'Standard', 'Finish': 'Chrome / Satin Nickel', 'Keys': '2 Supplied' }
  },
  {
    id: 'lc-009',
    name: 'CASSA Bath Cylinder (60 / 70 / 80 mm – With / Without Key)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassaBathCylinderImg,
    shortDescription: 'Bathroom-specific cylinder locks available in multiple sizes, with optional keys.',
    description: 'CASSA Bath Cylinders are designed for bathroom or washroom doors, offering privacy and security. Available with or without key depending on user preference, they integrate seamlessly with internal door hardware.',
    features: ['Compact design for bathroom doors', 'Optional key locking for privacy', 'Corrosion-resistant metal', 'Easy installation', 'Multiple size options'],
    specifications: { 'Material': 'Zinc Alloy / Steel', 'Sizes': '60 / 70 / 80 mm', 'Key Option': 'With / Without Key', 'Finish': 'Satin Nickel / Chrome' }
  },
  {
    id: 'lc-010',
    name: 'CASSA 45 mm Short Cylinder',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassa45mmShortCylinderImg,
    shortDescription: 'Compact cylinder lock for small doors and cabinets.',
    description: 'The 45 mm CASSA Short Cylinder is suitable for cabinet doors, cupboards, or interior doors requiring a small but secure lock. Its precise key mechanism ensures smooth and reliable performance.',
    features: ['Heavy-duty metal body', 'Smooth key operation', 'Compact size fits smaller doors', 'Resistant to tampering', 'High security'],
    specifications: { 'Material': 'Zinc Alloy / Brass', 'Size': '45 mm', 'Keys': '2 Supplied', 'Finish': 'Satin / Polished' }
  },
  {
    id: 'lc-011',
    name: 'CASSA Door Cylinder (70 mm – SN / CP / GP / AC / Black)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassaDoorCylinder70mmImg,
    shortDescription: 'Full-size door cylinder with multiple finishes for residential and commercial doors.',
    description: 'CASSA 70 mm Door Cylinder is engineered for high-performance and durability. Designed to integrate with various door locks, it offers consistent security while matching your interior design aesthetics.',
    features: ['Compatible with mortise locks and handle sets', 'Multiple finish options (SN / CP / GP / AC / Black)', 'High-security brass core', 'Smooth key operation', 'Precision engineering'],
    specifications: { 'Material': 'Brass / Zinc Alloy', 'Length': '70 mm', 'Finish': 'Satin Nickel (SN), Chrome (CP), Gold Plated (GP), Antique Copper (AC), Black', 'Keys': '2–3 Supplied', 'Application': 'Residential & Commercial Doors' }
  },
  {
    id: 'lc-012',
    name: 'CASSA Door Cylinder (54 / 60 / 68 / 70 / 80 / 90 / 100 mm)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cassaDoorCylinderAllSizesImg,
    shortDescription: 'Variety of cylinder sizes for different door thicknesses and security needs.',
    description: 'CASSA Door Cylinders in a wide range of sizes allow flexibility for doors of varying thickness. Their smooth key operation and secure design make them ideal for high-traffic and sensitive areas.',
    features: ['Durable brass construction', 'Precision-engineered for smooth operation', 'Compatible with standard locks', 'Multiple size options', 'Full size range'],
    specifications: { 'Material': 'Brass / Zinc Alloy', 'Sizes': '54 / 60 / 68 / 70 / 80 / 90 / 100 mm', 'Keys': '2–3 Supplied', 'Finish': 'Satin Nickel / Chrome / Polished' }
  },
  {
    id: 'lc-013',
    name: 'Drawer Lock (16 / 22 / 32 / 38 mm)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: drawerLockImg,
    shortDescription: 'Compact lock for drawers, cabinets, and small storage units.',
    description: 'CASSA Drawer Locks provide reliable security for drawers in offices, homes, and commercial furniture. The cam mechanism ensures easy installation and smooth operation.',
    features: ['Secure drawer locking', 'Smooth cam mechanism', 'Multiple size options', 'Durable metal body', 'Easy installation'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Sizes': '16 / 22 / 32 / 38 mm', 'Keys': '2 Included', 'Finish': 'Chrome / Nickel' }
  },
  {
    id: 'lc-014',
    name: 'Center Lock (16 / 19 mm)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: centerLockImg,
    shortDescription: 'Small, efficient center lock for cabinets and display units.',
    description: 'CASSA Center Locks are perfect for light-duty applications such as display cabinets, mailboxes, or small storage compartments. Offers easy installation and reliable locking.',
    features: ['Precise locking', 'Smooth key action', 'Compact design', 'Light-duty application', 'Easy to install'],
    specifications: { 'Material': 'Zinc Alloy', 'Sizes': '16 / 19 mm', 'Keys': '2 Included', 'Finish': 'Chrome / Nickel' }
  },
  {
    id: 'lc-015',
    name: 'Cam Lock (16 / 20 / 25 / 30 mm)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: camLockImg,
    shortDescription: 'Rotary cam lock for cabinets, lockers, and small doors.',
    description: 'The CASSA Cam Lock is widely used for furniture, cabinets, lockers, and equipment boxes. Its compact design and efficient cam mechanism ensure security and smooth operation.',
    features: ['Easy rotational locking', 'Multiple size options', 'Robust metal body', 'Smooth key operation', 'Versatile application'],
    specifications: { 'Material': 'Steel / Zinc Alloy', 'Sizes': '16 / 20 / 25 / 30 mm', 'Keys': '2 Supplied', 'Finish': 'Chrome / Nickel' }
  },
  {
    id: 'lc-016',
    name: 'Door Viewer (CP / GP)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: doorViewerImg,
    shortDescription: 'Peephole for doors to safely view visitors.',
    description: 'The CASSA Door Viewer allows safe identification of visitors without opening the door. Suitable for residential apartments and offices, it features a high-definition lens for clear viewing.',
    features: ['Wide-angle lens', 'Easy installation', 'High-quality polished finish (Chrome / Gold)', 'Provides privacy and security', 'Clear optics'],
    specifications: { 'Material': 'Zinc Alloy / Brass', 'Lens': 'Wide-angle (160–200°)', 'Finish': 'Chrome (CP) / Gold Plated (GP)', 'Application': 'Wooden / Metal Doors' }
  },
  {
    id: 'lc-017',
    name: 'Door Chain Guard',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: doorChainGuardImg,
    shortDescription: 'A robust door safety accessory designed to provide controlled door opening while maintaining security and privacy.',
    description: 'The Door Chain Guard is an essential safety fitting for residential and commercial doors. It allows the door to be opened slightly so occupants can verify visitors before granting full access. Built with a heavy-duty steel chain and reinforced mounting plates, it offers reliable protection against forced entry.',
    features: ['High-strength steel chain construction', 'Allows partial door opening for safety', 'Prevents forced entry', 'Smooth sliding locking plate', 'Long-lasting corrosion-resistant finish'],
    specifications: { 'Material': 'Hardened Steel', 'Finish': 'Chrome / Nickel Plated', 'Chain Length': 'Approx. 150–180 mm', 'Mounting Type': 'Surface Mount', 'Application': 'Wooden & Metal Doors' }
  },
  {
    id: 'lc-018',
    name: 'Steel Cupboard Lock – Black',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: steelCupboardLockBlackImg,
    shortDescription: 'A heavy-duty steel cupboard lock with black finish for secure storage solutions.',
    description: 'The Steel Cupboard Lock – Black is engineered for durability and security. Manufactured from solid steel, it provides dependable protection for cupboards, wardrobes, tool cabinets, and storage units. The black powder-coated finish enhances corrosion resistance while giving a modern appearance.',
    features: ['Strong steel body', 'Anti-rust black powder coating', 'Smooth key operation', 'Suitable for cupboards, lockers, and cabinets', 'Easy installation'],
    specifications: { 'Material': 'Steel', 'Finish': 'Black Powder Coated', 'Lock Type': 'Key Operated', 'Keys': '2 Keys Included', 'Installation': 'Surface / Mortise (Model dependent)' }
  },
  {
    id: 'lc-019',
    name: 'Cabinet Lock',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cabinetLockImg,
    shortDescription: 'A versatile locking solution for cabinets and drawers.',
    description: 'This Cabinet Lock is suitable for wooden, MDF, and metal cabinets. It ensures secure storage for residential kitchens, office furniture, and commercial fixtures. The internal mechanism is designed for smooth and reliable operation, providing long service life with minimal maintenance.',
    features: ['Compact and strong construction', 'Smooth key rotation', 'Multi-purpose application', 'Easy to install', 'Long service life'],
    specifications: { 'Material': 'Zinc Alloy / Steel', 'Finish': 'Chrome / Nickel / Black', 'Locking Mechanism': 'Cam Lock', 'Keys': '2 Keys', 'Application': 'Cabinets & Drawers' }
  },
  {
    id: 'lc-020',
    name: 'Cycle Lock',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: cycleLockImg,
    shortDescription: 'A heavy-duty locking solution for bicycles and two-wheelers.',
    description: 'The Cycle Lock is designed to provide effective theft protection for bicycles. Featuring a hardened steel core and protective outer coating, it resists cutting and environmental damage. Suitable for daily commuters, residential parking, and public areas.',
    features: ['Hardened steel cable or chain', 'Weather-resistant protective coating', 'High-security key cylinder', 'Easy to carry and store', 'Durable construction'],
    specifications: { 'Material': 'Hardened Steel', 'Lock Type': 'Key Operated', 'Cable Length': '900–1200 mm', 'Keys': '2 Keys', 'Usage': 'Bicycles, Scooters' }
  },
  {
    id: 'lc-021',
    name: 'CASSA Sliding Klick Lock (With / Without Key – Black / White)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: slidingKlickLockImg,
    shortDescription: 'A modern sliding lock with quick klik locking action.',
    description: 'The CASSA Sliding Klick Lock is designed for sliding doors, wardrobes, cabinets, and partitions. Its klik locking mechanism allows quick engagement, while optional key functionality adds an extra layer of security. The minimal design blends seamlessly with modern interiors.',
    features: ['Fast klik-type locking system', 'Available with or without key', 'Black and white color options', 'Compact and elegant design', 'Easy operation'],
    specifications: { 'Material': 'ABS Body with Metal Core', 'Finish': 'Black / White', 'Locking': 'Klik Mechanism', 'Key Option': 'With or Without Key', 'Application': 'Sliding Doors & Wardrobes' }
  },
  {
    id: 'lc-022',
    name: 'Sliding Push Lock (Black / White)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: slidingPushLockImg,
    shortDescription: 'Push-to-lock sliding door mechanism with concealed design.',
    description: 'The Sliding Push Lock is designed for users seeking a clean, handle-less appearance. Locking and unlocking is achieved with a simple push, making it ideal for modern furniture and sliding panels.',
    features: ['Push-to-lock and push-to-release', 'Minimal visible hardware', 'Smooth and silent operation', 'Dual color availability', 'Modern design'],
    specifications: { 'Material': 'ABS + Metal Components', 'Finish': 'Black / White', 'Installation': 'Surface / Recessed', 'Application': 'Sliding Cabinets & Doors' }
  },
  {
    id: 'lc-023',
    name: 'CASSA Aluminium Lock Body (20 / 25 / 30 / 35 mm)',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: aluminiumLockBodyImg,
    shortDescription: 'Lightweight aluminium lock body for multiple door applications.',
    description: 'CASSA Aluminium Lock Bodies are designed for aluminium doors, wardrobes, and partitions. They offer reliable locking with reduced weight, making them ideal for modern aluminium systems.',
    features: ['Strong aluminium alloy construction', 'Multiple size options', 'Corrosion-resistant finish', 'Smooth key movement', 'Lightweight design'],
    specifications: { 'Material': 'Aluminium Alloy', 'Sizes': '20 / 25 / 30 / 35 mm', 'Finish': 'Anodized Silver', 'Keys': '2 Keys', 'Application': 'Aluminium Doors' }
  },
  {
    id: 'lc-024',
    name: 'CASSA Aluminium Lock Body – 20 mm Roller',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: aluminiumLockBodyRollerImg,
    shortDescription: 'Aluminium lock body with roller latch for smooth door closing.',
    description: 'This 20 mm aluminium lock body features a roller latch that ensures smooth and silent door closing without slamming. Ideal for wardrobes and internal doors.',
    features: ['Built-in roller mechanism', 'Smooth door engagement', 'Lightweight yet strong', 'Easy installation', 'Silent operation'],
    specifications: { 'Material': 'Aluminium', 'Size': '20 mm', 'Roller': 'Nylon / Steel', 'Finish': 'Anodized Silver' }
  },
  {
    id: 'lc-025',
    name: 'CASSA Door Lock Body 85×45',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: doorLockBody85x45Img,
    shortDescription: 'Standard-size lock body for internal and external doors.',
    description: 'Designed for high-usage doors, this lock body ensures consistent performance and compatibility with standard door fittings.',
    features: ['Durable internal mechanism', 'Standard size compatibility', 'Smooth latch and bolt action', 'Multiple functions', 'Reliable performance'],
    specifications: { 'Size': '85×45 mm', 'Material': 'Steel / Aluminium', 'Finish': 'Zinc Plated' }
  },
  {
    id: 'lc-026',
    name: 'CASSA Door Lock Body 72×55',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Compact lock body for lighter door applications.',
    description: 'Perfect for smaller doors, cabinets, and partitions where compact locking solutions are required.',
    features: ['Space-saving design', 'Strong internal construction', 'Reliable locking', 'European style', 'Smooth operation'],
    specifications: { 'Size': '72×55 mm', 'Material': 'Steel / Aluminium', 'Finish': 'Nickel Plated' }
  },
  {
    id: 'lc-027',
    name: 'CASSA Glass Center Lock – 3 Keys with Knob',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Center locking solution for frameless glass doors.',
    description: 'This lock is designed for glass-to-glass or glass-to-frame applications, offering secure center locking with elegant aesthetics.',
    features: ['Integrated knob', 'Brass cylinder keys', 'Strong glass grip', 'Elegant design', 'Secure locking'],
    specifications: { 'Material': 'Zinc Alloy', 'Keys': '3 Brass Keys', 'Glass Thickness': '8–12 mm' }
  },
  {
    id: 'lc-028',
    name: 'CASSA Glass Patch Lock – 3 Brass Keys',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'A premium-quality glass patch lock designed for frameless glass doors, supplied with 3 durable brass keys for enhanced security.',
    description: 'The CASSA Glass Patch Lock – 3 Brass Keys is engineered to provide reliable security for frameless glass doors used in offices, showrooms, retail outlets, and commercial spaces. The lock is designed to clamp securely onto the glass panel without the need for glass cutting or drilling, ensuring safety and easy installation.',
    features: ['Heavy-duty patch lock construction', 'High-quality brass key cylinder', 'Suitable for frameless glass doors', 'Secure locking without drilling glass', 'Smooth key operation and long service life'],
    specifications: { 'Material': 'Zinc Alloy Body', 'Lock Cylinder': 'Brass', 'Keys': '3 Brass Keys', 'Glass Thickness Compatibility': '8–12 mm', 'Installation Type': 'Glass Patch Mount', 'Finish': 'Chrome / Satin (as available)', 'Application': 'Frameless Glass Doors' }
  },
  {
    id: 'lc-029',
    name: 'CASSA Glass L Patch – Male',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Male connector L patch fitting used for joining and supporting frameless glass panels.',
    description: 'The CASSA Glass L Patch – Male is designed as part of an L-shaped patch fitting system used in frameless glass installations. It provides firm support and alignment when joining glass panels or connecting glass to frames. Manufactured from high-quality metal alloy, it ensures structural stability while maintaining a sleek, minimal visual profile.',
    features: ['Precision-machined metal body', 'Strong grip on glass panels', 'Compatible with female L patch', 'Clean architectural appearance', 'Corrosion-resistant finish'],
    specifications: { 'Material': 'Zinc Alloy / Stainless Steel', 'Type': 'Male L Patch', 'Glass Thickness Compatibility': '8–12 mm', 'Mounting': 'Clamp Type', 'Finish': 'Satin / Polished Chrome', 'Application': 'Glass-to-Glass / Glass-to-Frame' }
  },
  {
    id: 'lc-030',
    name: 'CASSA Glass L Patch – Female',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Female L patch fitting designed to pair with the male L patch for frameless glass connections.',
    description: 'The CASSA Glass L Patch – Female completes the L patch assembly, working together with the male component to create a secure and stable glass joint. It is designed to distribute load evenly across the glass surface, reducing stress and enhancing safety. Commonly used in office partitions, glass doors, and display systems.',
    features: ['Heavy-duty construction', 'Precise fit with male L patch', 'Smooth edges to protect glass', 'Elegant modern finish', 'Even load distribution'],
    specifications: { 'Material': 'Zinc Alloy / Stainless Steel', 'Type': 'Female L Patch', 'Glass Thickness Compatibility': '8–12 mm', 'Installation': 'Clamp Mounted', 'Finish': 'Satin / Chrome', 'Application': 'Frameless Glass Systems' }
  },
  {
    id: 'lc-031',
    name: 'CASSA Glass Patch – Top',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Top-mounted glass patch fitting for frameless glass door assemblies.',
    description: 'The CASSA Glass Patch – Top is used at the top edge of frameless glass doors to support pivot or hinge mechanisms. It ensures smooth door movement while maintaining precise alignment. Built for durability and stability, this patch fitting is ideal for commercial glass doors that require frequent operation.',
    features: ['Strong metal housing', 'Provides upper support and alignment', 'Smooth pivot or hinge integration', 'Easy and secure installation', 'Professional grade'],
    specifications: { 'Material': 'Zinc Alloy / Stainless Steel', 'Position': 'Top Patch', 'Glass Thickness Compatibility': '8–12 mm', 'Mounting Type': 'Clamp Fitting', 'Finish': 'Satin / Polished', 'Application': 'Frameless Glass Doors' }
  },
  {
    id: 'lc-032',
    name: 'CASSA Glass Patch – Bottom',
    categoryId: 'locks-cylinders',
    category: 'Locks & Cylinders',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Heavy-duty bottom glass patch fitting designed to support pivot and load-bearing functions.',
    description: 'The CASSA Glass Patch – Bottom plays a critical role in frameless glass door systems by supporting the door\'s weight and enabling smooth pivot movement. It is engineered for high load capacity and stability, making it suitable for commercial installations such as offices, showrooms, and retail entrances.',
    features: ['Load-bearing design', 'Strong grip on glass panel', 'Smooth pivot support', 'Long-lasting performance', 'Heavy-duty application'],
    specifications: { 'Material': 'Zinc Alloy / Stainless Steel', 'Position': 'Bottom Patch', 'Glass Thickness Compatibility': '8–12 mm', 'Load Capacity': 'Heavy-Duty Application', 'Finish': 'Satin / Chrome', 'Application': 'Frameless Glass Pivot Doors' }
  }
];
