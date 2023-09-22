import styled from 'styled-components';
import { FlexProps } from './types.ts';

export const Flex = styled.div<FlexProps & { doesBrowserSupportGap: boolean }>`
  display: flex;

  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};

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
