import { FlexProps } from './types.ts';
import { useEffect, useState } from 'react';
import * as S from './Flex.styles.tsx';

const Flex = (props: FlexProps) => {
  const { direction, justify, align, gap, children } = props;

  const [doesBrowserSupportGap, setDoesBrowserSupportGap] = useState(false);

  useEffect(() => {
    setDoesBrowserSupportGap(
      window.CSS && window.CSS.supports && window.CSS.supports('gap', '0px'),
    );
  }, []);

  return (
    <S.Flex
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      doesBrowserSupportGap={doesBrowserSupportGap}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
