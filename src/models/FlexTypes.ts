export const DIRECTIONS = [
	'row',
	'row-reverse',
	'column',
	'column-reverse',
	'inherit',
	'initial',
	'revert',
	'revert-layer',
	'unset',
] as const;

export type Direction = (typeof DIRECTIONS)[number];

export const JUSTIFIES = [
	'center',
	'start',
	'end',
	'flex-start',
	'flex-end',
	'left',
	'right',
	'normal',
	'space-between',
	'space-around',
	'space-evenly',
	'stretch',
	'safe center',
	'unsafe center',
	'inherit',
	'initial',
	'revert',
	'revert-layer',
	'unset',
] as const;

export type Justify = (typeof JUSTIFIES)[number];

export const ALIGNS = [
	'normal',
	'stretch',
	'center',
	'start',
	'end',
	'flex-start',
	'flex-end',
	'self-start',
	'self-end',
	'baseline',
	'first baseline',
	'last baseline',
	'safe center',
	'unsafe center',
	'inherit',
	'initial',
	'revert',
	'revert-layer',
	'unset',
] as const;

export type Align = (typeof ALIGNS)[number];

export const WRAPS = [
	'nowrap',
	'wrap',
	'wrap-reverse',
	'inherit',
	'initial',
	'revert',
	'revert-layer',
	'unset',
] as const;

export type Wrap = (typeof WRAPS)[number];
