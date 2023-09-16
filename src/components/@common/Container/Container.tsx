import { ComponentPropsWithRef, ElementType } from 'react';
import { CSSProp, styled } from 'styled-components';

interface Props extends ComponentPropsWithRef<ElementType> {
  tag?: keyof JSX.IntrinsicElements;
  minWidth?: number;
  maxWidth?: number;
  backgroundColor?: string;
  css?: CSSProp;
}

const Container = (props: Props) => {
  const { tag, ...restProps } = props;

  return (
    <Tag as={tag} {...restProps}>
      {restProps.children}
    </Tag>
  );
};

export default Container;

const Tag = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : '#fff')};

  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};

  ${({ css }) => (css ? `${css}` : '')};
`;
