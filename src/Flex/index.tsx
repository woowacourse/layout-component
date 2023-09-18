import type { CSSProperties } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  flex,
  inlineFlex,
  flexDirection,
  justifyContent,
  alignItems,
  flexGap,
  flexWrap,
} from './Flex.css';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  inline?: boolean;
}

const Flex = (props: React.PropsWithChildren<FlexProps>) => {
  const {
    direction = 'row',
    justify = 'normal',
    align = 'normal',
    inline = false,
    wrap = 'nowrap',
    gap = '',
    children,
    className,
    style,
    ...rest
  } = props;

  return (
    <div
      className={`${className} ${inline ? inlineFlex : flex}`}
      style={{
        ...style,
        ...assignInlineVars({
          [flexDirection]: direction.toString(),
          [justifyContent]: justify.toString(),
          [alignItems]: align.toString(),
          [flexGap]: gap.toString(),
          [flexWrap]: wrap.toString(),
        }),
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
