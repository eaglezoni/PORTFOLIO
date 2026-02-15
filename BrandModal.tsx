import { motion, AnimatePresence } from 'framer-motion';
import { Brand } from '../types';
import { useEffect } from 'react';

interface BrandModalProps {
  brand: Brand | null;
  onClose: () => void;
}

export const BrandModal = ({ brand, onClose }: BrandModalProps) => {
  useEffect(() => {
    if (brand) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [brand]);

  return (
    <AnimatePresence>
      {brand && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel max-w-2xl w-full rounded-3xl p-8 max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:scale-110 transition-transform focus-visible"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ background: brand.color }}
                  />
                  <span 
                    className="text-xs font-body font-bold tracking-widest px-3 py-1 rounded-full"
                    style={{ 
                      color: brand.color,
                      background: `${brand.color}20`,
                      border: `1px solid ${brand.color}40`
                    }}
                  >
                    {brand.category}
                  </span>
                </div>

                <h2 
                  className="font-display text-4xl font-black mb-2"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </h2>
                <p className="font-body text-lg" style={{ color: 'var(--text-secondary)' }}>
                  {brand.tagline}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-display text-sm font-bold tracking-wider mb-3 uppercase" style={{ color: 'var(--accent-cyan)' }}>
                  Mission Brief
                </h3>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {brand.description}
                </p>
              </div>

              {/* Role */}
              <div className="mb-8">
                <h3 className="font-display text-sm font-bold tracking-wider mb-3 uppercase" style={{ color: 'var(--accent-cyan)' }}>
                  Operational Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brand.role.map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-panel px-4 py-2 rounded-full text-sm font-body"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      • {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  disabled
                  className="glass-panel px-6 py-3 rounded-full font-body text-sm font-bold tracking-wider flex items-center gap-2 opacity-50 cursor-not-allowed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  VISIT SITE
                </button>

                <button
                  disabled
                  className="glass-panel px-6 py-3 rounded-full font-body text-sm font-bold tracking-wider flex items-center gap-2 opacity-50 cursor-not-allowed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  MEDIA KIT
                </button>

                <button
                  onClick={() => window.location.href = 'mailto:contact@placeholder.com'}
                  className="glass-panel px-6 py-3 rounded-full font-body text-sm font-bold tracking-wider flex items-center gap-2 btn-glow hover:scale-105 transition-transform"
                  style={{ color: brand.color }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  CONTACT
                </button>
              </div>

              {/* ESC hint */}
              <div className="mt-8 pt-6 border-t border-[var(--accent-cyan)] border-opacity-20">
                <p className="text-xs font-body text-center" style={{ color: 'var(--text-secondary)' }}>
                  Press <kbd className="px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--accent-cyan)] border-opacity-30">ESC</kbd> to close
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
