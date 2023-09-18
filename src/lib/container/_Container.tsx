import styled from 'styled-components';

type ContainerProps = {
  backgroundColor?: string;
  minWidth?: number;
  maxWidth?: number;
};

const breakpoints = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  min-width: ${({ minWidth, theme: { breakpoints } }) =>
    minWidth && minWidth > breakpoints.sm ? `${minWidth}px` : breakpoints.sm};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: calc(${breakpoints.sm} - 32px);
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: calc(${breakpoints.md} - 32px);
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: calc(${breakpoints.lg} - 32px);
  }
  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: calc(${breakpoints.xl} - 32px);
  }
  @media (min-width: ${breakpoints.xxl}) {
    max-width: calc(${breakpoints.xxl} - 32px);
  }
`;

export default Container;
