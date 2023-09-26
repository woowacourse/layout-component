import styled from 'styled-components';

interface ComponentProps {
  gap?: string;
  rowGap?: string;
  height: number;
}

export const Component = styled.div<ComponentProps>`
  width: 100%;
  padding-bottom: ${({ gap, rowGap = '0' }) => (gap ? gap : rowGap)};
  grid-row-end: ${({ height }) => `span ${height}`};
  height: max-content;
`;
