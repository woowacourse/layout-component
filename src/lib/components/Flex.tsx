import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: number;
  children: ReactNode;
};

const Flex = ({ direction='row', justify='flex-start', align='stretch', gap, children }: Props) => {
  return (
    <Layout direction={direction} justify={justify} align={align} gap={gap}>
      {children}
    </Layout>
  );
};

export default Flex;

type LayoutProps = Omit<Props, 'children'>;

const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: ${props => `${props.direction}`};
  justify-content: ${props => `${props.justify}`};
  align-items: ${props => `${props.align}`};
  gap: ${props => `${props.gap ? `${props.gap}px` : 'none'}`};
`;
