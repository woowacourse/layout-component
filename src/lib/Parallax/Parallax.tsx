import { PropsWithChildren, useRef, useState, useEffect } from 'react';
import { useScrollContext } from './ParallaxContext';

type ParallaxProps = {
  image?: string;
  height?: React.CSSProperties['height'];
  css?: React.CSSProperties;
};

const Parallax = ({ image, height = '100vh', css, children }: PropsWithChildren<ParallaxProps>) => {
  const containerStyles: React.CSSProperties = {
    height,
    overflowX: 'hidden',
    overflowY: 'hidden',
    background: image && `no-repeat center url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'relative',
    ...css,
  };

  return <div style={containerStyles}>{children}</div>;
};

type ParallaxItemProps = {
  speed: number;
  image?: string;
  width?: React.CSSProperties['width'];
  inset?: React.CSSProperties['inset'];
};

const Item = ({ speed, image, width = '100%', inset = 0, children }: PropsWithChildren<ParallaxItemProps>) => {
  const { scroll } = useScrollContext();

  const parallaxStyles: React.CSSProperties = {
    willChange: 'transform',
    transform: `translate3d(0,${(scroll / 20) * speed}px,0)`,
    background: image ? `url(${image}) no-repeat center` : '',
    backgroundSize: 'cover',
    position: 'absolute',
    width,
    inset,
  };

  return <div style={parallaxStyles}>{children}</div>;
};

Parallax.Item = Item;

export default Parallax;
