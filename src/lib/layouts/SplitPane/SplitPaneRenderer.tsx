import {useSplitPane} from "./useSplitPane.ts";
import {checkValidProps,} from "./validate.ts";
import {SplitPaneProps} from "./SplitPane.tsx";
import {ResizablePane, Resizer, SplitPaneContainer} from "./SplitPane.styles.ts";

function SplitPaneRenderer({defaultSize, minSize, maxSize, children}: SplitPaneProps) {

  const {
    containerRef,
    leftPaneRef,
    rightPaneRef,
    paneSize,
    handleMouseDown,
  } = useSplitPane(defaultSize, minSize, maxSize);

  checkValidProps({defaultSize, minSize, maxSize, children});

  return (
    <SplitPaneContainer ref={containerRef}>
      <ResizablePane $size={paneSize} ref={leftPaneRef}>
        {children[0]}
      </ResizablePane>
      <Resizer onMouseDown={handleMouseDown}/>
      <ResizablePane $size={`calc(100% - ${paneSize} - 3px)`} ref={rightPaneRef}>
        {children[1]}
      </ResizablePane>
    </SplitPaneContainer>
  );
}

export default SplitPaneRenderer;
