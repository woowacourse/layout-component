import {ReactNode} from 'react';
import ErrorBoundary from "../ErrorBoundary.tsx";
import SplitPaneRenderer from "./SplitPaneRenderer.tsx";

export interface SplitPaneProps {
  defaultSize: string;
  minSize: string;
  maxSize: string;
  children: ReactNode[];
}

const SplitPane = ({defaultSize, minSize, maxSize, children}: SplitPaneProps) => {

  return (
    <ErrorBoundary>
      <SplitPaneRenderer defaultSize={defaultSize} minSize={minSize} maxSize={maxSize}>{children}</SplitPaneRenderer>
    </ErrorBoundary>
  );
}

export default SplitPane;
