import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ParallaxContextProps {
  scroll: number;
}

const ParallaxContext = createContext<ParallaxContextProps>({ scroll: 0 });

export const useScrollContext = () => useContext(ParallaxContext);

interface ParallaxProviderProps {}

export const ParallaxProvider = ({ children }: PropsWithChildren<ParallaxProviderProps>) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <ParallaxContext.Provider value={{ scroll }}>{children}</ParallaxContext.Provider>;
};
