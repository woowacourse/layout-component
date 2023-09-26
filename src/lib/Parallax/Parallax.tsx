import { PropsWithChildren } from 'react';

type ParallaxProps = {
  image?: string;
  height?: React.CSSProperties['height'];
};

const Parallax = ({ image, height = '100vh', children }: PropsWithChildren<ParallaxProps>) => {
  const containerStyles: React.CSSProperties = {
    height,
    overflowX: 'hidden',
    overflowY: 'auto',
    background: image ? `no-repeat center url(${image})` : '',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    transformStyle: 'preserve-3d',
    perspective: '1px',
    position: 'relative',
  };

  return <div style={containerStyles}>{children}</div>;
};

type ParallaxItemProps = {
  speed: number;
  image?: string;
  width?: React.CSSProperties['width'];
};

const Item = ({ speed, image, width = '100%', children }: PropsWithChildren<ParallaxItemProps>) => {
  const translateZ = speed * -1;
  const scale = speed + 1;

  const parallaxStyles: React.CSSProperties = {
    transform: `translateZ(${translateZ}px) scale(${scale})`,
    background: image ? `url(${image}) no-repeat center` : '',
    width: '100%',
    aspectRatio: '1/2',
    position: 'absolute',
    inset: '0',
  };

  return <div style={parallaxStyles}>{children}</div>;
};

Parallax.Item = Item;

export default Parallax;
