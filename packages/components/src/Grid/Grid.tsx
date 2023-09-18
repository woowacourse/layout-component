import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number;
  cols?: number;
  gap?: number;
  children: React.ReactNode;
}

const Grid = ({ rows, cols, gap, children, ...props }: Props) => {
  return (
    <Layout $rows={rows} $cols={cols} $gap={gap} {...props}>
      {children}
    </Layout>
  );
};

export default Grid;

const Layout = styled.div<{ $rows?: number; $cols?: number; $gap?: number }>`
  display: grid;
  grid-template-rows: repeat(${({ $rows }) => $rows || 1}, 1fr);
  grid-template-columns: repeat(${({ $cols }) => $cols || 1}, 1fr);
  gap: ${({ $gap }) => `${$gap}px` || 0};
`;
