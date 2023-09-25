import {ReactNode, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const SplitPaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

interface ResizablePaneProps {
  minSize?: string;
  maxSize?: string;
}

const ResizablePane = styled.div<ResizablePaneProps>`
  overflow: auto;
  min-width: ${(props) => props.minSize || '0'};
  max-width: ${(props) => props.maxSize || '100%'};
`;

const Resizer = styled.div`
  width: 5px;
  cursor: col-resize;
`;

export interface SplitPaneProps {
  defaultSize: string;
  minSize?: string;
  maxSize?: string;
  children?: ReactNode[];
}

function SplitPane({defaultSize, minSize, maxSize, children}: SplitPaneProps) {
  const [paneSize, setPaneSize] = useState(defaultSize);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftPaneRef = useRef<HTMLDivElement | null>(null);
  const rightPaneRef = useRef<HTMLDivElement | null>(null);

  const [test, setTest] = useState({
    leftPaneLeftX: 0,
    leftPaneRightX: 0,
    rightPanelLeftX: 0,
    rightPanelRightX: 0,
    mouseX: 0,
    newPaneSize: "init"
  })

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !containerRef.current) {
      return;
    }

    const leftPaneLeftX = leftPaneRef.current?.offsetLeft || 0;
    const leftPaneRightX = leftPaneLeftX + (leftPaneRef.current?.offsetWidth || 0);
    const rightPanelLeftX = rightPaneRef.current?.offsetLeft || 0;
    const rightPanelRightX = rightPanelLeftX + (rightPaneRef.current?.offsetWidth || 0);

    const mouseX = e.clientX;
    if (mouseX < leftPaneLeftX || mouseX > rightPanelRightX) {
      return;
    }

    const newPaneSize = `${((mouseX - leftPaneLeftX) / (rightPanelRightX - leftPaneLeftX)) * 100}%`;

    setTest({
      leftPaneLeftX,
      leftPaneRightX,
      rightPanelLeftX,
      rightPanelRightX,
      mouseX,
      newPaneSize
    })

    if ((minSize && newPaneSize < minSize) || (maxSize && newPaneSize > maxSize)) {
      return;
    }

    setPaneSize(newPaneSize);
  };


  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <>
      <SplitPaneContainer ref={containerRef}>
        {children && (
          <>
            <ResizablePane style={{flexBasis: paneSize}} minSize={minSize} maxSize={maxSize} ref={leftPaneRef}>
              {children[0]}
            </ResizablePane>
            <Resizer onMouseDown={handleMouseDown}/>
            <ResizablePane style={{flex: 1}} minSize={minSize} maxSize={maxSize} ref={rightPaneRef}>
              {children[1]}
            </ResizablePane>
          </>
        )}
      </SplitPaneContainer>
      <div style={{maxWidth: '500px', wordWrap: 'break-word'}}>{JSON.stringify(test)}</div>
    </>
  );
}

export default SplitPane;
