import React, { useEffect, useState } from 'react';

interface LoadingBarProps {
  isLoading?: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Kai įkrovimas baigtas, greitai užpildome juostą iki 100%
      setProgress(100);

      // Po trumpo laiko paslepiame juostą
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setVisible(true);

      // Simuliuojame įkrovimo progresą su pastoviu greičiu
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + 5;
          // Neviršijame 95% kol nebaigtas įkrovimas
          return nextProgress > 95 ? 95 : nextProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!visible && progress >= 100) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-transparent">
      <div
        className="h-full bg-nexos-purple transition-all duration-300 ease-out"
        style={{
          width: isLoading ? `${progress}%` : '100%',
        }}
      />
    </div>
  );
};

export default LoadingBar;
