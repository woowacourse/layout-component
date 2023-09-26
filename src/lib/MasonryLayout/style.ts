import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { _MasonryLayoutProps } from '.';

type ComponentProps = _MasonryLayoutProps & CommonStyleProps;

const getGridTemplate = (size: string) => {
  return `repeat(auto-fill, minmax(${size}, 1fr))`;
};

export const Component = styled(CommonTag)<ComponentProps>`
  display: grid;
  grid-template-columns: ${({ itemSize = '1fr' }) => getGridTemplate(itemSize)};

  grid-auto-rows: 1px;
  grid-column-gap: ${({ gap, columnGap = '0' }) => (gap ? gap : columnGap)};
`;
