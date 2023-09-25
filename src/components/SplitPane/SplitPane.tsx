import { useEffect, useRef, useState, useCallback } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { Flex } from '../..';
import {
  dividerStyle,
  pan1Style,
  pan2Style,
  splitPaneContainerStyle,
} from './SplitPane.styles';

interface SplitPaneProps {
  maxWidth?: number;
  minWidth?: number;
}

const SplitPane = ({ maxWidth = 400, minWidth = 50 }: SplitPaneProps) => {
  const [dividerYLocation, setDividerYLocation] = useState<number | null>(null);
  const dividerRef = useRef(null);
  const leftPaneRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: ReactMouseEvent) => {
    setDividerYLocation(e.clientY);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dividerYLocation === null) return;

      requestAnimationFrame(() => {
        if (leftPaneRef.current) {
          if (e.offsetX < minWidth || e.offsetX > maxWidth) return;

          leftPaneRef.current.style.width = `${e.offsetX}px`;
        }
      });
    },
    [dividerYLocation, maxWidth, minWidth]
  );

  useEffect(() => {
    if (leftPaneRef.current) {
      leftPaneRef.current.style.width = `${leftPaneRef.current.offsetWidth}px`;
      leftPaneRef.current.style.flex = 'none';
    }
  }, []);

  const handleMouseUp = () => {
    setDividerYLocation(null);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <Flex dir="row" css={splitPaneContainerStyle}>
      <div draggable={false} css={pan1Style} ref={leftPaneRef}>
        pan1
      </div>
      <div css={dividerStyle} ref={dividerRef} onMouseDown={handleMouseDown} />
      <div draggable={false} css={pan2Style}>
        pan2
      </div>
    </Flex>
  );
};

export default SplitPane;
