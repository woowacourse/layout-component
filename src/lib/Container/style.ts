import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../../style/common';
import { ContainerProps } from '.';

type ComponentProps = ContainerProps & CommonStyleProps;

export const Component = styled(CommonTag)<ComponentProps>`
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
`;
