export interface Brand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  role: string[];
  color: string;
  icon: string;
}

export const brands: Brand[] = [
  {
    id: 'casa-malka',
    name: 'Casa Malka',
    tagline: 'Premium tequila with intention',
    category: 'SPIRITS',
    description: 'A premium tequila brand focused on quality craftsmanship and authentic Mexican heritage. Building distribution and brand presence in the spirits category.',
    role: ['Operations', 'Distribution', 'Partnerships', 'Brand Strategy'],
    color: '#d4af37',
    icon: 'tequila'
  },
  {
    id: 'choco-smooth',
    name: 'Choco Smooth',
    tagline: 'Wellness meets indulgence',
    category: 'WELLNESS',
    description: 'A wellness-focused chocolate brand that combines premium ingredients with functional benefits. Building the brand across retail and DTC channels.',
    role: ['Operator', 'Growth', 'Product Development', 'Brand Execution'],
    color: '#8b4513',
    icon: 'wellness'
  },
  {
    id: 'sunday-wash',
    name: 'Sunday Wash',
    tagline: 'Elevated home care',
    category: 'HOME & LIFESTYLE',
    description: 'A direct-to-consumer home care brand bringing premium, sustainable cleaning products to modern households. Focus on execution and customer experience.',
    role: ['DTC Operations', 'Brand Building', 'Customer Experience', 'Execution'],
    color: '#4a90e2',
    icon: 'home'
  },
  {
    id: 'helmsman-imports',
    name: 'Helmsman Imports',
    tagline: 'Curated international goods',
    category: 'IMPORT & DISTRIBUTION',
    description: 'Strategic import and distribution of curated international products. Building partnerships and managing operations across multiple product categories.',
    role: ['Import Operations', 'Partnerships', 'Logistics', 'Business Development'],
    color: '#2c5f7c',
    icon: 'import'
  }
];
