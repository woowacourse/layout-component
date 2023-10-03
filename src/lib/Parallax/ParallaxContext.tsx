import React, { createContext, PropsWithChildren, useContext, useEffect, useState, useRef } from 'react';

interface ParallaxContextProps {
  yOffsetRatio: number;
}

const ParallaxContext = createContext<ParallaxContextProps>({ yOffsetRatio: 0 });

export const useScrollContext = () => useContext(ParallaxContext);

interface ParallaxProviderProps {
  css: React.CSSProperties;
}

export const ParallaxProvider = ({ css, children }: PropsWithChildren<ParallaxProviderProps>) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [yOffsetRatio, setYOffsetRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const windowY = window.scrollY;
        const elementOffsetTop = parallaxRef.current.offsetTop;

        const centerOffset = windowY - elementOffsetTop;
        const elementHeight = parallaxRef.current.offsetHeight;

        const offsetRatio = centerOffset / elementHeight;

        setYOffsetRatio(offsetRatio);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return;
      }
      window.removeEventListener('scroll', handleScroll);
    });

    if (parallaxRef.current) {
      observer.observe(parallaxRef.current);
    }

    const cloneRef = parallaxRef.current;
    return () => {
      if (cloneRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <ParallaxContext.Provider value={{ yOffsetRatio }}>
      <div ref={parallaxRef} style={css}>
        {children}
      </div>
    </ParallaxContext.Provider>
  );
};
