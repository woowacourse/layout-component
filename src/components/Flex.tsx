import { Children, type HTMLAttributes, type PropsWithChildren } from "react";
import styled from "styled-components";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex 컨테이너에 Flex 항목이 배치되는 방식
   * @default row
   */
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  /**
   * Flex 항목을 한 줄로 강제할지 아니면 여러 줄로 줄 바꿈할 수 있는지를 설정
   * @default nowrap
   */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  /**
   * Flex 항목을 어떻게 정렬할 지 설정
   * @default start
   */
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  /**
   * Flex 항목의 하위 항목에 대해 축의 수직 방향을 기준으로 어떻게 정렬할 지 설정
   * @default stretch
   */
  alignItems?: "stretch" | "center" | "start" | "end";
  /**
   * Flex 항목의 하위 항목에 대해 수직축의 라인을 기준으로 (두 줄 이상 일 때만) 어떻게 정렬이 정렬할 지 설정
   * @default start
   */
  alignContent?: "start" | "center" | "space-between" | "space-around";
  /**
   * Flex 항목에 대해 어떻게 정렬할지 설정
   * @default stretch
   */
  alignSelf?: "stretch" | "center" | "start" | "end";
  /**
   *  Flex 컨테이너에 Flex 항목이 배치되는 순서를 설정
   */
  order?: number;
  /**
   *  Flex 컨테이너에 기본 크기에 할당되어야 하는 Flex 컨테이너의 남은 공간을 설정
   */
  flexGrow?: number;
  /**
   *  Flex 항목의 플렉스 축소 요소를 설정
   */
  flexShrink?: number;
}

const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    flexDirection = "row",
    flexWrap = "nowrap",
    justifyContent = "start",
    alignItems = "stretch",
    alignContent = "start",
    alignSelf = "stretch",
    order,
    flexGrow,
    flexShrink,
    children,
    style,
    ...rest
  } = props;

  return (
    <FlexWrapper
      style={{
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        alignSelf,
        order,
        flexGrow,
        flexShrink,
        ...style,
      }}
      {...rest}
    >
      {children}
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div<FlexProps>`
  display: flex;
`;

export default Flex;
