export type ANCHOR = 'left' | 'right' | 'top' | 'bottom';

export type ITEM = {
  icon?: JSX.Element;
  item: string;
  goItem: () => void;
};
