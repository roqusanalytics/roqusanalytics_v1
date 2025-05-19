import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingBar from './LoadingBar';

const PageLoader: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kai keičiasi maršrutas, pradedame įkrovimą
    setIsLoading(true);

    // Simuliuojame puslapio įkrovimą su fiksuotu laiku
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms įkrovimo laikas

    return () => clearTimeout(loadingTimeout);
  }, [location.pathname]);

  return <LoadingBar isLoading={isLoading} />;
};

export default PageLoader;
