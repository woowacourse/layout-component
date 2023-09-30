import {ReactNode} from "react";
import {SplitPaneProps} from "./SplitPane.tsx";

export type ValidatePercentageParams = Omit<SplitPaneProps, 'children'>

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

export const checkValidSize = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  const defaultSizeNumber = parseFloat(defaultSize);
  const minSizeNumber = parseFloat(minSize);
  const maxSizeNumber = parseFloat(maxSize);

  if (defaultSizeNumber < 0 || defaultSizeNumber > 100) {
    throw new Error('defaultSize는 0% ~ 100% 사이의 값이어야 합니다.');
  }

  if (minSizeNumber < 0 || minSizeNumber > 100) {
    throw new Error('minSize는 0% ~ 100% 사이의 값이어야 합니다.');
  }

  if (maxSizeNumber < 0 || maxSizeNumber > 100) {
    throw new Error('maxSize는 0% ~ 100% 사이의 값이어야 합니다.');
  }
}

export const checkValidNumberSize = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  const defaultSizeNumber = parseFloat(defaultSize);
  const minSizeNumber = parseFloat(minSize);
  const maxSizeNumber = parseFloat(maxSize);

  if (isNaN(defaultSizeNumber)) {
    throw new Error('defaultSize는 숫자% 형태여야 합니다.');
  }

  if (isNaN(minSizeNumber)) {
    throw new Error('minSize는 숫자% 형태여야 합니다.');
  }

  if (isNaN(maxSizeNumber)) {
    throw new Error('maxSize는 숫자% 형태여야 합니다.');
  }
}

export const checkEndsWithPercentageSymbol = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  const pattern: RegExp = /^\d+%$/;
  if (!pattern.test(defaultSize)) {
    throw new Error('defaultSize는 숫자% 형태여야 합니다.');
  }
  if (!pattern.test(minSize)) {
    throw new Error('minSize는 숫자% 형태여야 합니다.');
  }
  if (!pattern.test(maxSize)) {
    throw new Error('maxSize는 숫자% 형태여야 합니다.');
  }
}

export const checkValidProps = ({defaultSize, minSize, maxSize, children}: SplitPaneProps) => {
  checkEndsWithPercentage({defaultSize, minSize, maxSize});
  checkEndsWithPercentageSymbol({defaultSize, minSize, maxSize});
  checkValidNumberSize({defaultSize, minSize, maxSize});
  checkValidSize({defaultSize, minSize, maxSize});
  checkDefaultSizeLessThanMinSize({defaultSize, minSize});
  checkDefaultSizeGreaterThanMaxSize({defaultSize, maxSize});
  checkChildrenLength(children);
}
