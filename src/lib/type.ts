type Device = 'desktop' | 'tablet' | 'mobile';

export type ResponsiveStyleType<T> = Record<Device, T | [number, T]>;
