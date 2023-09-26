import { ParsedValueShape, Units, ValidUnits } from '../types/type';

const VALID_UNITS = [
  Units['%'],
  Units['px'],
  Units['vh'],
  Units['vw'],
] as const;

export const parseValueAndUnit = (
  str?: string | number,
  defaultUnit: ValidUnits = Units['px']
): ParsedValueShape => {
  let out: ParsedValueShape = { value: 0, unit: defaultUnit };

  if (typeof str === 'undefined') return out;

  str = String(str);
  out.value = parseFloat(str);

  // @ts-ignore
  out.unit = str.match(/[\d.\-+]*\s*(.*)/)[1] || defaultUnit;

  // @ts-ignore
  const isValidUnit: boolean = VALID_UNITS.includes(out.unit);

  if (!isValidUnit) {
    throw new Error('Invalid unit!!');
  }

  return out;
};
