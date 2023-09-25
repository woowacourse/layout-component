import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styled from 'styled-components';

const SplitPane: React.FC<{
  defaultSize?: string;
  minSize?: string;
  maxSize?: string;
  children: ReactNode[];
}> = ({ defaultSize = '50%', minSize = '10%', maxSize = '90%', children }) => {
  const [size, setSize] = useState(defaultSize);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resize = (event: MouseEvent) => {
      if (isResizing && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newWidth = ((event.clientX - containerRect.left) / containerRect.width) * 100;

        const min = parseFloat(minSize);
        const max = parseFloat(maxSize);

        if (newWidth >= min && newWidth <= max) {
          setSize(`${newWidth}%`);
        }
      }
    };

    const endResize = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', endResize);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', endResize);
    };
  }, [isResizing, minSize, maxSize]);

  const startResize: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  return (
    <PaneContainer ref={containerRef}>
      <Pane size={size}>{children && children[0]}</Pane>
      <Resizer style={{ left: `calc(${size} - 2.5px)` }} onMouseDown={startResize} />
      <Pane size={`calc(100% - ${size})`}>{children && children[1]}</Pane>
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

const Pane = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  overflow: auto;
`;

const Resizer = styled.div`
  cursor: ew-resize;
  background-color: #ccc;
  height: 100%;
  width: 5px;
  position: absolute;
  top: 0;
`;