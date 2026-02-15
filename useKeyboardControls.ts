import { useEffect } from 'react';

export const useKeyboardControls = (onEscape?: () => void, onCheatCode?: () => void) => {
  useEffect(() => {
    const keySequence: string[] = [];
    const cheatCode = ['j', 'a', 'n', 'z', 'e', 'n'];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key
      if (e.key === 'Escape' && onEscape) {
        onEscape();
      }
      
      // Cheat code detection
      if (onCheatCode) {
        keySequence.push(e.key.toLowerCase());
        if (keySequence.length > cheatCode.length) {
          keySequence.shift();
        }
        
        if (JSON.stringify(keySequence) === JSON.stringify(cheatCode)) {
          onCheatCode();
          keySequence.length = 0;
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, onCheatCode]);
};
