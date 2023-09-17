import type { ParseClassName } from '../types';
import { dynamicKeyToCssPropMapping } from '../constants';
import commonStyles from '../styles/Common.module.css';

export const parseClassName: ParseClassName = (className, styles) => {
  const { dynamicStyle, classNames } = className.split(' ').reduce(
    (acc, name) => {
      const [key, value] = name.split('[');

      // 정적 className에 대한 처리 ([]로 감싼 부분이 없는 경우)
      if (!value) {
        acc.classNames.push(key in commonStyles ? commonStyles[key] : styles[key]);
        return acc;
      }

      // 동적으로 스타일 생성 ([]로 감싼 부분이 있는 경우)
      if (!(key in dynamicKeyToCssPropMapping)) return acc;

      const cssKey = dynamicKeyToCssPropMapping[key];
      const cssValue = value.replace(']', '');
      acc.dynamicStyle[cssKey] = cssValue;

      return acc;
    },
    { dynamicStyle: {} as Record<string, string>, classNames: [] as string[] }
  );

  return {
    dynamicStyle,
    staticClassName: classNames.join(' '),
  };
};
