import {ReactNode} from "react";

export interface ValidatePercentageParams {
  defaultSize: string;
  minSize: string;
  maxSize: string;
}

export const isEndsWithPercentage = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  if (!defaultSize.endsWith('%') || !minSize.endsWith('%') || !maxSize.endsWith('%')) {
    throw new Error('defaultSize, minSize, maxSize는 반드시 %로 끝나야 합니다.');
  }
}

export const isChildrenLengthTwo = (children: ReactNode[]) => {
  if (children.length !== 2) {
    throw new Error('SplitPane 컴포넌트의 children은 반드시 2개여야 합니다.');
  }
}
