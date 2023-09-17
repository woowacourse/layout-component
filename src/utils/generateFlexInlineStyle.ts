import { CSSProperties } from 'react';
import { flexCssPropMappings } from '../constants/components/flex';

import type { Gap } from '../types/components/common';
import type { Align, Direction, Justify } from '../types/components/flex';

export const generateFlexInlineStyle = (
  direction?: Direction,
  justify?: Justify,
  align?: Align,
  gap?: Gap
): CSSProperties => ({
  display: 'flex',
  ...(direction && { flexDirection: flexCssPropMappings.direction[direction] }),
  ...(justify && { justifyContent: flexCssPropMappings.justify[justify] }),
  ...(align && { alignItems: flexCssPropMappings.align[align] }),
  ...(gap && { gap }),
});
