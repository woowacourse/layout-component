import styled from "styled-components";

export const SplitPaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

interface ResizablePaneProps {
  minSize?: string;
  maxSize?: string;
}

export const ResizablePane = styled.div<ResizablePaneProps>`
  overflow: auto;
  min-width: ${(props) => props.minSize || '0'};
  max-width: ${(props) => props.maxSize || '100%'};
`;

export const Resizer = styled.div`
  width: 5px;
  cursor: col-resize;
`;
