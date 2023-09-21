import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  minWidth: number;
  maxWidth: number;
  unit: '%' | 'px' | 'rem' | 'vh' | 'vw' | 'vmin' | 'vmax' | 'ex' | 'ch';
  children: ReactNode;
};

const Container = ({ minWidth, maxWidth, unit, children }: Props) => {
  return (
    <Layout minWidth={minWidth} maxWidth={maxWidth} unit={unit}>
      {children}
    </Layout>
  );
};

export default Container;

type LayoutProps = Omit<Props, 'children'>;

const Layout = styled.div<LayoutProps>`
  margin: 0 auto;
  min-width: ${props => `${props.minWidth}${props.unit}`};
  max-width: ${props => `${props.maxWidth}${props.unit}`};
`;
