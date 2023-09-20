import type { BREAK_POINTS } from '@constants/index';

export type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch';

export type ContentPosition = 'center' | 'end' | 'start';

export type SelfPosition = ContentPosition | 'self-end' | 'self-start';

export type FlexContentPosition = 'flex-end' | 'flex-start';

export type BreakPoints = keyof typeof BREAK_POINTS;

export type ResponsiveValue = Partial<{
  [key in BreakPoints]: string | number;
}>;
