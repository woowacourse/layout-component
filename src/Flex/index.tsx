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

type OverflowPosition = 'unsafe' | 'safe';

type BaselinePosition =
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'baseline first'
  | 'baseline last';
type SelfPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';
type AlignItems =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | `${OverflowPosition} ${SelfPosition}`;

type ContentDistribution = 'space-between' | 'space-evenly' | 'space-around' | 'stretch';
type ContentPosition = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
type Direction = 'left' | 'right';
type JustifyContent =
  | 'normal'
  | ContentDistribution
  | Direction
  | ContentPosition
  | `${OverflowPosition} ${ContentPosition}`
  | `${OverflowPosition} ${Direction}`;

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: JustifyContent;
  align?: AlignItems;
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
