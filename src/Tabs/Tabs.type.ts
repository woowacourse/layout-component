import { ComponentPropsWithoutRef } from 'react';

interface TabProps {
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

interface ListProps extends ComponentPropsWithoutRef<'div'> {}

interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  value: string;
}

interface ContentProps extends ComponentPropsWithoutRef<'section'> {
  value: string;
}

export type { TabProps, ListProps, TriggerProps, ContentProps };
