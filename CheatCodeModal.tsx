import { motion, AnimatePresence } from 'framer-motion';

interface CheatCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatCodeModal = ({ isOpen, onClose }: CheatCodeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-50"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateX: -45 }}
              transition={{ type: 'spring', damping: 20 }}
              className="glass-panel max-w-md w-full rounded-3xl p-8 pointer-events-auto relative"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(139, 92, 246, 0.1))',
                border: '2px solid var(--accent-cyan)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated corner accents */}
              <motion.div
                className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
                style={{ borderColor: 'var(--accent-cyan)' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
                style={{ borderColor: 'var(--accent-cyan)' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <div className="text-center space-y-6">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="mx-auto w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    boxShadow: '0 0 40px var(--glow-cyan)'
                  }}
                >
                  <span className="text-4xl">🎮</span>
                </motion.div>

                {/* Title */}
                <div>
                  <motion.h2
                    className="font-display text-3xl font-black mb-2 glow-text"
                    style={{ color: 'var(--accent-cyan)' }}
                    animate={{ textShadow: [
                      '0 0 10px var(--glow-cyan)',
                      '0 0 30px var(--glow-cyan)',
                      '0 0 10px var(--glow-cyan)'
                    ]}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    CHEAT CODE
                  </motion.h2>
                  <p className="font-display text-sm tracking-widest" style={{ color: 'var(--accent-purple)' }}>
                    ACTIVATED
                  </p>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    You discovered the secret! This portfolio is built with care, creativity, and a touch of playfulness.
                  </p>
                  <p className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Easter eggs like this make the web more fun. Keep exploring!
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="glass-panel rounded-lg p-3">
                    <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent-cyan)' }}>
                      +100
                    </div>
                    <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                      XP
                    </div>
                  </div>
                  <div className="glass-panel rounded-lg p-3">
                    <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent-purple)' }}>
                      🏆
                    </div>
                    <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                      UNLOCKED
                    </div>
                  </div>
                  <div className="glass-panel rounded-lg p-3">
                    <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent-pink)' }}>
                      1/1
                    </div>
                    <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                      SECRETS
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-full glass-panel px-6 py-3 rounded-full font-body text-sm font-bold tracking-wider btn-glow hover:scale-105 transition-transform"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  CONTINUE
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
