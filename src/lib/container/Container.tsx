import styled from 'styled-components';
import {
  CommonLayoutStyleProps,
  commonLayoutStyle,
} from '../common/commonLayout';

interface ContainerProps extends CommonLayoutStyleProps {
  $minWidth?: number;
  $maxWidth?: number;
}

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
  min-width: ${({ $minWidth: minWidth }) =>
    minWidth && minWidth > Number(breakpoints.sm.slice(0, -2))
      ? `${minWidth}px`
      : breakpoints.sm};
  max-width: ${({ $maxWidth: maxWidth }) =>
    maxWidth ? `${maxWidth}px` : '100%'};

  ${commonLayoutStyle}

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
    width: calc(${breakpoints.xxl} - 32px);
  }
`;

export default Container;
