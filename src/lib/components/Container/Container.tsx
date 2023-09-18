import { ComponentPropsWithRef, ElementType } from 'react';
import { CSSProp, CSSProperties, styled } from 'styled-components';

interface Props extends ComponentPropsWithRef<ElementType> {
  /** 컴포넌트의 HTML 태그를 지정하는 속성입니다. 예를 들어, tag="div"로 설정하면 컴포넌트가 <div> 태그로 렌더링됩니다. */
  tag?: keyof JSX.IntrinsicElements;
  /** 컴포넌트의 최소 너비를 지정하는 속성입니다. 단위를 포함하여 입력해주세요.*/
  minWidth?: string;
  /** 컴포넌트의 최대 너비를 지정하는 속성입니다. 단위를 포함하여 입력해주세요.*/
  maxWidth?: string;
  /** 컴포넌트의 최소 높이를 지정하는 속성입니다. 단위를 포함하여 입력해주세요.*/
  minHeight?: string;
  /** 컴포넌트의 최대 높이를 지정하는 속성입니다. 단위를 포함하여 입력해주세요.*/
  maxHeight?: string;
  /** 컴포넌트의 배경색상을 지정하는 속성입니다. */
  backgroundColor?: CSSProperties['backgroundColor'];
  /** 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다. */
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

  width: ${({ width }) => (width ? `${width}` : 'auto')};
  height: ${({ height }) => (height ? `${height}` : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : '#fff')};

  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : 'none')};

  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}` : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : 'none')};

  ${({ css }) => (css ? `${css}` : '')};
`;
