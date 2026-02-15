import { motion } from 'framer-motion';
import { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
  index: number;
  onClick: () => void;
}

const iconMap: Record<string, JSX.Element> = {
  tequila: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v1m6-1v1m-4 0h2M6 8h12l-1 13H7L6 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8" />
    </svg>
  ),
  wellness: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  import: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export const BrandCard = ({ brand, index, onClick }: BrandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{ background: `linear-gradient(135deg, ${brand.color}, var(--accent-purple))` }}
      />
      
      {/* Card */}
      <div className="glass-panel relative rounded-2xl p-6 h-full transition-all duration-300 hover:border-opacity-60">
        <div className="flex flex-col h-full">
          {/* Category Tag */}
          <div className="flex items-center justify-between mb-4">
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
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: brand.color }}
            />
          </div>

          {/* Icon */}
          <div 
            className="mb-4 transition-transform group-hover:scale-110 duration-300"
            style={{ color: brand.color }}
          >
            {iconMap[brand.icon]}
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {brand.name}
          </h3>

          {/* Tagline */}
          <p className="font-body text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            {brand.tagline}
          </p>

          {/* Action hint */}
          <div className="mt-auto pt-4 border-t border-[var(--accent-cyan)] border-opacity-20">
            <div className="flex items-center gap-2 text-xs font-body" style={{ color: 'var(--accent-cyan)' }}>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">CLICK TO ENTER</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
