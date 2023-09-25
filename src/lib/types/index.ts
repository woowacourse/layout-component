type Pixel = `${number}px`;

type Percent = `${number}%`;

export type Size = Pixel | Percent | 'auto' | number;

export type Gap =
  | {
      columnGap?: Size;
      rowGap?: Size;
    }
  | { gap?: Size };
