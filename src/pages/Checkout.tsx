import { motion } from 'motion/react';
import { CreditCard, Trash2, Shield, Truck } from 'lucide-react';
import { useStore } from '../lib/StoreContext';

export default function Checkout() {
  const { cart, removeFromCart } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-12">
          VAULT_SECURE_CHECKOUT<span className="text-neon-cyan opacity-50">.sys</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h3 className="text-neon-cyan font-mono text-[10px] uppercase mb-8 tracking-[0.2em] flex items-center">
                 <div className="w-1.5 h-1.5 bg-neon-cyan mr-3"></div>
                 01_Protocol_Shipping
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CheckoutInput label="AGENT_NAME" placeholder="FULL_LEGAL_ENTITY" />
                <CheckoutInput label="COMMS_EMAIL" placeholder="SECURE_ADDRESS@MAIL.COM" />
                <div className="md:col-span-2">
                  <CheckoutInput label="COORDINATES" placeholder="STREET_AND_STATION" />
                </div>
                <CheckoutInput label="SECTOR" placeholder="CITY_DISTRICT" />
                <CheckoutInput label="ZIP_CODE" placeholder="000-000" />
              </div>
            </div>

            <div>
              <h3 className="text-neon-cyan font-mono text-[10px] uppercase mb-8 tracking-[0.2em] flex items-center">
                 <div className="w-1.5 h-1.5 bg-neon-cyan mr-3"></div>
                 02_Protocol_Payment
              </h3>
              <div className="p-8 border border-white/10 bg-dark-surface relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-white">
                    <CreditCard size={120} />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                   <div className="md:col-span-2">
                     <CheckoutInput label="UNIT_ID" placeholder="0000 0000 0000 0000" />
                   </div>
                   <CheckoutInput label="EXP_KEY" placeholder="MM/YY" />
                   <CheckoutInput label="SEC_PASS" placeholder="***" />
                 </div>
              </div>
            </div>

            <button className="w-full geo-button-primary py-6 text-xl">
               INITIALIZE_TRANSACTION: ${total.toFixed(2)}
            </button>
          </div>

          {/* Cart Summary Card */}
          <div className="lg:col-span-4">
             <div className="sticky top-32 p-8 border border-neon-cyan/20 bg-dark-bg/80 backdrop-blur-md">
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-8">MANIFEST_SUMMARY</h3>
                
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                   {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-white/5 pb-4">
                         <div className="w-16 h-16 bg-dark-surface border border-white/10 flex-shrink-0">
                            <img src={item.image} className="w-full h-full object-cover grayscale" alt={item.name} />
                         </div>
                         <div className="flex-grow">
                            <div className="flex justify-between items-start">
                               <h4 className="text-[10px] font-black uppercase italic tracking-tight line-clamp-1">{item.name}</h4>
                               <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-neon-pink transition-colors cursor-pointer">
                                  <Trash2 size={12} />
                               </button>
                            </div>
                            <p className="text-xs font-mono text-neon-cyan font-bold">${item.price.toFixed(2)}</p>
                         </div>
                      </div>
                   ))}
                   {cart.length === 0 && <p className="text-gray-500 font-mono text-[10px] uppercase">Manifest is empty...</p>}
                </div>

                <div className="space-y-4 pt-4">
                   <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase">
                      <span>SUB_TOTAL</span>
                      <span>${total.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase">
                      <span>LOGISTICS_EST</span>
                      <span className="text-neon-cyan">FREE_ACCESS</span>
                   </div>
                   <div className="flex justify-between text-xl font-black italic uppercase tracking-tight pt-4 border-t border-white/10">
                      <span>TOTAL_FEE</span>
                      <span className="text-neon-cyan">${total.toFixed(2)}</span>
                   </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 opacity-50">
                    <Shield size={12} />
                    <span className="text-[9px] font-mono uppercase">SECURE_SSL</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-50">
                    <Truck size={12} />
                    <span className="text-[9px] font-mono uppercase">TRACKED_EXP</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CheckoutInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-mono font-bold text-gray-500 tracking-widest leading-none uppercase">
        {label}
      </label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-700 uppercase"
      />
    </div>
  );
}
