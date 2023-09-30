import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ParallaxProps = {
  $image?: string;
  $height?: React.CSSProperties['height'];
};

const Parallax = ({ children, ...props }: PropsWithChildren<ParallaxProps>) => {
  return <ParallaxContainer {...props}>{children}</ParallaxContainer>;
};

type ParallaxItemProps = {
  $speed: number;
  $image?: string;
  $width?: React.CSSProperties['width'];
};

const Item = ({ children, ...props }: PropsWithChildren<ParallaxItemProps>) => {
  return <ParallaxItem {...props}>{children}</ParallaxItem>;
};

Parallax.Item = Item;

export default Parallax;

const ParallaxContainer = styled.div<ParallaxProps>`
  height: ${({ $height }) => $height || '100vh'};
  overflow-x: hidden;
  overflow-y: auto;
  background: ${({ $image }) => $image && `no-repeat center url(${$image})`};
  background-size: cover;
  background-attachment: fixed;
  transform-style: preserve-3d;
  perspective: 2px;
  position: relative;
`;

const ParallaxItem = styled.div<ParallaxItemProps>`
  width: ${({ $width }) => $width || '100%'};
  transform: ${({ $speed }) => `translateZ(${$speed * -2}px) scale(${$speed + 1})`};
  position: absolute;
  inset: 0;
  background: ${({ $image }) => $image && `no-repeat center url(${$image})`};
  background-size: cover;
`;
