import { CSSProperties } from 'react';

export interface DynamicKeyToCssPropMapping {
  [key: string]: keyof CSSProperties;
}

export type ParseClassName = (className: string) => {
  dynamicStyle: CSSProperties;
  staticClassName: string;
};
