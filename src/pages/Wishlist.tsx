import { motion } from 'motion/react';
import { Heart, ArrowLeft, Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../lib/constants';
import { useStore } from '../lib/StoreContext';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-8"
    >
      <div className="flex items-end justify-between mb-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 italic">MY <span className="text-neon-pink text-glow-pink">WISHLIST</span></h1>
          <p className="text-gray-500 font-medium">Tracking rare artifacts in the private vault</p>
        </div>
        <Link to="/" className="text-neon-cyan text-[10px] font-bold uppercase tracking-widest hover:text-white flex items-center">
          <ArrowLeft size={14} className="mr-2" /> Back To Vault
        </Link>
      </div>

      <div className="space-y-4">
        {wishlistedProducts.map((product) => (
          <div key={product.id} className="neon-border bg-dark-surface p-6 flex flex-col md:flex-row items-center gap-8">
            <Link to={`/product/${product.id}`} className="w-32 h-32 flex-shrink-0 bg-dark-bg neon-border overflow-hidden block">
               <img src={product.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt={product.name} />
            </Link>
            
            <div className="flex-grow text-center md:text-left">
               <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{product.series}</p>
               <h3 className="text-xl font-bold">{product.name}</h3>
               <p className="text-2xl font-display font-light mt-2">${product.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-4">
               <button 
                 onClick={() => addToCart(product)}
                 className="bg-white text-dark-bg px-6 py-3 font-display font-bold text-[10px] uppercase tracking-widest hover:bg-neon-cyan transition-colors cursor-pointer flex items-center"
               >
                  <ShoppingCart size={14} className="mr-2" /> Add to Cart
               </button>
               <button 
                 onClick={() => toggleWishlist(product.id)}
                 className="p-3 text-gray-500 hover:text-neon-pink transition-colors cursor-pointer"
               >
                  <Trash2 size={18} />
               </button>
            </div>
          </div>
        ))}

        {wishlistedProducts.length === 0 && (
          <div className="py-32 text-center">
            <Heart size={48} className="mx-auto mb-6 text-dark-border" />
            <p className="text-gray-500 mb-8 font-display uppercase tracking-widest text-sm">Your private wishlist is empty</p>
            <Link to="/" className="px-8 py-4 bg-neon-purple font-display font-bold uppercase text-xs tracking-widest">
              Enter The Vault
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
