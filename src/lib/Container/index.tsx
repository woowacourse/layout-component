import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { AsType, NumberUnitType } from "../../types";

type MediaTargetType = "mobile" | "tablet" | "desktop";

interface ContainerCssProps {
  id?: string;
  minWidth?: NumberUnitType | "none";
  maxWidth?: NumberUnitType | "none";
  minHeight?: NumberUnitType | "none";
  maxHeight?: NumberUnitType | "none";
  padding?: NumberUnitType;
  margin?: NumberUnitType;
  background?: string;
  borderRadius?: string;
  border?: string;
  overflow?: string;
}

interface ContainerProps extends ContainerCssProps {
  as?: AsType;
  mediaTarget?: MediaTargetType;
}

const Container = ({
  as = "div",
  mediaTarget,
  minWidth = "none",
  maxWidth = "none",
  ...props
}: PropsWithChildren<ContainerProps>) => {
  const TagName = as;
  const StyledTagName = styled(TagName)<ContainerCssProps>`
    ${ContainerCss}
  `;

  const getMediaTargetMinWidth = () =>
    mediaTarget ? MEDIA_TARGET_WIDTH[mediaTarget].minWidth : minWidth;

  const getMediaTargetMaxWidth = () =>
    mediaTarget ? MEDIA_TARGET_WIDTH[mediaTarget].maxWidth : maxWidth;

  return (
    <StyledTagName
      minWidth={getMediaTargetMinWidth()}
      maxWidth={getMediaTargetMaxWidth()}
      {...props}
    >
      {props.children}
    </StyledTagName>
  );
};

const MEDIA_TARGET_WIDTH: Record<string, Record<string, NumberUnitType>> = {
  mobile: {
    minWidth: "320px",
    maxWidth: "480px",
  },
  tablet: {
    minWidth: "768px",
    maxWidth: "1024px",
  },
  desktop: {
    minWidth: "1050px",
    maxWidth: "1680px",
  },
};

const ContainerCss = css<ContainerCssProps>`
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  overflow: ${(props) => props.overflow};
`;

export default Container;
