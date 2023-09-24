import { PropsWithChildren, useEffect } from "react";
import { css, styled, CSSProperties } from "styled-components";
import { AsType } from "../Container";

interface ParallaxCssProps {
  speed?: number;
  style?: CSSProperties;
}

interface ParallaxProps extends ParallaxCssProps {
  as?: AsType;
  imageUrl?: string;
  imageAlt?: string;
  angle?: string;
}

const Parallax = ({
  as = "div",
  imageUrl,
  imageAlt,
  speed,
  style,
  children,
}: PropsWithChildren<ParallaxProps>) => {
  const TagName = as;

  const StyledTag = styled(TagName)<ParallaxCssProps>`
    ${Background}
  `;

  const updatePosition = () => {};
  useEffect(() => {
    updatePosition();
  }, []);

  return (
    <StyledTag style={style} speed={speed}>
      <img src={imageUrl} alt={imageAlt}></img>
      {children}
    </StyledTag>
  );
};

const Background = css<ParallaxCssProps>`
  transform: ${(props) => `translate3d(-50%, ${props.speed}px, 0)`};
  transition: all 0.5s;
`;

export default Parallax;
