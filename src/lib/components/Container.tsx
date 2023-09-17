import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  minWidth?: number;
  maxWidth?: number;
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

type ContentProps = Omit<Props, 'children'>;

const Layout = styled.div<ContentProps>`
  margin: 0 auto;
  min-width: ${props => (props.minWidth ? `${props.minWidth}px` : 'none')};
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : 'none')};
`;
