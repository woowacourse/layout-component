import type { CSSProperties as CSS, ReactElement } from 'react';
import { Children, useState } from 'react';

import { type ContainerProps, stylingContainer } from './Container';
import { Flex } from './Flex';
import { MasonryItem } from './MasonryItem';

interface MasonryProps extends ContainerProps {
  children: ReactElement | ReactElement[];
  columns?: number;
  gap?: number;
}

interface Column {
  height: number;
  itemList: {
    index: number;
    element: ReactElement;
  }[];
}

const DEFAULT_COLUMNS = 2;
const DEFAULT_GAP = 8;

export const Masonry = (props: MasonryProps) => {
  const { children, as: Element = 'div', columns = DEFAULT_COLUMNS, gap = DEFAULT_GAP } = props;

  const [itemHeightMap, setItemHeightMap] = useState<number[]>([]);

  const onChangeItemHeight = (index: number) => (height: number) => {
    itemHeightMap[index] = height;
    setItemHeightMap([...itemHeightMap]);
  };

  const columnMap: Column[] = Array.from({ length: columns }, () => ({ height: 0, itemList: [] }));

  Children.map(children, (child: ReactElement, index) => {
    const shortestColumn = columnMap.reduce((a, b) => (a.height > b.height ? b : a));
    shortestColumn.itemList.push({ index, element: child });
    shortestColumn.height += itemHeightMap[index] + gap;
  });

  return (
    <Element style={stylingMasonry(props)}>
      {columnMap.map(({ itemList }, index) => (
        <Flex key={index} direction="column" gap={gap}>
          {itemList.map(({ index, element }) => (
            <MasonryItem key={index} onChangeHeight={onChangeItemHeight(index)}>
              {element}
            </MasonryItem>
          ))}
        </Flex>
      ))}
    </Element>
  );
};

const stylingMasonry = (props: MasonryProps): CSS => {
  const { columns = DEFAULT_COLUMNS, gap = DEFAULT_GAP } = props;

  return {
    ...stylingContainer(props),
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };
};
