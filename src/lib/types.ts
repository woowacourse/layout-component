export type GapFormat = number | `${number}px` | `${number}em` | `${number}rem`;

export type Gap =
  | {
      row: GapFormat;
      column: GapFormat;
    }
  | GapFormat;
