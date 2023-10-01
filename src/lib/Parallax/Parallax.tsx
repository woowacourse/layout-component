import { PropsWithChildren } from 'react';
import { useScrollContext, ParallaxProvider } from './ParallaxContext';

type ParallaxProps = {
  image?: string;
  height?: React.CSSProperties['height'];
  css?: React.CSSProperties;
};

const Parallax = ({ image, height = '100vh', css, children }: PropsWithChildren<ParallaxProps>) => {
  const containerStyles: React.CSSProperties = {
    height,
    overflow: 'hidden',
    background: image && `no-repeat center url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'relative',
    ...css,
  };

  return <ParallaxProvider css={containerStyles}>{children}</ParallaxProvider>;
};

type ParallaxItemProps = {
  speed: number;
  image?: string;
  inset?: React.CSSProperties['inset'];
  css?: React.CSSProperties;
};

const Item = ({ speed, image, inset = 0, css, children }: PropsWithChildren<ParallaxItemProps>) => {
  const { yOffsetRatio } = useScrollContext();

  const yOffset = yOffsetRatio * (speed * 50);

  const parallaxStyles: React.CSSProperties = {
    willChange: 'transform',
    background: image && `url(${image}) no-repeat center`,
    backgroundSize: 'cover',
    transform: `translate3d(0,${yOffset}px, 0)`,
    position: 'absolute',
    inset,
    ...css,
  };

  return <div style={parallaxStyles}>{children}</div>;
};

Parallax.Item = Item;

export default Parallax;
