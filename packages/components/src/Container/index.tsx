import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  minWidth: number;
  maxWidth: number;
  children?: React.ReactNode;
}

const Container = ({ minWidth, maxWidth, children }: Props) => {
  return (
    <Layout>
      <ChildrenContainer $minWidth={minWidth} $maxWidth={maxWidth}>
        {children}
      </ChildrenContainer>
    </Layout>
  );
};

export default Container;

const Layout = styled.div`
  width: 100%;
`;

const ChildrenContainer = styled.div<{ $minWidth: number; $maxWidth: number }>`
  min-width: ${({ $minWidth }) => `${$minWidth}px` || 'initial'};
  max-width: ${({ $maxWidth }) => `${$maxWidth}px` || 'initial'};
  margin: 0 auto;
`;
