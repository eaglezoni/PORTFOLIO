import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('INITIALIZING');

  useEffect(() => {
    const stages = [
      { text: 'INITIALIZING SYSTEMS', duration: 300 },
      { text: 'LOADING BRAND DATA', duration: 400 },
      { text: 'RENDERING PORTFOLIO', duration: 500 },
      { text: 'BOOT COMPLETE', duration: 300 }
    ];

    let currentStage = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);

      if (currentProgress === 25 || currentProgress === 50 || currentProgress === 75) {
        currentStage++;
        if (currentStage < stages.length) {
          setStage(stages[currentStage].text);
        }
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[var(--bg-primary)] z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="text-center">
            <motion.h1
              className="font-display text-4xl font-black tracking-wider glow-text"
              style={{ color: 'var(--accent-cyan)' }}
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              JANZEN
            </motion.h1>
            <p className="font-body text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
              PORTFOLIO SYSTEM v1.0
            </p>
          </div>

          {/* Status */}
          <div className="text-center">
            <p className="font-body text-xs uppercase tracking-widest" style={{ color: 'var(--accent-cyan)' }}>
              {stage}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--accent-cyan)] border-opacity-30">
              <motion.div
                className="h-full rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                  width: `${progress}%`
                }}
                initial={{ width: 0 }}
              />
            </div>
            <div className="flex justify-between font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span>{progress}%</span>
              <span>LOADING...</span>
            </div>
          </div>

          {/* System Messages */}
          <div className="space-y-1 font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 20 ? 1 : 0 }}
            >
              → Authenticating credentials...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 50 ? 1 : 0 }}
            >
              → Establishing secure connection...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 80 ? 1 : 0 }}
            >
              → Interface ready
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
