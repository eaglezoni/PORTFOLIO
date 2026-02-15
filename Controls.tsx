import { motion } from 'framer-motion';

export const Controls = () => {
  const controls = [
    { key: 'HOVER', action: 'INSPECT' },
    { key: 'CLICK', action: 'ENTER' },
    { key: 'ESC', action: 'CLOSE' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="fixed bottom-6 right-6 z-30 hidden md:block"
    >
      <div className="glass-panel rounded-2xl px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="font-display text-xs font-bold tracking-wider" style={{ color: 'var(--accent-cyan)' }}>
            CONTROLS
          </div>
          {controls.map((control, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--accent-cyan)] border-opacity-30 font-body text-xs" style={{ color: 'var(--text-primary)' }}>
                {control.key}
              </kbd>
              <span className="text-xs font-body" style={{ color: 'var(--text-secondary)' }}>
                {control.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
