import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          <h1 className="font-display text-xl font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>
            JANZEN
          </h1>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-4">
          <div className="glass-panel px-4 py-2 rounded-full text-xs font-body tracking-wider hidden sm:flex items-center gap-2">
            <span style={{ color: 'var(--accent-cyan)' }}>STATUS:</span>
            <span style={{ color: 'var(--text-primary)' }}>BUILDING</span>
          </div>
          
          <div className="glass-panel px-4 py-2 rounded-full text-xs font-body tracking-wider hidden md:flex items-center gap-2">
            <span style={{ color: 'var(--accent-cyan)' }}>MODE:</span>
            <span style={{ color: 'var(--text-primary)' }}>OPERATOR</span>
          </div>

          <div className="glass-panel px-4 py-2 rounded-full text-xs font-body tracking-wider hidden lg:flex items-center gap-2">
            <span style={{ color: 'var(--accent-cyan)' }}>PATCH:</span>
            <span style={{ color: 'var(--text-primary)' }}>v1.0</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="glass-panel p-3 rounded-full hover:scale-110 transition-transform focus-visible"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="var(--accent-cyan)" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="var(--accent-cyan)" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
};
