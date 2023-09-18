export const elementSizes = {
  getWidth: (width: number | string | undefined) => {
    if (typeof width === 'number') {
      return `${width}px`;
    }

    if (typeof width === 'string') {
      return width;
    }

    return '100%';
  },

  getHeight: (height: number | string | undefined) => {
    if (typeof height === 'number') {
      return `${height}px`;
    }

    if (typeof height === 'string') {
      return height;
    }

    return 'auto';
  },
};
