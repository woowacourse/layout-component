import styled from 'styled-components';

interface ComponentProps {
  rowGap?: string;
  smallRowGap?: string;
  mediumRowGap?: string;
  largeRowGap?: string;
  xLargeRowGap?: string;
  doubleXLargeRowGap?: string;
  gap?: string;
  smallGap?: string;
  mediumGap?: string;
  largeGap?: string;
  xLargeGap?: string;
  doubleXLargeGap?: string;
  height: number;
}

const getPaddingBottom = ({
  gap,
  rowGap = '0',
  responsiveGap,
  responsiveRowGap,
}: {
  gap?: string;
  rowGap?: string;
  responsiveGap?: string;
  responsiveRowGap?: string;
}) => {
  const defaultGap = gap ? gap : rowGap;
  const responseColumnGap = responsiveGap ? responsiveGap : responsiveRowGap;
  if (!responseColumnGap) {
    return defaultGap;
  }

  return responseColumnGap;
};

export const Component = styled.div<ComponentProps>`
  width: 100%;
  padding-bottom: ${({ gap, rowGap = '0' }) => (gap ? gap : rowGap)};
  grid-row-end: ${({ height }) => `span ${height}`};
  height: max-content;

  @media (min-width: 640px) {
    padding-bottom: ${({ gap, rowGap, smallGap, smallRowGap }) =>
      getPaddingBottom({
        gap,
        rowGap,
        responsiveGap: smallGap,
        responsiveRowGap: smallRowGap,
      })};
  }

  @media (min-width: 768px) {
    padding-bottom: ${({ gap, rowGap, mediumGap, mediumRowGap }) =>
      getPaddingBottom({
        gap,
        rowGap,
        responsiveGap: mediumGap,
        responsiveRowGap: mediumRowGap,
      })};
  }

  @media (min-width: 1024px) {
    padding-bottom: ${({ gap, rowGap, largeGap, largeRowGap }) =>
      getPaddingBottom({
        gap,
        rowGap,
        responsiveGap: largeGap,
        responsiveRowGap: largeRowGap,
      })};
  }

  @media (min-width: 1280px) {
    padding-bottom: ${({ gap, rowGap, xLargeGap, xLargeRowGap }) =>
      getPaddingBottom({
        gap,
        rowGap,
        responsiveGap: xLargeGap,
        responsiveRowGap: xLargeRowGap,
      })};
  }

  @media (min-width: 1536px) {
    padding-bottom: ${({ gap, rowGap, doubleXLargeGap, doubleXLargeRowGap }) =>
      getPaddingBottom({
        gap,
        rowGap,
        responsiveGap: doubleXLargeGap,
        responsiveRowGap: doubleXLargeRowGap,
      })};
  }
`;
