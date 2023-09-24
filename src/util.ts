import { breakpoints } from './type';
import type { Device, DeviceAndValue } from './type';

export const genResponsiveStyle = (property: string, deviceAndValue: unknown) => {
  if (!deviceAndValue || typeof deviceAndValue !== 'object') return '';

  return Object.entries(deviceAndValue).reduce((acc, [device, value]) => {
    if (!value) return acc;

    const breakpoint = breakpoints[device as Device];

    if (device === 'mobile') return acc + `${property}: ${value};`;
    return acc + `@media screen and (min-width: ${breakpoint}px) { ${property}: ${value}; }`;
  }, '');
};
