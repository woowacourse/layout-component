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
  responsiveGap,
  responsiveRowGap,
}: {
  responsiveGap?: string;
  responsiveRowGap?: string;
}) => {
  const responseColumnGap = responsiveGap ? responsiveGap : responsiveRowGap;

  if (!responseColumnGap) {
    return;
  }

  return responseColumnGap;
};

export const Component = styled.div<ComponentProps>`
  width: 100%;
  height: max-content;
  padding-bottom: ${({ gap, rowGap = '0' }) => (gap ? gap : rowGap)};
  grid-row-end: ${({ height }) => `span ${height}`};

  @media (min-width: 640px) {
    padding-bottom: ${({ smallGap, smallRowGap }) =>
      getPaddingBottom({
        responsiveGap: smallGap,
        responsiveRowGap: smallRowGap,
      })};
  }

  @media (min-width: 768px) {
    padding-bottom: ${({ mediumGap, mediumRowGap }) =>
      getPaddingBottom({
        responsiveGap: mediumGap,
        responsiveRowGap: mediumRowGap,
      })};
  }

  @media (min-width: 1024px) {
    padding-bottom: ${({ largeGap, largeRowGap }) =>
      getPaddingBottom({
        responsiveGap: largeGap,
        responsiveRowGap: largeRowGap,
      })};
  }

  @media (min-width: 1280px) {
    padding-bottom: ${({ xLargeGap, xLargeRowGap }) =>
      getPaddingBottom({
        responsiveGap: xLargeGap,
        responsiveRowGap: xLargeRowGap,
      })};
  }

  @media (min-width: 1536px) {
    padding-bottom: ${({ doubleXLargeGap, doubleXLargeRowGap }) =>
      getPaddingBottom({
        responsiveGap: doubleXLargeGap,
        responsiveRowGap: doubleXLargeRowGap,
      })};
  }
`;
