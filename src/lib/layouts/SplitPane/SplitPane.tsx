import {ReactNode, useEffect, useRef, useState} from 'react';
import {ResizablePane, Resizer, SplitPaneContainer} from "./SplitPane.styles.ts";

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

    const leftPaneLeftX = leftPaneRef.current?.getBoundingClientRect().left || 0;
    const rightPanelRightX = rightPaneRef.current?.getBoundingClientRect().right || 0;

    const mouseX = e.clientX;

    if (mouseX < leftPaneLeftX || mouseX > rightPanelRightX) {
      return;
    }

    const newPaneSize = `${((mouseX - leftPaneLeftX) / (rightPanelRightX - leftPaneLeftX)) * 100}%`;

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
  );
}

export default SplitPane;
