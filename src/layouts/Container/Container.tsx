import {ReactNode} from "react";
import {StyledContainer} from "./Container.styles.ts";
import {SizeType} from "../../types";

export interface ContainerProps {
  children: ReactNode;
  minWidth?: number | SizeType;
  maxWidth?: number | SizeType;
}

const Container = ({children, ...rest}: ContainerProps) => {
  return (
    <StyledContainer style={{...rest}}>
      {children}
    </StyledContainer>
  );
};

export default Container;
