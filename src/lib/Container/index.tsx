import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type AsType =
  | "div"
  | "main"
  | "section"
  | "article"
  | "nav"
  | "header"
  | "footer"
  | "aside";
type MediaTargetType = "mobile" | "tablet" | "desktop";

interface ContainerCssProps {
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
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
  minWidth,
  maxWidth,
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

const MEDIA_TARGET_WIDTH: Record<string, Record<string, string>> = {
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
