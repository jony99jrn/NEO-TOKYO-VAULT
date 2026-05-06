import { LucideIcon, ShoppingCart, Heart, Search, Menu, Zap, ShieldCheck, Globe, Package } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  series: string;
  brand: string;
  price: number;
  image: string;
  isPreOrder: boolean;
  scale: string;
  material: string;
  stockCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luffy Gear 5 "Sun God"',
    series: 'One Piece',
    brand: 'Bandai Spirits',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800',
    isPreOrder: true,
    scale: '1/7',
    material: 'PVC, ABS',
    stockCount: 12,
  },
  {
    id: '2',
    name: 'Naruto Uzumaki "Kurama Link"',
    series: 'Naruto Shippuden',
    brand: 'MegaHouse',
    price: 245.00,
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=800',
    isPreOrder: false,
    scale: '1/8',
    material: 'PVC',
    stockCount: 5,
  },
  {
    id: '3',
    name: 'Rengoku Kyojuro "Flame Hashira"',
    series: 'Demon Slayer',
    brand: 'Aniplex+',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?auto=format&fit=crop&q=80&w=800',
    isPreOrder: false,
    scale: '1/7',
    material: 'PVC/ABS',
    stockCount: 8,
  }
];

export const TRUST_SIGNALS = [
  { icon: ShieldCheck, text: "Authentic Licensed", color: "text-green-400" },
  { icon: Globe, text: "Global Shipping", color: "text-blue-400" },
  { icon: Package, text: "Collector Grade", color: "text-neon-purple" },
];
