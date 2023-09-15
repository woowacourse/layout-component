import { CSSProperties, PropsWithChildren } from 'react';
import './index.css';

type DIRECTION = 'row' | 'column';
type JUSTIFY =
  | 'center'
  | 'baseline'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type ALIGN = 'center' | 'flex-start' | 'flex-end';

interface CSSFlexProps extends PropsWithChildren {
  direction: DIRECTION;
  justify: JUSTIFY;
  align: ALIGN;
  gap: number;
}

const Flex = ({ direction, justify, align, gap, children }: CSSFlexProps) => {
  const flexStyle: CSSProperties = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return (
    <div className="rgp-layout-flex" style={flexStyle}>
      {children}
    </div>
  );
};

export default Flex;
