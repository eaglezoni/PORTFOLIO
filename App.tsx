import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BootScreen } from './components/BootScreen';
import { Header } from './components/Header';
import { BrandCard } from './components/BrandCard';
import { BrandModal } from './components/BrandModal';
import { PlayerProfile } from './components/PlayerProfile';
import { Controls } from './components/Controls';
import { CheatCodeModal } from './components/CheatCodeModal';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { brands } from './types';
import type { Brand } from './types';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [showCheatCode, setShowCheatCode] = useState(false);

  // Keyboard controls
  useKeyboardControls(
    () => setSelectedBrand(null),
    () => setShowCheatCode(true)
  );

  // Theme management
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <>
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Boot Screen */}
      <AnimatePresence>
        {isBooting && (
          <BootScreen onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isBooting && (
        <>
          <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

          <main className="min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-16"
              >
                <motion.h2
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-4 glow-text"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  SELECT MISSION
                </motion.h2>
                <p className="font-body text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Choose a brand to explore. Each represents a unique venture in building and operating consumer businesses.
                </p>
              </motion.div>

              {/* Brand Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {brands.map((brand, index) => (
                  <BrandCard
                    key={brand.id}
                    brand={brand}
                    index={index}
                    onClick={() => setSelectedBrand(brand)}
                  />
                ))}
              </div>

              {/* Mobile Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-16 lg:hidden"
              >
                <div className="glass-panel rounded-2xl p-6 max-w-lg mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center font-display font-bold text-xl" style={{ color: 'var(--accent-cyan)' }}>
                      J
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>
                        JANZEN
                      </div>
                      <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Brand Operator
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
                    Brand operator and venture builder focused on execution across multiple consumer categories.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Execution', 'Distribution', 'Brand', 'Operations', 'Partnerships'].map((specialty, idx) => (
                      <span
                        key={idx}
                        className="glass-panel px-3 py-1 rounded-full text-xs font-body"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.location.href = 'mailto:contact@placeholder.com'}
                    className="w-full glass-panel px-4 py-2 rounded-full font-body text-sm font-bold tracking-wider btn-glow"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    CONTACT
                  </button>
                </div>
              </motion.div>
            </div>
          </main>

          {/* Fixed UI Elements */}
          <PlayerProfile />
          <Controls />

          {/* Modals */}
          <BrandModal
            brand={selectedBrand}
            onClose={() => setSelectedBrand(null)}
          />

          <CheatCodeModal
            isOpen={showCheatCode}
            onClose={() => setShowCheatCode(false)}
          />
        </>
      )}
    </>
  );
}

export default App;
