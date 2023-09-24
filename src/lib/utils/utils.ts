export const isCommonStyle = <T>(value: unknown): value is T => {
  if (!value) return false;

  if (typeof value === 'object') return false;

  return true;
};

export const calculateResponsiveStyle = (style: string, value?: unknown) => {
  if (!value || typeof value !== 'object') return '';

  return Object.entries(value).reduce((acc, [device, value]) => {
    if (!value) return acc;

    if (device === 'desktop') {
      return acc + `${style}: ${value};`;
    }

    if (device === 'tablet') {
      const maxWidth = typeof value === 'string' ? 1024 : value[0];
      value = typeof value === 'string' ? value : value[1];

      return (
        acc +
        `@media screen and (max-width: ${maxWidth}px) { ${style}: ${value}; }`
      );
    }

    if (device === 'mobile') {
      const maxWidth = typeof value === 'string' ? 768 : value[0];
      value = typeof value === 'string' ? value : value[1];
      return (
        acc +
        `@media screen and (max-width: ${maxWidth}px) { ${style}: ${value}; }`
      );
    }

    return acc;
  }, '');
};

export const calculateResponsiveGridTemplateStyle = (
  style: string,
  value?: unknown
) => {
  if (!value || typeof value !== 'object') return '';

  return Object.entries(value).reduce((acc, [device, value]) => {
    if (!value) return acc;

    if (device === 'desktop') {
      return (
        acc +
        `${style}: ${
          typeof value === 'number' ? `repeat(${value}, 1fr)` : value
        };`
      );
    }

    if (device === 'tablet') {
      const maxWidth = typeof value === 'string' ? 1024 : value[0];
      value = typeof value === 'string' ? value : value[1];

      return (
        acc +
        `@media screen and (max-width: ${maxWidth}px) { ${style}: ${
          typeof value === 'number' ? `repeat(${value}, 1fr)` : value
        }; }`
      );
    }

    if (device === 'mobile') {
      const maxWidth = typeof value === 'string' ? 768 : value[0];
      value = typeof value === 'string' ? value : value[1];

      return (
        acc +
        `@media screen and (max-width: ${maxWidth}px) { ${style}: ${
          typeof value === 'number' ? `repeat(${value}, 1fr)` : value
        }; }`
      );
    }

    return acc;
  }, '');
};
