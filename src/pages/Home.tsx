import React from 'react';
import { PRODUCTS, TRUST_SIGNALS } from '../lib/constants';
import Hero from '../components/home/Hero';
import { ProductCard } from '../components/product/ProductCard';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../lib/constants';

const SERIES = [
  { name: 'One Piece', count: 124, image: 'https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dragon Ball', count: 89, image: 'https://images.unsplash.com/photo-1620336655055-11f8e815e100?auto=format&fit=crop&q=80&w=400' },
  { name: 'Demon Slayer', count: 56, image: 'https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?auto=format&fit=crop&q=80&w=400' },
  { name: 'Jujutsu Kaisen', count: 42, image: 'https://images.unsplash.com/photo-1623910338008-01e4ec370505?auto=format&fit=crop&q=80&w=400' },
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>NeoTokyo Vault | Premium Anime Action Figures</title>
        <meta name="description" content="Enter the vault for authentic 1/7 and 1/8 scale anime masterpieces. Direct from Japan to your collection." />
      </Helmet>
      
      <Hero />

      {/* Ticker & Activity Bar */}
      <section className="bg-dark-bg border-b border-white/5 px-8 py-6 flex flex-col md:flex-row gap-8">
        {/* Activity Ticker */}
        <div className="w-full md:w-1/4 p-4 border border-white/5 bg-dark-surface">
           <h3 className="text-neon-cyan font-mono text-[10px] uppercase mb-4 tracking-[0.2em]">_Active Ticker</h3>
           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-neon-purple animate-pulse"></div>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tight">SECURED GOJO 1/7 - UNIT #421</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-600"></div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Stock level critical - 4 items left</span>
              </div>
           </div>
           <div className="pt-4 mt-4 border-t border-white/5">
              <div className="text-[10px] text-gray-400 uppercase mb-2 font-bold tracking-widest italic flex items-center">
                Worldwide Hubs <Globe size={10} className="ml-2" />
              </div>
              <div className="flex gap-2 opacity-30">
                {[1, 2, 3, 4].map(i => <div key={`hub-${i}`} className="w-6 h-4 bg-gray-700"></div>)}
              </div>
           </div>
        </div>

        {/* Dynamic Series View */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-6">
          {SERIES.map((series, index) => (
            <motion.div
              key={series.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-dark-surface border border-white/5 cursor-pointer"
            >
              <img src={series.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" alt={series.name} />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-dark-bg to-transparent">
                <span className="text-[9px] font-mono text-neon-cyan mb-1 tracking-tighter">DATASET_{index.toString().padStart(3, '0')}</span>
                <h3 className="text-sm font-black italic tracking-tighter uppercase group-hover:text-neon-cyan transition-colors">{series.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="px-8 py-20 bg-[#0A0B10]">
        <div className="flex items-end justify-between mb-16 px-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">
              Vault_Selection<span className="text-neon-cyan opacity-50">.exe</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-neon-cyan"></div>
              <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.2em]">Direct Feed from Tokyo Sector</p>
            </div>
          </div>
          <button className="hidden md:block py-3 px-8 border border-white/10 hover:border-neon-cyan text-[10px] font-black uppercase italic tracking-widest text-gray-500 hover:text-white transition-all cursor-pointer">
            Access_Full_Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* System Footer Banner */}
      <section className="px-8 pb-32">
        <div className="bg-dark-surface border border-white/5 p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 p-4 text-[120px] font-black text-white/5 select-none leading-none pointer-events-none italic">JOIN</div>
          
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            SYNC YOUR <span className="text-neon-cyan">INTEL</span>
          </h2>
          <p className="text-gray-500 max-w-lg mb-10 text-xs font-medium uppercase tracking-widest leading-relaxed">
            Register your collector ID to receive high-frequency updates directly from the Japanese distribution network.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
            <input 
              type="email" 
              placeholder="AGENT_ID@SYSTEM.COM" 
              className="flex-grow bg-dark-bg border border-white/10 px-6 py-4 font-mono text-[11px] focus:outline-none focus:border-neon-cyan transition-colors uppercase tracking-widest"
            />
            <button className="geo-button-primary sm:px-8">
              Protocol_Init
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
