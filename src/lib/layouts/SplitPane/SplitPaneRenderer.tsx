import {useSplitPane} from "./useSplitPane.ts";
import {
  checkChildrenLength,
  checkDefaultSizeGreaterThanMaxSize,
  checkDefaultSizeLessThanMinSize,
  checkEndsWithPercentage,
} from "./validate.ts";
import {SplitPaneProps} from "./SplitPane.tsx";
import {ResizablePane, Resizer, SplitPaneContainer} from "./SplitPane.styles.ts";

function SplitPaneRenderer({defaultSize, minSize = '10%', maxSize = '90%', children}: SplitPaneProps) {

  const {
    containerRef,
    leftPaneRef,
    rightPaneRef,
    paneSize,
    handleMouseDown,
  } = useSplitPane(defaultSize, minSize, maxSize);

  checkEndsWithPercentage({defaultSize, minSize, maxSize});
  checkDefaultSizeLessThanMinSize({defaultSize, minSize});
  checkDefaultSizeGreaterThanMaxSize({defaultSize, maxSize});

  checkChildrenLength(children);

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
