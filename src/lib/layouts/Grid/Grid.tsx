import {ReactNode} from "react";
import {StyledGrid} from "./Grid.styles.ts";

export interface GridProps {
  rows?: number;
  columns?: number;
  gap?: number;
  children: ReactNode;
}

const Grid = ({children, ...rest}: GridProps) => {
  return <StyledGrid $styles={{...rest}}>{children}</StyledGrid>;
};

export default Grid;
