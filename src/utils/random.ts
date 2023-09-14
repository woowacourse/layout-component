export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomHexColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return `#${color}`;
};
