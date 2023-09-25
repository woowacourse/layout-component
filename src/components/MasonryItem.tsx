import type { PropsWithChildren } from 'react';

interface MasonryItemProps {
  onChangeHeight: (height: number) => void;
}

export const MasonryItem = (props: PropsWithChildren<MasonryItemProps>) => {
  const { children, onChangeHeight } = props;

  const resizeObserver = new ResizeObserver((entries) => {
    onChangeHeight(entries[0].contentRect.height);
  });

  const connectObserver = (element: HTMLDivElement | null) => {
    element ? resizeObserver.observe(element) : resizeObserver.disconnect();
  };

  return <div ref={connectObserver}>{children}</div>;
};
