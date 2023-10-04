import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DirectionStyle, EasingType } from '../types/styles';
import { Combine, SCProps } from '../types/utility';
import { generateDirectionStyle } from '../utils';

type ParallaxProps = {
  speed?: number;
  easing?: EasingType;
  isHorizontal?: boolean;
  isAbsolutePosition?: boolean;
  position?: DirectionStyle;
  zIndex?: number;
};

type ParallaxItemProps = Combine<
  ParallaxProps,
  ComponentPropsWithoutRef<'div'>
>;

const ParallaxItem = (props: ParallaxItemProps) => {
  const {
    speed = 1,
    children,
    easing,
    isHorizontal = false,
    isAbsolutePosition = false,
    position,
    zIndex,
    ...restProps
  } = props;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPositionYWithVertical = -scrollY * (speed - 1);
  const backgroundPositionXWithHorizontal = -scrollY * speed;

  return (
    <ParallaxItemContainer
      $isAbsolutePosition={isAbsolutePosition}
      $easing={easing}
      $isHorizontal={isHorizontal}
      $position={position}
      $zIndex={zIndex}
      $positionYWithVertical={backgroundPositionYWithVertical}
      $positionXWithHorizontal={backgroundPositionXWithHorizontal}
      {...restProps}
    >
      {children}
    </ParallaxItemContainer>
  );
};

export default ParallaxItem;

type ParallaxSCProps = SCProps<
  Pick<
    ParallaxProps,
    'isAbsolutePosition' | 'easing' | 'zIndex' | 'position' | 'isHorizontal'
  > & {
    positionYWithVertical?: number;
    positionXWithHorizontal?: number;
  }
>;

const ParallaxItemContainer = styled.div<ParallaxSCProps>`
  position: ${({ $isAbsolutePosition }) =>
    $isAbsolutePosition ? 'absolute' : 'relative'};
  transition: ${({ $easing }) => ($easing ? `0.1s ${$easing}` : 'none')};
  transform: ${({
    $isHorizontal,
    $positionXWithHorizontal,
    $positionYWithVertical,
  }) =>
    $isHorizontal
      ? `translateX(${$positionXWithHorizontal}px)`
      : `translateY(${$positionYWithVertical}px)`};

  ${({ $isAbsolutePosition, $position }) =>
    $isAbsolutePosition && `${generateDirectionStyle('', $position)}`};

  ${({ $isAbsolutePosition, $zIndex }) =>
    $isAbsolutePosition &&
    `
      zIndex: ${$zIndex};
    `}
`;
