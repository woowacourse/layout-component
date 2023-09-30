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


export const validatePercentage = ({defaultSize, minSize, maxSize}: ValidatePercentageParams) => {


  const intPercentage1 = parseInt(minSize, 10);
  const intPercentage2 = parseInt(maxSize, 10);

  if (intPercentage1 <= 0 || intPercentage2 <= 0) {
    return false;
  }

  return intPercentage1 + intPercentage2 === 100;
}
