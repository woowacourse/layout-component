import type { ContentSectioningTags } from '~/types';
import * as S from './Flex.styled';

export interface FlexProps {
  children: React.ReactNode;
  as?: ContentSectioningTags;
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  wrap?: React.CSSProperties['flexWrap'];
  gap?: React.CSSProperties['gap'];
  css?: React.CSSProperties;
}

export const Flex = (props: FlexProps) => {
  const {
    children,
    as = 'div',
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'nowrap',
    gap = 0,
    css,
  } = props;

  return (
    <S.FlexRoot
      as={as}
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      css={css}
    >
      {children}
    </S.FlexRoot>
  );
};
