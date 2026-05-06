import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../../lib/constants';
import { Link } from 'react-router-dom';
import { useStore } from '../../lib/StoreContext';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border border-white/10 p-4 relative group hover:border-neon-cyan/50 transition-colors bg-dark-surface"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Pre-order badge */}
      {product.isPreOrder && (
        <div className="absolute -top-1 -right-1 px-1 bg-neon-cyan text-black text-[9px] font-black italic z-20">
          PRE-ORDER
        </div>
      )}

      {/* Image Section */}
      <Link to={`/product/${product.id}`} className="block aspect-square bg-gray-900 mb-4 border border-white/5 relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
           <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase underline decoration-neon-cyan underline-offset-4">View Artifact</span>
        </div>
      </Link>

      {/* Info Section */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-sm font-black uppercase tracking-tight italic group-hover:text-neon-cyan transition-colors line-clamp-1">
          {product.name}
        </h4>
        <span className="text-neon-cyan font-mono text-xs font-bold italic ml-2">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <div className="flex gap-2 items-center mb-6">
        <span className="text-[9px] text-gray-500 px-1 border border-gray-700 uppercase font-bold tracking-widest">
          {product.scale} SCALE
        </span>
        <span className="text-[9px] text-gray-500 px-1 border border-gray-700 uppercase font-bold tracking-widest">
          {product.series}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-white/5">
        <button 
          onClick={() => addToCart(product)}
          className="flex-grow bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/10 text-[10px] font-black italic uppercase tracking-tighter py-2 transition-all cursor-pointer"
        >
          Sec_Request
        </button>
        <button 
          onClick={() => toggleWishlist(product.id)}
          className={`p-2 border transition-all cursor-pointer ${isInWishlist(product.id) ? 'bg-neon-purple/20 border-neon-purple text-neon-purple' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'}`}
        >
          <Heart size={14} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
        </button>
      </div>
    </motion.div>
  );
}
