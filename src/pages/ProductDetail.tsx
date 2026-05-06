import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, TRUST_SIGNALS } from '../lib/constants';
import { Star, ShieldCheck, Heart, ShoppingCart, Globe, RotateCcw, Package, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useStore } from '../lib/StoreContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <Helmet>
        <title>Buy {product.name} {product.scale} Figure | NeoTokyo Vault</title>
        <meta name="description" content={`Official ${product.series} ${product.scale} scale figure by ${product.brand}. Authentic collector grade packaging.`} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-12">
          <Link to="/" className="hover:text-neon-cyan transition-colors">Vault</Link>
          <ChevronRight size={10} />
          <span className="text-gray-400">{product.series}</span>
          <ChevronRight size={10} />
          <span className="text-neon-cyan">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Gallery Area */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
             <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar">
                {[product.image, product.image, product.image].map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 border transition-all cursor-pointer ${selectedImage === img ? 'border-neon-cyan' : 'border-white/10 opacity-50'}`}
                  >
                    <img src={img} className="w-full h-full object-cover grayscale" alt="thumbnail" />
                  </button>
                ))}
             </div>
             <div className="order-1 md:order-2 flex-grow aspect-[4/5] bg-dark-surface border border-white/10 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-black/80 backdrop-blur-sm border border-neon-cyan/30 text-[9px] font-mono text-neon-cyan tracking-[0.2em]">
                   SCAN_VIEW: ORIGIN_JAPAN
                </div>
                <img src={selectedImage} className="w-full h-full object-cover" alt={product.name} />
             </div>
          </div>

          {/* Details Area */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center -space-x-1">
                   {[1,2,3,4,5].map(i => <Star key={`star-${i}`} size={10} className="fill-neon-cyan text-neon-cyan" />)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 ml-2">// VERIFIED_COLLECTORS_48</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">
                 {product.name}
              </h1>
              <p className="text-sm text-neon-cyan font-mono font-bold tracking-[0.2em] mb-8 italic uppercase">
                 PROJECT_{product.series.replace(' ', '_').toUpperCase()}
              </p>
              
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-5xl font-black italic tracking-tighter">${product.price.toFixed(2)}</span>
                <span className="text-gray-600 line-through text-lg font-mono tracking-tighter">$245.00</span>
              </div>
            </div>

            {/* Purchase Controls */}
            <div className="flex flex-col gap-4 mb-12">
               <div className="grid grid-cols-5 gap-4">
                  <button 
                    onClick={() => addToCart(product)}
                    className="col-span-4 geo-button-primary text-center flex items-center justify-center"
                  >
                    SECURE_UNIT
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`border transition-all flex items-center justify-center cursor-pointer ${isInWishlist(product.id) ? 'bg-neon-purple/20 border-neon-purple text-neon-purple' : 'border-white/20 hover:border-neon-purple'}`}
                  >
                    <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
               </div>
               
               <Link 
                 to="/checkout"
                 className="geo-button-secondary text-center flex items-center justify-center"
               >
                  INSTANT_ORDER_INIT
               </Link>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-8 mb-8">
              <SpecItem label="ID_CODE" value={`NT-${id?.padStart(4, '0')}`} />
              <SpecItem label="SCALE_F" value={product.scale} />
              <SpecItem label="MATERIAL" value={product.material} />
              <SpecItem label="ORIGIN" value={product.brand} />
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-y-4 opacity-40">
              <TrustIcon icon={ShieldCheck} text="AUTH_LICENSE" />
              <TrustIcon icon={Globe} text="LOC_TRACK" />
              <TrustIcon icon={RotateCcw} text="REV_SUPPORT" />
              <TrustIcon icon={Package} text="COLL_PACK" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SpecItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1 leading-none">{label}</p>
      <p className="font-black italic text-lg uppercase tracking-tight">{value}</p>
    </div>
  );
}

function TrustIcon({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon size={16} className="text-gray-400" />
      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{text}</span>
    </div>
  );
}
