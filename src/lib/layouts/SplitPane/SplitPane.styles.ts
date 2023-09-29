import styled from "styled-components";

interface ResizablePaneProps {
  $minSize?: string;
  $maxSize?: string;
}

export const SplitPaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ResizablePane = styled.div<ResizablePaneProps>`
  overflow: auto;
  min-width: ${({$minSize}) => $minSize || '0'};
  max-width: ${({$maxSize}) => $maxSize || '100%'};
`;

export const Resizer = styled.div`
  padding: 0px 1px;
  margin: 0px 2px;
  border-left: 1px solid #b5b5b5;
  border-right: 1px solid #b5b5b5;
  cursor: col-resize;
`;
