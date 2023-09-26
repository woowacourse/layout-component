import React from 'react';

export interface MasonryLayoutProps {
  width: string | number;
  itemWidth?: string;
  rowGap?: string | number;
  columnGap?: string | number;
  column: number | 'auto-fit';
  borderRadius?: number | string;
}

export interface MasonryItemProps {
  rowGap?: string | number;
  borderRadius?: string | number;
}

export interface MasonryColumn {
  height: number;
  contents: React.ReactNode;
}

export enum Units {
  'px' = 'px',
  '%' = '%',
  'vh' = 'vh',
  'vw' = 'vw',
}

export type ValidUnits = keyof typeof Units;

export interface ParsedValueShape {
  value: number;
  unit: ValidUnits;
}
