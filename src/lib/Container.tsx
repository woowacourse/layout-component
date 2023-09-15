import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type AsType = "div" | "main" | "header" | "footer";
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
  as: AsType;
  mediaTarget?: MediaTargetType;
}

const Container = ({
  as = "div",
  mediaTarget,
  minWidth,
  maxWidth,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  const getMediaTargetMinWidth = () =>
    mediaTarget ? MEDIA_TARGET_WIDTH[mediaTarget].minWidth : minWidth;

  const getMediaTargetMaxWidth = () =>
    mediaTarget ? MEDIA_TARGET_WIDTH[mediaTarget].maxWidth : maxWidth;

  switch (as) {
    case "div":
      return (
        <Div
          minWidth={getMediaTargetMinWidth()}
          maxWidth={getMediaTargetMaxWidth()}
          {...props}
        >
          {props.children}
        </Div>
      );
    case "main":
      return (
        <Main
          minWidth={getMediaTargetMinWidth()}
          maxWidth={getMediaTargetMaxWidth()}
          {...props}
        >
          {props.children}
        </Main>
      );
    case "header":
      return (
        <Header
          minWidth={getMediaTargetMinWidth()}
          maxWidth={getMediaTargetMaxWidth()}
          {...props}
        >
          {props.children}
        </Header>
      );
    case "footer":
      return (
        <Footer
          minWidth={getMediaTargetMinWidth()}
          maxWidth={getMediaTargetMaxWidth()}
          {...props}
        >
          {props.children}
        </Footer>
      );
  }
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

const Div = styled.div<ContainerCssProps>`
  ${ContainerCss}
`;

const Main = styled.main<ContainerCssProps>`
  ${ContainerCss}
`;

const Header = styled.header<ContainerCssProps>`
  ${ContainerCss}
`;

const Footer = styled.footer<ContainerCssProps>`
  ${ContainerCss}
`;

export default Container;
