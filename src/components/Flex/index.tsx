import { PropsWithChildren } from 'react';
import './index.css';

interface FlexProps extends PropsWithChildren {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'start' | 'end';
  gap: number;
}

const Flex = ({
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = 0,
  children,
}: FlexProps) => {
  const applyStyle = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return (
    <div className='ys-layout-components-flex' style={applyStyle}>
      {children}
    </div>
  );
};

export default Flex;
