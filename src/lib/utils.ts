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
      return (
        acc + `@media screen and (max-width: 1024px) { ${style}: ${value}; }`
      );
    }

    if (device === 'mobile') {
      return (
        acc + `@media screen and (max-width: 768px) { ${style}: ${value}; }`
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
      return (
        acc +
        `@media screen and (max-width: 1024px) { ${style}: ${
          typeof value === 'number' ? `repeat(${value}, 1fr)` : value
        }; }`
      );
    }

    if (device === 'mobile') {
      return (
        acc +
        `@media screen and (max-width: 768px) { ${style}: ${
          typeof value === 'number' ? `repeat(${value}, 1fr)` : value
        }; }`
      );
    }

    return acc;
  }, '');
};
