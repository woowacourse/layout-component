import { useState, useEffect, useCallback } from 'react';
import type { RefObject } from 'react';
import useElementSize from '../hooks/useElementSize';
import { Direction } from '../../types';

type UseSplitPaneProps = {
  rootRef: RefObject<HTMLDivElement>;
  direction: Direction;
  defaultRatios: number[];
};

type UseSplitPaneState = {
  elementRatios: number[];
  isHolding: boolean;
  holdingResizerId: number;
  mousePoint: { x: number; y: number };
};

const useSplitPane = (props: UseSplitPaneProps) => {
  const { rootRef, direction, defaultRatios } = props;
  const { width, height } = useElementSize(rootRef);
  const [splitPaneState, setSplitPaneState] = useState<UseSplitPaneState>({
    elementRatios: defaultRatios,
    isHolding: false,
    holdingResizerId: 0,
    mousePoint: { x: 0, y: 0 },
  });
  const { elementRatios, isHolding } = splitPaneState;

  const getCalculatedElementRatios = useCallback(
    (
      resizerId: number,
      elementRatios: number[],
      mouseXDiff: number,
      mouseYDiff: number
    ) => {
      const calculatedElementRatios = elementRatios.slice();
      const mouseDiffRatio =
        direction === 'row'
          ? (mouseXDiff / width) * 100
          : (mouseYDiff / height) * 100;
      const moveDirection = mouseDiffRatio > 0 ? 'right' : 'left';
      const absMouseDiffRatio = Math.abs(mouseDiffRatio);
      let movedMouseDiffRatio = 0;

      if (moveDirection === 'right') {
        for (let i = resizerId + 1; i < calculatedElementRatios.length; i++) {
          const currentMovedDiffRatio = Math.min(
            calculatedElementRatios[i],
            absMouseDiffRatio - movedMouseDiffRatio
          );

          movedMouseDiffRatio += currentMovedDiffRatio;
          calculatedElementRatios[i] -= currentMovedDiffRatio;
        }

        calculatedElementRatios[resizerId] += movedMouseDiffRatio;
      } else {
        for (let i = resizerId; i >= 0; i--) {
          const currentMovedDiffRatio = Math.min(
            calculatedElementRatios[i],
            absMouseDiffRatio - movedMouseDiffRatio
          );

          movedMouseDiffRatio += currentMovedDiffRatio;
          calculatedElementRatios[i] -= currentMovedDiffRatio;
        }

        calculatedElementRatios[resizerId + 1] += movedMouseDiffRatio;
      }

      return calculatedElementRatios;
    },
    [direction, height, width]
  );

  useEffect(() => {
    const handleMouseDown = (event: globalThis.MouseEvent) => {
      event.stopPropagation();

      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      const resizerId = event.target.getAttribute('data-resizer-id');
      const { clientX, clientY } = event;

      if (resizerId) {
        setSplitPaneState((prevSplitPaneState) => {
          return {
            ...prevSplitPaneState,
            isHolding: true,
            holdingResizerId: Number(resizerId),
            mousePoint: { x: clientX, y: clientY },
          };
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      event.stopPropagation();

      if (!isHolding || !(event.target instanceof HTMLElement)) {
        return;
      }

      const { clientX, clientY } = event;

      setSplitPaneState((prevSplitPaneState) => {
        const { mousePoint, holdingResizerId, elementRatios } =
          prevSplitPaneState;
        const mouseXDiff = clientX - mousePoint.x;
        const mouseYDiff = clientY - mousePoint.y;

        const calculatedElementRatios = getCalculatedElementRatios(
          holdingResizerId,
          elementRatios,
          mouseXDiff,
          mouseYDiff
        );

        return {
          ...prevSplitPaneState,
          isHolding: true,
          mousePoint: { x: clientX, y: clientY },
          elementRatios: calculatedElementRatios,
        };
      });
    };

    const handleMouseUp = () => {
      setSplitPaneState((prevSplitPaneState) => {
        return {
          ...prevSplitPaneState,
          isHolding: false,
        };
      });
    };

    const rootElement = rootRef.current;

    if (!rootElement) {
      return;
    }

    rootElement.addEventListener('mousedown', handleMouseDown);
    rootElement.addEventListener('mousemove', handleMouseMove);
    rootElement.addEventListener('mouseup', handleMouseUp);

    return () => {
      rootElement.removeEventListener('mousedown', handleMouseDown);
      rootElement.removeEventListener('mousemove', handleMouseMove);
      rootElement.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    getCalculatedElementRatios,
    isHolding,
    rootRef,
    splitPaneState.isHolding,
  ]);

  return { elementRatios };
};

export default useSplitPane;
