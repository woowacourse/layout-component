import { MaxWidth, MinWidth } from '../types/components/container';
import { numToPixel } from './numToPixel';

export const generateContainerInlineStyle = (minWidth?: MinWidth, maxWidth?: MaxWidth) => ({
  ...(minWidth && { minWidth: numToPixel(minWidth) }),
  ...(maxWidth && { maxWidth: numToPixel(maxWidth) }),
});
