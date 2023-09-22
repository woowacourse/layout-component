import styled from 'styled-components';
import { ContainerProps } from './types.ts';

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${(props) =>
    props.minWidth &&
    `min-width: ${
      typeof props.minWidth === 'number' ? props.minWidth + 'px' : props.minWidth
    };`}

  ${(props) =>
    props.maxWidth &&
    `max-width: ${
      typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
    };`}
`;
