import {ReactNode} from "react";
import {StyledContainer} from "./Container.styles.ts";

export type SizeType = "sm" | "md" | "lg" | "xl" | "xxl";

export interface ContainerProps {
  children: ReactNode;
  minWidth?: number | SizeType;
  maxWidth?: number | SizeType;
}

const Container = ({children, ...rest}: ContainerProps) => {
  return (
    <StyledContainer $styles={{...rest}}>
      {children}
    </StyledContainer>
  );
};

export default Container;
