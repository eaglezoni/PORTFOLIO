import { motion } from 'framer-motion';
import { useState } from 'react';

export const PlayerProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const specialties = [
    'Execution',
    'Distribution',
    'Brand',
    'Operations',
    'Partnerships'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="fixed left-6 bottom-6 z-30 hidden lg:block"
    >
      <div className="glass-panel rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center gap-3 hover:bg-[var(--accent-cyan)] hover:bg-opacity-10 transition-colors"
        >
          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center font-display font-bold text-lg" style={{ color: 'var(--accent-cyan)' }}>
            J
          </div>
          <div className="text-left">
            <div className="font-display text-sm font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>
              PLAYER PROFILE
            </div>
            <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-4 border-t border-[var(--accent-cyan)] border-opacity-20">
            <div className="pt-4">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Brand operator and venture builder focused on execution across multiple consumer categories. Building and scaling businesses from concept to market.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold tracking-wider mb-3 uppercase" style={{ color: 'var(--accent-cyan)' }}>
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="glass-panel px-3 py-1 rounded-full text-xs font-body"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => window.location.href = 'mailto:contact@placeholder.com'}
                className="w-full glass-panel px-4 py-2 rounded-full font-body text-sm font-bold tracking-wider btn-glow hover:scale-105 transition-transform"
                style={{ color: 'var(--accent-cyan)' }}
              >
                CONTACT
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
