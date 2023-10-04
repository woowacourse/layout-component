import { SplitPaneProps } from './SplitPane';

import { Children } from 'react';

export const getPosition = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
  if (event instanceof TouchEvent) {
    return event.touches[0].clientX;
  } else {
    return (event as MouseEvent).clientX;
  }
};

type RequiredSplitPane = Required<SplitPaneProps>;

export const validateArgs = ({
  defaultSize,
  minSize,
  maxSize,
  children,
}: RequiredSplitPane) => {
  // Children 개수 검사
  if (Children.count(children) !== 2) {
    console.error('SplitPane의 children은 2개만 가능합니다.');
  }

  // min, max, default size 검사
  if (minSize >= maxSize) {
    console.error('minSize는 maxSize보다 작아야 합니다.');
  }

  if (defaultSize < minSize || defaultSize > maxSize) {
    console.error('defaultSize는 minSize 이상, maxSize 이하로 설정해야합니다.');
  }

  const maxSizeConverted =
    typeof maxSize == 'string' ? parseFloat(maxSize) : maxSize;
  const minSizeConverted =
    typeof minSize == 'string' ? parseFloat(minSize) : minSize;
  const defaultSizeConverted =
    typeof defaultSize == 'string' ? parseFloat(defaultSize) : defaultSize;

  if (typeof maxSize === 'string' && maxSizeConverted > 100) {
    console.error('maxSize는 100%이하여야 합니다.');
  }

  if (
    maxSizeConverted < 0 ||
    minSizeConverted < 0 ||
    defaultSizeConverted < 0
  ) {
    console.error(
      'maxSize, minSize, defaultSize 모두 0%(0px) 이상으로 이어야 합니다.'
    );
  }
};
