import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Zap } from 'lucide-react';

const NOTIFICATIONS = [
  { user: 'S***o', item: 'Luffy Gear 5', location: 'Tokyo' },
  { user: 'K***n', item: 'Rengoku Kyojuro', location: 'New York' },
  { user: 'M***a', item: 'Naruto Kurama', location: 'Berlin' },
  { user: 'B***t', item: 'Luffy Gear 5', location: 'Seoul' },
];

export default function Notification() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
      setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
    }, 25000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 50 }}
          className="fixed bottom-6 left-6 z-[60] glass-panel p-4 flex items-center space-x-4 max-w-[280px]"
        >
          <div className="w-10 h-10 bg-neon-cyan/20 flex items-center justify-center rounded-full text-neon-cyan border border-neon-cyan/30">
            <ShoppingBag size={18} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest flex items-center">
              <Zap size={10} className="mr-1 fill-neon-cyan text-neon-cyan" /> Recent Purchase
            </p>
            <p className="text-xs text-white">
              <span className="font-bold">{NOTIFICATIONS[index].user}</span> from {NOTIFICATIONS[index].location} just secured the <span className="text-neon-cyan font-bold">{NOTIFICATIONS[index].item}</span>.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
