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

type JustifyContentPositionalAlignment =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right';

type AlignItemsPositionalAlignment =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | JustifyContentPositionalAlignment
    | `safe ${JustifyContentPositionalAlignment}`
    | `unsafe ${JustifyContentPositionalAlignment}`
    | 'normal'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'stretch';
  align?:
    | AlignItemsPositionalAlignment
    | `first ${AlignItemsPositionalAlignment}`
    | `last ${AlignItemsPositionalAlignment}`
    | `safe ${AlignItemsPositionalAlignment}`
    | `unsafe ${AlignItemsPositionalAlignment}`
    | 'normal'
    | 'stretch'
    | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
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
          [flexDirection]: direction,
          [justifyContent]: justify,
          [alignItems]: align,
          [flexGap]: gap,
          [flexWrap]: wrap,
        }),
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
