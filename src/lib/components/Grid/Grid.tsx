import { ComponentPropsWithRef, ElementType } from 'react';
import { CSSProp, styled } from 'styled-components';

interface Props extends ComponentPropsWithRef<ElementType> {
  /** 컴포넌트의 HTML 태그를 지정하는 속성입니다. 예를 들어, tag="div"로 설정하면 컴포넌트가 <div> 태그로 렌더링됩니다. */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * 행 개수를 지정하는 속성입니다.
   */
  rows?: number;
  /**
   * 열 개수를 지정하는 속성입니다.
   */
  columns?: number;
  /**
   * 자동으로 생성되는 행의 크기를 지정하는 속성입니다. 문자열(ex. minmax(100px, auto))로 설정할 수 있습니다.
   */
  autoRows?: string;
  /**
   * 자동으로 생성되는 열의 크기를 지정하는 속성입니다. 문자열(ex. minmax(100px, auto))로 설정할 수 있습니다.
   */
  autoColumns?: string;
  /**
   * 그리드 아이템의 배치를 지정하는 속성입니다.
   *  (ex. `"header header"
   *  "sidebar content"
   *  "footer footer"`)
   */
  areas?: string;
  /** 그리드 아이템 사이의 간격을 지정하는 속성입니다. */
  gap?: string;
  /** 행 간격을 지정하는 속성입니다. */
  rowGap?: string;
  /** 열 간격을 지정하는 속성입니다. */
  columnGap?: string;
  /** 그리드 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다. */
  css?: CSSProp;
}

const Grid = (props: Props) => {
  const { tag, ...restProps } = props;

  return (
    <Tag as={tag} {...restProps}>
      {restProps.children}
    </Tag>
  );
};

export default Grid;

const Tag = styled.div<Props>`
  display: grid;
  grid-template-rows: ${({ rows }) => (rows ? `repeat(${rows}, 1fr)` : '')};
  grid-template-columns: ${({ columns }) => (columns ? `repeat(${columns}, 1fr)` : '')};
  grid-auto-rows: ${({ autoRows }) => (autoRows ? autoRows : '')};
  grid-auto-columns: ${({ autoColumns }) => (autoColumns ? autoColumns : '')};
  grid-template-areas: ${({ areas }) => (areas ? areas : '')};
  gap: ${({ gap }) => gap || '0'};
  row-gap: ${({ rowGap, gap }) => rowGap || gap || '0'};
  column-gap: ${({ columnGap, gap }) => columnGap || gap || '0'};

  ${({ css }) => (css ? css : '')};
`;
