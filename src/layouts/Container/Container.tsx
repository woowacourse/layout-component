import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles.ts";

export interface ContainerProps {
  children: ReactNode;
  minWidth?: number | "sm" | "md" | "lg" | "xl" | "xxl";
  maxWidth?: number | "sm" | "md" | "lg" | "xl" | "xxl";
}

const Container = ({ children, minWidth, maxWidth }: ContainerProps) => {
  return (
    <StyledContainer maxWidth={maxWidth} minWidth={minWidth}>
      {children}
    </StyledContainer>
  );
};

export default Container;
