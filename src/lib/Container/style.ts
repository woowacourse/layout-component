import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { _ContainerProps } from '.';

type ComponentProps = _ContainerProps & CommonStyleProps;

export const Component = styled(CommonTag)<ComponentProps>`
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
`;
