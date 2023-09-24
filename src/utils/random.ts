export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomHexColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return `#${color}`;
};

interface GetRandomHSLColorParams {
  hue: number;
  minS?: number;
  maxS?: number;
  minL?: number;
  maxL?: number;
}

export const getRandomHSLColor = ({
  hue,
  minS = 10,
  maxS = 90,
  minL = 10,
  maxL = 90,
}: GetRandomHSLColorParams) => {
  const saturation = getRandomNumber(minS, maxS); // Generate a random saturation value between 0% and 100%
  const lightness = getRandomNumber(minL, maxL); // Generate a random lightness value between 0% and 100%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
