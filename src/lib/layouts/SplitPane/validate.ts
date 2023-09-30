import {ReactNode} from "react";

export interface ValidatePercentageParams {
  defaultSize: string;
  minSize: string;
  maxSize: string;
}

export const checkEndsWithPercentage = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  if (!defaultSize.endsWith('%') || !minSize.endsWith('%') || !maxSize.endsWith('%')) {
    throw new Error('defaultSize, minSize, maxSize는 반드시 %로 끝나야 합니다.');
  }
}

export const checkDefaultSizeLessThanMinSize = ({defaultSize, minSize}: Omit<ValidatePercentageParams, 'maxSize'>) => {
  if (parseFloat(defaultSize) < parseFloat(minSize)) {
    throw new Error('defaultSize는 minSize보다 작을 수 없습니다.');
  }
}

export const checkDefaultSizeGreaterThanMaxSize = ({
                                                     defaultSize,
                                                     maxSize
                                                   }: Omit<ValidatePercentageParams, 'minSize'>) => {
  if (parseFloat(defaultSize) > parseFloat(maxSize)) {
    throw new Error('defaultSize는 maxSize보다 클 수 없습니다.');
  }
}

export const checkChildrenLength = (children: ReactNode[]) => {
  if (children.length !== 2) {
    throw new Error('SplitPane 컴포넌트의 children은 반드시 2개여야 합니다.');
  }
}
