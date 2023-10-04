import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { _MasonryLayoutProps } from '.';

type ComponentProps = _MasonryLayoutProps & CommonStyleProps;

const getGridTemplate = (responsiveSize?: number) => {
  if (!responsiveSize) {
    return;
  }

  return `repeat(auto-fill, minmax(${responsiveSize}px, 1fr))`;
};

const getGridColumGap = ({
  responsiveGap,
  responsiveColumnGap,
}: {
  gap?: string;
  columnGap?: string;
  responsiveGap?: string;
  responsiveColumnGap?: string;
}) => {
  const responseColumnGap = responsiveGap ? responsiveGap : responsiveColumnGap;

  if (!responseColumnGap) {
    return;
  }

  return responseColumnGap;
};

export const Component = styled(CommonTag)<ComponentProps>`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${({ itemSize }) =>
    `repeat(auto-fill, minmax(${itemSize}px, 1fr))`};

  grid-auto-rows: 1px;
  grid-column-gap: ${({ gap, columnGap = '0' }) => (gap ? gap : columnGap)};

  @media (min-width: 640px) {
    grid-template-columns: ${({ smallItemSize }) =>
      getGridTemplate(smallItemSize)};
    grid-column-gap: ${({ smallGap, smallColumnGap }) =>
      getGridColumGap({
        responsiveGap: smallGap,
        responsiveColumnGap: smallColumnGap,
      })};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ mediumItemSize }) =>
      getGridTemplate(mediumItemSize)};
    grid-column-gap: ${({ mediumGap, mediumColumnGap }) =>
      getGridColumGap({
        responsiveGap: mediumGap,
        responsiveColumnGap: mediumColumnGap,
      })};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ largeItemSize }) =>
      getGridTemplate(largeItemSize)};
    grid-column-gap: ${({ largeGap, largeColumnGap }) =>
      getGridColumGap({
        responsiveGap: largeGap,
        responsiveColumnGap: largeColumnGap,
      })};
  }

  @media (min-width: 1280px) {
    grid-template-columns: ${({ xLargeItemSize }) =>
      getGridTemplate(xLargeItemSize)};
    grid-column-gap: ${({ xLargeGap, xLargeColumnGap }) =>
      getGridColumGap({
        responsiveGap: xLargeGap,
        responsiveColumnGap: xLargeColumnGap,
      })};
  }

  @media (min-width: 1536px) {
    grid-template-columns: ${({ doubleXLargeItemSize }) =>
      getGridTemplate(doubleXLargeItemSize)};
    grid-column-gap: ${({ doubleXLargeGap, doubleXLargeColumnGap }) =>
      getGridColumGap({
        responsiveGap: doubleXLargeGap,
        responsiveColumnGap: doubleXLargeColumnGap,
      })};
  }
`;
