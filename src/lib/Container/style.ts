import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../../style/common';

interface ComponentProps extends CommonStyleProps {
  minWidth?: string;
  maxWidth?: string;
}

export const Component = styled(CommonTag)<ComponentProps>`
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
`;
