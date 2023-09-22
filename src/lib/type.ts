export type ResponsiveStyleType<T> = Partial<{
  desktop: T;
  tablet: T | [number, T];
  mobile: T | [number, T];
}>;
