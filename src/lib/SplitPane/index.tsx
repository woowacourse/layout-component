import styled from '@emotion/styled';
import React, { HTMLAttributes, useState } from 'react';

type PercentageString = `${number}%`;

interface SplitPaneProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  defaultSize?: PercentageString;
  minSize?: PercentageString;
  maxSize?: PercentageString;
  firstPane: JSX.Element;
  secondPane: JSX.Element;
}

export default function SplitPane({
  width,
  defaultSize = '20%',
  minSize = '10%',
  maxSize = '90%',
  firstPane,
  secondPane,
}: SplitPaneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedFirstPaneWidth, setDraggedFirstPaneWidth] = useState(0);

  const defaultSizeNumber = extractNumberFromPercentage(defaultSize);
  const [firstPanelWidth, setFirstPanelWidth] = useState(
    width * defaultSizeNumber
  );
  const minSizeNumber = extractNumberFromPercentage(minSize);
  const maxSizeNumber = extractNumberFromPercentage(maxSize);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggedFirstPaneWidth(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const offsetX = e.clientX - draggedFirstPaneWidth;
      const newWidth = firstPanelWidth + offsetX;

      if (newWidth < width * minSizeNumber) {
        setFirstPanelWidth(width * minSizeNumber);
        return;
      }

      if (newWidth > width * maxSizeNumber) {
        setFirstPanelWidth(width * maxSizeNumber);
        return;
      }

      setFirstPanelWidth(newWidth);
      setDraggedFirstPaneWidth(e.clientX);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isDragging) setIsDragging(false);
  };

  return (
    <Container $size={width + 'px'} $minSize={minSize} $maxSize={maxSize}>
      <FirstPane
        $size={firstPanelWidth + 'px'}
        $minSize={minSize}
        $maxSize={maxSize}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {firstPane}
      </FirstPane>
      <SecondPane
        $size={width - firstPanelWidth + 'px'}
        $minSize={minSize}
        $maxSize={maxSize}
      >
        {secondPane}
      </SecondPane>
    </Container>
  );
}

const Container = styled.div<{
  $size: string;
  $minSize: string;
  $maxSize: string;
}>`
  display: flex;
  width: ${(props) => props.$size};
  border: 2px solid #e7e7e7;
  border-radius: 7px;
`;

const FirstPane = styled.div<{
  $size: string;
  $minSize: PercentageString;
  $maxSize: PercentageString;
}>`
  min-width: ${({ $minSize }) => $minSize};
  max-width: ${({ $maxSize }) => $maxSize};

  width: ${({ $size }) => $size};
  border-right: 0.7px solid black;

  cursor: ew-resize;
`;

const SecondPane = styled.div<{
  $size: string;
  $minSize: PercentageString;
  $maxSize: PercentageString;
}>`
  min-width: ${({ $minSize }) => $minSize};
  max-width: ${({ $maxSize }) => $maxSize};

  width: ${({ $size }) => $size};
`;

function extractNumberFromPercentage(percentageString: string) {
  const match = percentageString.match(/\d+/);
  if (match) {
    const percentageValue = parseInt(match[0], 10);
    return percentageValue / 100;
  }
  return 0;
}
