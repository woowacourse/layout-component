import { FlexProps } from './types.ts';
import * as S from './Flex.styles.tsx';
import useBrowserGapSupport from '../hooks/useBrowserGapSupport.ts';

const Flex = (props: FlexProps) => {
  const { direction, justify, align, gap, children } = props;

  const { doesBrowserSupportGap } = useBrowserGapSupport();

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
