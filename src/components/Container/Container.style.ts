import { css } from '@emotion/react';
import { ContainerProps } from './Container';

export const containerStyle = ({ minWidth, maxWidth }: ContainerProps<'div'>) =>
  css({
    display: 'block',

    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,

    marginLeft: 'auto',
    marginRight: 'auto',

    whiteSpace: 'normal',
  });
