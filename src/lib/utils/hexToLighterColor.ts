export const hexToLighterColor = (hex: string, alpha: number) => {
  let newHex = hex.replace(/^#/, '');

  const SHORT_HEX_LENGTH = 3;
  if (newHex.length === SHORT_HEX_LENGTH) {
    newHex = newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2];
  }

  const r = parseInt(newHex.substring(0, 2), 16);
  const g = parseInt(newHex.substring(2, 4), 16);
  const b = parseInt(newHex.substring(4, 6), 16);

  const newAlpha = Math.min(1, Math.max(0, alpha));

  return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
};
