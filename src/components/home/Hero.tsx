import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="h-[500px] flex border-b border-white/5 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
        <div className="absolute top-10 left-10 text-[160px] font-black text-white/5 select-none leading-none">NT_01</div>
      </div>

      <div className="w-full lg:w-3/5 p-12 flex flex-col justify-center relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-2 py-0.5 bg-neon-purple text-black text-[10px] font-black uppercase">New Drop</span>
          <span className="text-neon-cyan font-mono text-[10px] tracking-tighter">VAULT_SYSTEMS: STABLE // SCANNING...</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase italic tracking-tighter mb-8 max-w-xl">
          ENTER THE<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-neon-cyan)' }}>VAULT_04</span>
        </h1>

        <p className="text-gray-400 max-w-md text-sm mb-10 leading-relaxed font-medium">
          Limited edition scale collectibles from the Neo-Tokyo sector. 
          Precision engineered for the ultimate collector grade experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="geo-button-primary">
            Unlock Selection
          </button>
          <button className="geo-button-secondary">
            View Archive
          </button>
        </div>
      </div>

      {/* Decorative side area */}
      <div className="hidden lg:flex w-2/5 relative bg-dark-surface items-center justify-center overflow-hidden border-l border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10" />
        
        <div className="w-64 h-80 bg-dark-accent border border-neon-cyan/50 relative flex items-center justify-center group shadow-2xl">
          <div className="absolute inset-4 border border-neon-cyan/10"></div>
          <div className="w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="w-32 h-48 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
            <span className="text-[10px] font-mono text-gray-500 rotate-90 tracking-widest">IMG_ASSET_441</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-black border border-neon-cyan p-3 shadow-lg z-20">
            <div className="text-[8px] font-mono text-neon-cyan leading-none mb-1">AUTHENTICITY</div>
            <div className="text-[12px] font-black italic uppercase text-white tracking-widest">VERIFIED_SECURE</div>
          </div>
        </div>

        <div className="absolute top-8 right-8 flex flex-col gap-1 items-end opacity-50">
          <div className="w-12 h-1 bg-neon-cyan"></div>
          <div className="w-8 h-1 bg-neon-purple"></div>
          <div className="w-4 h-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex-shrink-0">
      <p className="text-neon-cyan font-display text-2xl font-bold">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-gray-500">{label}</p>
    </div>
  );
}
