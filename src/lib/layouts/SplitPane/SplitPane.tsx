import {ReactNode} from 'react';
import {ResizablePane, Resizer, SplitPaneContainer} from "./SplitPane.styles.ts";
import {useSplitPane} from "./useSplitPane.ts";

export interface SplitPaneProps {
  defaultSize: string;
  minSize?: string;
  maxSize?: string;
  children?: ReactNode[];
}

function SplitPane({defaultSize, minSize, maxSize, children}: SplitPaneProps) {
  const {
    containerRef,
    leftPaneRef,
    rightPaneRef,
    paneSize,
    handleMouseDown,
  } = useSplitPane(defaultSize, minSize, maxSize);


  return (
    <SplitPaneContainer ref={containerRef}>
      {children?.length === 2 && children && (
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
