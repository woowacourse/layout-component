import { ComponentPropsWithoutRef, MouseEventHandler, PropsWithChildren, memo } from 'react';
import { styled } from 'styled-components';
import TabsProvider, { useTabsContext } from '../../context/TabsContext';
import { Flex } from '../..';

export type TabDirection = 'horizontal' | 'vertical';
export type TabAlign = 'start' | 'center' | 'end' | 'between';

export interface TabsProps extends PropsWithChildren {
  defaultTabId: string;
  direction?: TabDirection;
  align?: TabAlign;
}

const Tabs = (props: TabsProps) => {
  const { defaultTabId, direction, align, children } = props;
  const flexDirection = direction === 'horizontal' ? 'column' : 'row';

  return (
    <TabsProvider defaultTabId={defaultTabId} direction={direction} align={align}>
      <Flex direction={flexDirection}>{children}</Flex>
    </TabsProvider>
  );
};

interface ListProps extends ComponentPropsWithoutRef<'ul'> {}

const List = (props: ListProps) => {
  const { children, ...restProps } = props;
  const { direction, align } = useTabsContext();

  const flexDirection = direction === 'horizontal' ? 'row' : 'column';
  const flexAlign = getFlexAlign(align);

  return (
    <Flex
      tag='ul'
      direction={flexDirection}
      justify={flexAlign}
      align='center'
      role='tablist'
      css={{ borderBottom: '2px solid #e3e3e3' }}
      {...restProps}
    >
      {children}
    </Flex>
  );
};

interface TabProps extends ComponentPropsWithoutRef<'li'> {
  tabPanelId: string;
}

const Tab = (props: TabProps) => {
  const { tabPanelId, children, ...restProps } = props;
  const { selectedTabId, changeTab } = useTabsContext();
  const isSelected = tabPanelId === selectedTabId.slice(0, -4); // '-tab'을 제외한 부분 추출

  const onClickTab: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();

    changeTab(event.currentTarget.id);
  };

  return (
    <TabWrapper
      id={`${tabPanelId}-tab`}
      role='tab'
      aria-selected={isSelected}
      aria-controls={tabPanelId}
      onClick={onClickTab}
      {...restProps}
    >
      <a href={tabPanelId}>{children}</a>
    </TabWrapper>
  );
};

interface PanelProps extends ComponentPropsWithoutRef<'section'> {
  id: string;
}

const Panel = (props: PanelProps) => {
  const { id, children, ...restProps } = props;
  const { selectedTabId } = useTabsContext();
  const isSelected = id === selectedTabId.slice(0, -4); // '-tab'을 제외한 부분 추출

  return (
    isSelected && (
      <TabPanelWrapper id={id} role='tabpanel' aria-labelledby={`${id}-tab`} aria-expanded={isSelected} {...restProps}>
        {children}
      </TabPanelWrapper>
    )
  );
};

Tabs.List = List;
Tabs.Tab = memo(Tab);
Tabs.Panel = Panel;

export default Tabs;

const getFlexAlign = (align: TabAlign) => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    default:
      return 'space-between';
  }
};

const TabWrapper = styled.li<Omit<TabProps, 'tabPanelId'>>`
  padding: 1.6rem;
`;

const TabPanelWrapper = styled.section<PanelProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
