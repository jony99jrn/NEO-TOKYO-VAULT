import React from 'react';
import { motion } from 'motion/react';
import { Zap, Timer } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-8 bg-neon-cyan text-black px-8 flex items-center justify-between overflow-hidden relative z-[60]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Zap size={12} className="fill-black" />
          <span className="font-mono text-[9px] font-black uppercase tracking-tighter">System_Alert:</span>
        </div>
        <div className="flex gap-4 items-center">
           <motion.p 
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="text-[9px] font-black uppercase italic tracking-widest whitespace-nowrap"
           >
             Next_Vault_Drop: [GEAR_5_OVERLOAD] - LIMITED_QUANTITY
           </motion.p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border-l border-black/20 pl-4">
          <Timer size={12} />
          <span className="font-mono text-[10px] font-black italic">T-MINUS: 04:22:15:09</span>
        </div>
        <button className="bg-black text-neon-cyan px-3 py-1 font-black italic text-[8px] uppercase tracking-tighter hover:bg-white transition-colors cursor-pointer">
          SECURE_ACCESS
        </button>
      </div>
      
      {/* Moving scanline effect */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-y-0 w-32 bg-white/30 skew-x-[-20deg] pointer-events-none"
      />
    </div>
  );
}
