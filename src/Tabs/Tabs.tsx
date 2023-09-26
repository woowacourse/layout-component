import { cloneElement, useId } from 'react';

import type {
  AsChild,
  PropsWithAsChild,
  PropsWithRenderProps,
} from '../utils/compound';
import { getValidProps } from '../utils/compound';
import { composeEventHandlers } from '../utils/dom';
import TabsProvider, { useTabsContext } from './TabsContext';
import { ContentProps, ListProps, TabProps, TriggerProps } from './Tabs.type';

const Tabs = (props: PropsWithAsChild<TabProps>) => {
  const { children, ...restProps } = props;

  return <TabsProvider value={restProps}>{children}</TabsProvider>;
};

const List = (props: PropsWithAsChild<ListProps>) => {
  const { resolveChildren, ...restProps } = getValidProps(props);

  const { asChild, child, children } = resolveChildren({});

  const listA11y = {
    role: 'tablist',
    'aria-orientation': 'horizontal',
  } as const;

  const list = asChild ? (
    cloneElement(child, {
      ...restProps,
      ...listA11y,
    })
  ) : (
    <div {...restProps} {...listA11y}>
      {children}
    </div>
  );

  return list;
};

const Trigger = (
  props: PropsWithRenderProps<TriggerProps & AsChild, { selected: boolean }>
) => {
  const {
    resolveChildren,
    value,
    id: idProps,
    onClick: onClickProps,
    ...restProps
  } = getValidProps(props);

  const uuid = useId();

  const { selectedValue, changeTab } = useTabsContext();

  const onTrigger = composeEventHandlers(onClickProps, () => changeTab(value));

  const selected = value === selectedValue;

  const id = idProps ?? `trigger-${value}-${uuid}`;

  const { asChild, child, children } = resolveChildren({ selected });

  const triggerA11y = {
    role: 'tab',
    'aria-selected': selected,
  } as const;

  const trigger = asChild ? (
    cloneElement(child, {
      ...restProps,
      ...triggerA11y,
      onClick: composeEventHandlers(onTrigger, child.props.onClick),
      id,
    })
  ) : (
    <button
      {...restProps}
      {...triggerA11y}
      id={id}
      type="button"
      onClick={onTrigger}>
      {children || 'Tab'}
    </button>
  );

  return trigger;
};

const Content = (props: PropsWithRenderProps<ContentProps>) => {
  const {
    resolveChildren,
    value,
    id: idProps,
    ...restProps
  } = getValidProps(props);

  const uuid = useId();

  const { selectedValue } = useTabsContext();

  const id = idProps ?? `content-${value}-${uuid}`;

  const { asChild, child, children } = resolveChildren({});

  const contentA11y = {
    role: 'tabpanel',
    'aria-orientation': 'horizontal',
  } as const;

  const content = asChild ? (
    cloneElement(child, {
      ...restProps,
      ...contentA11y,
      hidden: selectedValue !== value,
      id,
    })
  ) : (
    <section
      {...restProps}
      {...contentA11y}
      id={id}
      hidden={selectedValue !== value}>
      {children}
    </section>
  );

  return content;
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
