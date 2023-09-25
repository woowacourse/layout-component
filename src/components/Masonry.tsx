import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';

import type { CSSProperties as CSS, PropsWithChildren, PropsWithRef } from 'react';

import { type ContainerProps, stylingContainer } from './Container';
import { Flex } from './Flex';

interface MasonryProps extends ContainerProps {
  children: React.ReactElement[];
  axisCount?: number;
}

interface Axis {
  children: React.ReactElement[];
  height: number;
}

export const Masonry = (props: MasonryProps) => {
  const { children, as: Element = 'div', axisCount = 2 } = props;

  const childrenHeightRef = useRef<number[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const axisMap: Axis[] = Array.from({ length: axisCount }, () => ({ height: 0, children: [] }));

  if (isFirstRender) {
    axisMap[0].children = children;
  } else {
    Children.map(children, (child: React.ReactElement, index) => {
      const shortestIndex = Number(
        Object.entries(axisMap).sort(([, a], [, b]) => a.height - b.height)[0][0]
      );

      axisMap[shortestIndex].children.push(child);
      axisMap[shortestIndex].height += childrenHeightRef.current[index];
    });
  }

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const style: CSS = {
    ...stylingContainer(props),

    display: 'grid',
    gridTemplateColumns: `repeat(${axisCount}, 1fr)`,
    gap: '8px',
    height: isFirstRender ? '0' : 'auto',
  };

  return (
    <Element style={style}>
      {axisMap.map(({ children }, index) => (
        <Flex key={index} direction="column" gap={8}>
          {Children.map(children, (child, index) => (
            <MasonryItem
              refCallback={(element) => {
                if (element) childrenHeightRef.current[index] = element.scrollHeight;
              }}
            >
              {child}
            </MasonryItem>
          ))}
        </Flex>
      ))}
    </Element>
  );
};

interface MasonryItemProps {
  refCallback: (element: HTMLDivElement | null) => void;
}

export const MasonryItem = (props: PropsWithChildren<MasonryItemProps>) => {
  const { children, refCallback } = props;

  const style: CSS = {
    width: '100%',
  };

  return (
    <div style={style} ref={refCallback}>
      {children}
    </div>
  );
};
