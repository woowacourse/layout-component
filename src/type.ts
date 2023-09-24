export type Device = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export const breakpoints: Record<Device, number> = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1200,
};

export type DeviceAndValue<Value> = Partial<Record<Device, Value>>;
