import {ReactNode} from "react";
import {SplitPaneProps} from "./SplitPane.tsx";
import {
  ERROR_MESSAGE_CHECK_CHILDREN_LENGTH,
  ERROR_MESSAGE_CHECK_DEFAULT_NUMBER_PERCENTAGE,
  ERROR_MESSAGE_CHECK_DEFAULT_SIZE,
  ERROR_MESSAGE_CHECK_DEFAULT_SIZE_GREATER_THAN_MAX_SIZE,
  ERROR_MESSAGE_CHECK_DEFAULT_SIZE_LESS_THAN_MIN_SIZE,
  ERROR_MESSAGE_CHECK_ENDS_WITH_PERCENTAGE,
  ERROR_MESSAGE_CHECK_MAX_SIZE,
  ERROR_MESSAGE_CHECK_MAX_SIZE_NUMBER_PERCENTAGE,
  ERROR_MESSAGE_CHECK_MIN_SIZE,
  ERROR_MESSAGE_CHECK_MIN_SIZE_NUMBER_PERCENTAGE
} from "./constants.ts";

export type ValidatePercentageParams = Omit<SplitPaneProps, 'children'>

export const checkEndsWithPercentage = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  if (!defaultSize.endsWith('%') || !minSize.endsWith('%') || !maxSize.endsWith('%')) {
    throw new Error(ERROR_MESSAGE_CHECK_ENDS_WITH_PERCENTAGE);
  }
}

export const checkDefaultSizeLessThanMinSize = ({defaultSize, minSize}: Omit<ValidatePercentageParams, 'maxSize'>) => {
  if (parseFloat(defaultSize) < parseFloat(minSize)) {
    throw new Error(ERROR_MESSAGE_CHECK_DEFAULT_SIZE_LESS_THAN_MIN_SIZE);
  }
}

export const checkDefaultSizeGreaterThanMaxSize = ({
                                                     defaultSize,
                                                     maxSize
                                                   }: Omit<ValidatePercentageParams, 'minSize'>) => {
  if (parseFloat(defaultSize) > parseFloat(maxSize)) {
    throw new Error(ERROR_MESSAGE_CHECK_DEFAULT_SIZE_GREATER_THAN_MAX_SIZE);
  }
}

export const checkChildrenLength = (children: ReactNode[]) => {
  if (children.length !== 2) {
    throw new Error(ERROR_MESSAGE_CHECK_CHILDREN_LENGTH);
  }
}

export const checkValidSize = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {

  const defaultSizeNumber = parseFloat(defaultSize);
  const minSizeNumber = parseFloat(minSize);
  const maxSizeNumber = parseFloat(maxSize);
  if (defaultSizeNumber < 0 || defaultSizeNumber > 100) {

    throw new Error(ERROR_MESSAGE_CHECK_DEFAULT_SIZE);
  }
  if (minSizeNumber < 0 || minSizeNumber > 100) {
    throw new Error(ERROR_MESSAGE_CHECK_MIN_SIZE);

  }
  if (maxSizeNumber < 0 || maxSizeNumber > 100) {
    throw new Error(ERROR_MESSAGE_CHECK_MAX_SIZE);
  }
}

export const checkEndsWithPercentageSymbol = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {
  const pattern: RegExp = /^\d+%$/;
  if (!pattern.test(defaultSize)) {
    throw new Error(ERROR_MESSAGE_CHECK_DEFAULT_NUMBER_PERCENTAGE);
  }
  if (!pattern.test(minSize)) {
    throw new Error(ERROR_MESSAGE_CHECK_MIN_SIZE_NUMBER_PERCENTAGE);
  }
  if (!pattern.test(maxSize)) {
    throw new Error(ERROR_MESSAGE_CHECK_MAX_SIZE_NUMBER_PERCENTAGE);
  }
}

export const checkValidProps = ({defaultSize, minSize, maxSize, children}: SplitPaneProps) => {
  checkEndsWithPercentage({defaultSize, minSize, maxSize});
  checkEndsWithPercentageSymbol({defaultSize, minSize, maxSize});
  checkValidSize({defaultSize, minSize, maxSize});
  checkDefaultSizeLessThanMinSize({defaultSize, minSize});
  checkDefaultSizeGreaterThanMaxSize({defaultSize, maxSize});
  checkChildrenLength(children);
}
