import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { styled, css } from 'styled-components';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  rows: number;
  columns: number;
  gap: string;
  children?: ReactNode;
}


const Grid = ({ children, ...props }: GridProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

type WrapperProps = Omit<GridProps, 'children'>;

const Wrapper = styled.div<WrapperProps>`

  display: grid;

  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};

  ${({ gap }) =>
    gap &&
    css`
      grid-gap: ${gap};
    `}
`;

export default Grid;
