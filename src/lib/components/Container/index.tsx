import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { styled } from 'styled-components';

import { Slash } from '../../@types';
import { tailwindPercentage } from '../../utils/tailwindPercentage';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  minWidth: 'auto' | 'full' | 'screen' | Slash;
  maxWidth: 'auto' | 'full' | 'screen' | Slash;
  children?: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

type WrapperProps = Omit<ContainerProps, 'children'>;

const Wrapper = styled.div<WrapperProps>`
  min-width: ${({ minWidth }) => {
    if (minWidth === 'auto') return minWidth;
    if (minWidth === 'full') return '100%';
    if (minWidth === 'screen') return '100vw';
    return tailwindPercentage(minWidth);
  }};
  max-width: ${({ maxWidth }) => {
    if (maxWidth === 'auto') return maxWidth;
    if (maxWidth === 'full') return '100%';
    if (maxWidth === 'screen') return '100vw';
    return tailwindPercentage(maxWidth);
  }};
`;

export default Container;
