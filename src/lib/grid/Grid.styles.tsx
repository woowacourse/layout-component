import styled from 'styled-components';
import { GridProps } from './types.ts';

export const Grid = styled.div<GridProps & { doesBrowserSupportGap: boolean }>`
  display: grid;

  grid-template-rows: ${(props) => (props.rows ? `repeat(${props.rows}, 1fr)` : 'auto')};
  grid-template-columns: ${(props) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : 'auto'};

  ${(props) =>
    props.doesBrowserSupportGap &&
    `gap: ${typeof props.gap === 'number' ? props.gap + 'px' : props.gap};`}

  & > div {
    ${(props) =>
      !props.doesBrowserSupportGap &&
      `margin: ${
        typeof props.gap === 'number'
          ? props.gap / 2 + 'px'
          : typeof props.gap === 'string'
          ? props.gap
          : '0'
      };`}
  }
`;
