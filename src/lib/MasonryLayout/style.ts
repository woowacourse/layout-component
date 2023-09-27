import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { _MasonryLayoutProps } from '.';

type ComponentProps = _MasonryLayoutProps & CommonStyleProps;

const getGridTemplate = (size: number, responsiveSize?: number) => {
  if (!responsiveSize) {
    return `repeat(auto-fill, minmax(${size}px, 1fr))`;
  }

  return `repeat(auto-fill, minmax(${responsiveSize}px, 1fr))`;
};

const getGridColumGap = ({
  gap,
  columnGap = '0',
  responsiveGap,
  responsiveColumnGap,
}: {
  gap?: string;
  columnGap?: string;
  responsiveGap?: string;
  responsiveColumnGap?: string;
}) => {
  const defaultGap = gap ? gap : columnGap;
  const responseColumnGap = responsiveGap ? responsiveGap : responsiveColumnGap;
  if (!responseColumnGap) {
    return defaultGap;
  }

  return responseColumnGap;
};

export const Component = styled(CommonTag)<ComponentProps>`
  display: grid;
  grid-template-columns: ${({ itemSize }) =>
    `repeat(auto-fill, minmax(${itemSize}px, 1fr))`};

  grid-auto-rows: 1px;
  grid-column-gap: ${({ gap, columnGap = '0' }) => (gap ? gap : columnGap)};

  @media (min-width: 640px) {
    grid-template-columns: ${({ itemSize, smallItemSize }) =>
      getGridTemplate(itemSize, smallItemSize)};
    grid-column-gap: ${({ gap, columnGap, smallGap, smallColumnGap }) =>
      getGridColumGap({
        gap,
        columnGap,
        responsiveGap: smallGap,
        responsiveColumnGap: smallColumnGap,
      })};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ itemSize, mediumItemSize }) =>
      getGridTemplate(itemSize, mediumItemSize)};
    grid-column-gap: ${({ gap, columnGap, mediumGap, mediumColumnGap }) =>
      getGridColumGap({
        gap,
        columnGap,
        responsiveGap: mediumGap,
        responsiveColumnGap: mediumColumnGap,
      })};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ itemSize, largeItemSize }) =>
      getGridTemplate(itemSize, largeItemSize)};
    grid-column-gap: ${({ gap, columnGap, largeGap, largeColumnGap }) =>
      getGridColumGap({
        gap,
        columnGap,
        responsiveGap: largeGap,
        responsiveColumnGap: largeColumnGap,
      })};
  }

  @media (min-width: 1280px) {
    grid-template-columns: ${({ itemSize, xLargeItemSize }) =>
      getGridTemplate(itemSize, xLargeItemSize)};
    grid-column-gap: ${({ gap, columnGap, xLargeGap, xLargeColumnGap }) =>
      getGridColumGap({
        gap,
        columnGap,
        responsiveGap: xLargeGap,
        responsiveColumnGap: xLargeColumnGap,
      })};
  }

  @media (min-width: 1536px) {
    grid-template-columns: ${({ itemSize, doubleXLargeItemSize }) =>
      getGridTemplate(itemSize, doubleXLargeItemSize)};
    grid-column-gap: ${({
      gap,
      columnGap,
      doubleXLargeGap,
      doubleXLargeColumnGap,
    }) =>
      getGridColumGap({
        gap,
        columnGap,
        responsiveGap: doubleXLargeGap,
        responsiveColumnGap: doubleXLargeColumnGap,
      })};
  }
`;
