import { style, createVar } from '@vanilla-extract/css';

export const flexDirection = createVar();
export const justifyContent = createVar();
export const alignItems = createVar();
export const flexWrap = createVar();
export const flexGap = createVar();

const flexOption = {
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  gap: flexGap,
};

export const inlineFlex = style({
  display: 'inline-flex',
  ...flexOption,
});

export const flex = style({
  display: 'flex',
  ...flexOption,
});
