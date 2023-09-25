import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { FlexProps } from '.';

type ComponentProps = FlexProps & CommonStyleProps;

export const Component = styled(CommonTag)<ComponentProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;
