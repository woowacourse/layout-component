import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles.ts";
import { SizeType } from "../../types";

export interface ContainerProps {
  children: ReactNode;
  minWidth?: number | SizeType;
  maxWidth?: number | SizeType;
}

const Container = ({ children, minWidth, maxWidth }: ContainerProps) => {
  return (
    <StyledContainer maxWidth={maxWidth} minWidth={minWidth}>
      {children}
    </StyledContainer>
  );
};

export default Container;
