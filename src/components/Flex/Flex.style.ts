import { css } from '@emotion/react';
import { FlexProps } from './Flex';

export const getFlexStyle = ({ dir, align, justify, gap }: FlexProps) => {
  return css({
    display: 'flex',
    flexDirection: dir,
    alignItems: align,
    justifyContent: justify,
    gap,
  });
};
