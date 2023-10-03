import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import getPosition from './utils';

const SplitPane: React.FC<{
  defaultSize?: string | number;
  minSize?: string | number;
  maxSize?: string | number;
  children: ReactNode[];
}> = ({ defaultSize = '50%', minSize = '20%', maxSize = '80%', children }) => {
  const [size, setSize] = useState(() => {
    if (typeof defaultSize === 'number') {
      return `${defaultSize}px`;
    }

    return defaultSize;
  });

  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resize = (event: MouseEvent | TouchEvent) => {
      if (isResizing && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const position = getPosition(event);

        if (typeof minSize === 'string' && typeof maxSize === 'string') {
          const newWidth =
            ((position - containerRect.left) / containerRect.width) * 100;

          const min = parseFloat(minSize);
          const max = parseFloat(maxSize);

          if (newWidth >= min && newWidth <= max) {
            setSize(`${newWidth}%`);
          }
        } else if (typeof minSize === 'number' && typeof maxSize === 'number') {
          const newWidth = position - containerRect.left;

          if (newWidth >= minSize && newWidth <= maxSize) {
            setSize(`${newWidth}px`);
          }
        }
      }
    };

    const endResize = () => {
      setIsResizing(false);
    };
    window.addEventListener('touchmove', resize);
    window.addEventListener('touchend', endResize);
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', endResize);

    return () => {
      window.removeEventListener('touchmove', resize);
      window.removeEventListener('touchend', endResize);
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', endResize);
    };
  }, [isResizing, minSize, maxSize]);

  const startResize = () => {
    setIsResizing(true);
  };

  return (
    <PaneContainer ref={containerRef}>
      <Pane $size={size}>{children?.[0]}</Pane>
      <Resizer
        $size={size}
        onMouseDown={startResize}
        onTouchStart={startResize}
      />
      <Pane $size={`calc(100% - ${size} - 2.5px)`}>{children?.[1]}</Pane>
    </PaneContainer>
  );
};

export default SplitPane;

const PaneContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Pane = styled.div<{ $size: string }>`
  width: ${(props) => props.$size};
  overflow: auto;

  & > * {
    height: 100vh;
  }
`;

const Resizer = styled.div<{ $size: string }>`
  cursor: ew-resize;
  background-color: #ccc;
  height: 100%;
  width: 5px;
  position: absolute;
  top: 0;
  left: calc(${(props) => props.$size} - 2.5px);
`;
