import styled from 'styled-components';

type ContainerProps = {
  backgroundColor?: string;
  minWidth?: number;
  maxWidth?: number;
};

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  min-width: ${({ minWidth, theme: { breakpoints } }) =>
    minWidth && minWidth > breakpoints.sm ? `${minWidth}px` : breakpoints.sm};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.md}) {
      width: calc(${theme.breakpoints.sm} - 32px);
    }
    @media (min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg}) {
      width: calc(${theme.breakpoints.md} - 32px);
    }
    @media (min-width: ${theme.breakpoints.lg}) and (max-width: ${theme.breakpoints.xl}) {
      width: calc(${theme.breakpoints.lg} - 32px);
    }
    @media (min-width: ${theme.breakpoints.xl}) and (max-width: ${theme.breakpoints.xxl}) {
      width: calc(${theme.breakpoints.xl} - 32px);
    }
    @media (min-width: ${theme.breakpoints.xxl}) {
      max-width: calc(${theme.breakpoints.xxl} - 32px);
    }
  `};
`;

export default Container;
