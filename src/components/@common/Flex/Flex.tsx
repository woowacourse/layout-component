import { ComponentPropsWithRef, ElementType } from 'react';
import { CSSProp, styled } from 'styled-components';

interface Props extends ComponentPropsWithRef<ElementType> {
  /** 컴포넌트의 HTML 태그를 지정하는 속성입니다. 예를 들어, tag="div"로 설정하면 컴포넌트가 <div> 태그로 렌더링됩니다. */
  tag?: keyof JSX.IntrinsicElements;
  /** 컨테이너의 표시 방식을 지정하는 속성입니다. 'flex'는 블록요소, 'inline-flex'는 인라인요소로 설정합니다. */
  display?: 'flex' | 'inline-flex';
  /** 컨테이너의 주축(main axis)을 설정하는 속성입니다. 'row'는 수평 방향, 'column'은 수직 방향을 나타냅니다. 'row-reverse' 및 'column-reverse'는 주축 방향의 반대 방향을 나타냅니다. */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**  주축(main axis)의 정렬 방법을 설정하는 속성입니다. 'flex-start'는 시작점 정렬, 'flex-end'는 끝점 정렬, 'center'는 가운데 정렬, 'space-between'은 주축에 여백을 고르게 분배하여 정렬, 'space-around'은 주축 양쪽에 여백을 고르게 분배하여 정렬, 'space-evenly'는 주축 양쪽에 동일한 여백을 고르게 분배하는 정렬입니다. */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /** 교차축(cross axis)의 정렬 방법을 설정하는 속성입니다. 'flex-start'는 시작점 정렬, 'flex-end'는 끝점 정렬, 'center'는 가운데 정렬, 'stretch'는 아이템을 교차축에 맞게 늘리는 설정입니다. */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  /** Flex 아이템 사이의 간격을 지정하는 속성입니다. */
  gap?: string;
  /** Flex 아이템이 한 줄에 나타날지 여러 줄로 나타날지를 결정하는 속성입니다. 'nowrap'는 한 줄에 모두 표시, 'wrap'은 여러 줄로 나누어 표시, 'wrap-reverse'는 여러 줄로 나누되 역순으로 표시합니다. */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Flex 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다. */
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
