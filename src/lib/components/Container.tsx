import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  minWidth: number;
  maxWidth: number;
  children: ReactNode;
};

const Container = ({ minWidth, maxWidth, children }: Props) => {
  return (
    <Layout minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </Layout>
  );
};

export default Container;

type LayoutProps = Omit<Props, 'children'>;

const Layout = styled.div<LayoutProps>`
  margin: 0 auto;
  min-width: ${props => `${props.minWidth}px`};
  max-width: ${props => `${props.maxWidth}px`};
`;
