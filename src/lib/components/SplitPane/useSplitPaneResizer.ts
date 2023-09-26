import { useState, useEffect, useCallback } from 'react';
import useElementSize from '../../hooks/useElementSize';
import useOffsetMousePosition from '../../hooks/useOffsetMousePosition';
import useIsHolding from '../../hooks/useIsHolding';
import { calculateSizeByNumericParentSize } from '../../utils/calculateSizeByNumericParentSize';
import type { RefObject } from 'react';
import type { Size, Point } from '../../types';

type UseSplitPaneResizerProps = {
  defaultSize: Size;
  minSize: Size;
  maxSize: Size;
  direction: 'row' | 'column';
  rootRef: RefObject<HTMLElement>;
  resizerRef: RefObject<HTMLElement>;
};

const useSplitPaneResizer = (props: UseSplitPaneResizerProps) => {
  const { defaultSize, minSize, maxSize, direction, rootRef, resizerRef } =
    props;
  const { width: rootWidth, height: rootHeight } = useElementSize(rootRef);
  const { offsetX, offsetY } = useOffsetMousePosition(rootRef);
  const { isHolding } = useIsHolding(resizerRef);
  const [resizerPoint, setResizerPoint] = useState<Point>({
    x:
      direction === 'row'
        ? calculateSizeByNumericParentSize(defaultSize, rootWidth)
        : 0,
    y:
      direction === 'column'
        ? calculateSizeByNumericParentSize(defaultSize, rootHeight)
        : 0,
  });

  const calculateResizerPoint = useCallback(() => {
    if (!isHolding) {
      return;
    }

    if (direction === 'row') {
      const numericMinWidth = calculateSizeByNumericParentSize(
        minSize,
        rootWidth
      );
      const numericMaxWidth = calculateSizeByNumericParentSize(
        maxSize,
        rootWidth
      );
      const newResizerX = Math.min(
        Math.max(offsetX, numericMinWidth),
        numericMaxWidth
      );

      setResizerPoint(() => ({ x: newResizerX, y: 0 }));

      return;
    }

    const numericMinWidth = calculateSizeByNumericParentSize(
      minSize,
      rootHeight
    );
    const numericMaxWidth = calculateSizeByNumericParentSize(
      maxSize,
      rootHeight
    );
    const newResizerY = Math.min(
      Math.max(offsetY, numericMinWidth),
      numericMaxWidth
    );

    setResizerPoint(() => ({ x: 0, y: newResizerY }));

    return;
  }, [
    isHolding,
    direction,
    minSize,
    maxSize,
    rootHeight,
    offsetY,
    rootWidth,
    offsetX,
  ]);

  useEffect(() => {
    calculateResizerPoint();
  }, [calculateResizerPoint]);

  return {
    resizerX: resizerPoint.x,
    resizerY: resizerPoint.y,
  };
};

export default useSplitPaneResizer;
