import { ComponentPropsWithRef, ElementType } from 'react';
import { CSSProp, styled } from 'styled-components';

interface Props extends ComponentPropsWithRef<ElementType> {
  tag?: keyof JSX.IntrinsicElements;
  display?: 'flex' | 'inline-flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  css?: CSSProp;
}

const Flex = (props: Props) => {
  const { tag, ...restProps } = props;

  return (
    <Tag as={tag} {...restProps}>
      {restProps.children}
    </Tag>
  );
};

export default Flex;

const Tag = styled.div<Props>`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};

  ${({ css }) => (css ? `${css}` : '')};
`;
