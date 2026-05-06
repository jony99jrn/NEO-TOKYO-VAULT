/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './lib/StoreContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Notification from './components/ui/Notification';

export default function App() {
  return (
    <HelmetProvider>
      <StoreProvider>
        <Router>
          <div className="min-h-screen flex flex-col selection:bg-neon-cyan/30">
            <TopBar />
            <Navbar />
            
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </AnimatePresence>
            </main>

            <Footer />
            <Notification />
          </div>
        </Router>
      </StoreProvider>
    </HelmetProvider>
  );
}
