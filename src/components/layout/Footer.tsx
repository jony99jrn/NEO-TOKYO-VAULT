import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="h-12 bg-black border-t border-neon-cyan/20 flex items-center justify-between px-8 text-[10px] font-mono z-10 sticky bottom-0 backdrop-blur-md">
      <div className="flex gap-6">
        <span className="text-neon-cyan hidden md:inline">// SECURE_PAYMENT: AES_256</span>
        <span className="text-gray-500">// ENCRYPTION_ACTIVE</span>
      </div>
      
      <div className="flex gap-8 items-center">
        <span className="text-gray-400 hidden lg:inline">GLOBAL_SHIPPING: LOGISTICS_ON</span>
        <span className="text-gray-400 uppercase hidden sm:inline">Collectors Grade: A++</span>
        
        <div className="flex gap-1 items-center text-neon-purple">
          <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></div>
          <span className="font-bold tracking-tighter">LIVE_STOCK_UPDATE</span>
        </div>
      </div>
    </footer>
  );
}
