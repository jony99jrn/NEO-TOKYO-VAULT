import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useStore } from '../../lib/StoreContext';

export default function Navbar() {
  const { cart, wishlist } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-sm flex items-center justify-center transition-transform group-hover:rotate-90">
          <div className="w-4 h-4 border-2 border-black rotate-45"></div>
        </div>
        <span className="text-xl font-black tracking-tighter italic uppercase">
          NEOTOKYO <span className="text-neon-cyan">VAULT</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <NavLink to="/">Vault Access</NavLink>
        <NavLink to="/">Series</NavLink>
        <NavLink to="/">Pre-Orders</NavLink>
        <NavLink to="/">System Logs</NavLink>
        <NavLink to="/">Archive</NavLink>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-dark-accent border border-white/10 px-3 py-1.5 rounded-sm group">
          <span className="text-[10px] font-mono text-gray-500 mr-2">SEARCH_</span>
          <div className="w-24 h-4"></div>
          <div className="w-3 h-3 border-r border-b border-gray-500"></div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative group">
            <div className={`w-5 h-5 border transition-colors ${wishlist.length > 0 ? 'border-neon-purple bg-neon-purple/10' : 'border-gray-600 group-hover:border-neon-purple'}`}></div>
            {wishlist.length > 0 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-purple"></div>}
          </Link>

          <Link to="/checkout" className="flex items-center gap-2 group">
            <ShoppingCart size={18} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            <span className="text-[10px] font-mono uppercase text-gray-500">Vault: {cart.length.toString().padStart(2, '0')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="hover:text-neon-cyan transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
    </Link>
  );
}
