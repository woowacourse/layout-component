import styled from "styled-components";

interface ResizablePaneProps {
  $size: string;
}

export const SplitPaneContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ResizablePane = styled.div<ResizablePaneProps>`
  overflow: auto;
  width: ${({$size}) => $size};
`;

export const Resizer = styled.div`
  padding: 0px 1px;
  margin: 0px 2px;
  border-left: 1px solid #b5b5b5;
  border-right: 1px solid #b5b5b5;
  cursor: col-resize;
`;
