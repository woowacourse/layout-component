import styled from "styled-components";

interface ResizablePaneProps {
  minSize?: string;
  maxSize?: string;
}

export const SplitPaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ResizablePane = styled.div<ResizablePaneProps>`
  overflow: auto;
  min-width: ${({minSize}) => minSize || '0'};
  max-width: ${({maxSize}) => maxSize || '100%'};
`;

export const Resizer = styled.div`
  width: 3px;
  cursor: col-resize;
`;
