import { Children } from 'react';
import { ContainerProps } from '../../types/component';
import { useTabLayout } from './useTabLayout';
import Tabs from './Tabs';
import Panels from './Panels';

interface Props extends Omit<ContainerProps, 'display'> {
  tabs: string[];
}

export default function TabLayout({
  tabs,
  position,
  top,
  right,
  bottom,
  left,
  width = '100%',
  height = '100%',
  minWidth,
  maxWidth = '100%',
  margin,
  padding,
  border,
  borderRadius,
  backgroundColor,
  color,
  overflow,
  cursor,
  opacity,
  zIndex,
  children,
  ...rest
}: Props) {
  const { activeTab, activateTab } = useTabLayout({
    tabs: tabs.length,
    panel: Children.count(children),
  });

  return (
    <div
      style={{
        position,
        top,
        right,
        bottom,
        left,
        width,
        height,
        minWidth,
        maxWidth,
        margin,
        padding,
        border,
        borderRadius,
        backgroundColor,
        color,
        overflow,
        cursor,
        opacity,
        zIndex,
      }}
      {...rest}
    >
      <Tabs tabs={tabs} activateTab={activateTab} />
      <Panels activeTab={activeTab}>{children}</Panels>
    </div>
  );
}
