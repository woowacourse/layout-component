import {useSplitPane} from "./useSplitPane.ts";
import {isEndsWithPercentage} from "./validatePercentage.ts";
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

  isEndsWithPercentage({defaultSize, minSize, maxSize})

  return (
    <SplitPaneContainer ref={containerRef}>
      {children.length === 2 ? (
        <>
          <ResizablePane style={{flexBasis: paneSize}} $minSize={minSize} $maxSize={maxSize} ref={leftPaneRef}>
            {children[0]}
          </ResizablePane>
          <Resizer onMouseDown={handleMouseDown}/>
          <ResizablePane style={{flex: 1}} $minSize={minSize} $maxSize={maxSize} ref={rightPaneRef}>
            {children[1]}
          </ResizablePane>
        </>
      ) : <div>반드시 2개의 컴포넌트가 존재해야 합니다.</div>}
    </SplitPaneContainer>
  );
}

export default SplitPaneRenderer;
