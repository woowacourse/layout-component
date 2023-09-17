import { numToPixel } from './numToPixel';

import type { MaxWidth, MinWidth } from '../types/components/container';

export const generateContainerInlineStyle = (minWidth?: MinWidth, maxWidth?: MaxWidth) => ({
  ...(minWidth && { minWidth: numToPixel(minWidth) }),
  ...(maxWidth && { maxWidth: numToPixel(maxWidth) }),
});
