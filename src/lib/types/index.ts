import { CSSProperties, PropsWithChildren } from 'react';

type OptionalCommonProps = Partial<{
  sx: CSSProperties;
  className: string;
}>;

export interface CommonProps extends PropsWithChildren<OptionalCommonProps> {}

export interface DynamicKeyToCssPropMapping {
  [key: string]: keyof CSSProperties;
}

export type ParseClassName = (
  className: string,
  styles: { readonly [key: string]: string }
) => {
  dynamicStyle: CSSProperties;
  staticClassName: string;
};
