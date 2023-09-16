import { PropsWithChildren } from 'react';
import './index.css';

interface FlexItemProps extends PropsWithChildren {
  align?:
    | 'auto'
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline';
}

const FlexItem = ({ align = 'auto', children }: FlexItemProps) => {
  const applyStyle = {
    alignSelf: align,
  };
  return (
    <div className='ys-layout-components-flex-item' style={applyStyle}>
      {children}
    </div>
  );
};

export default FlexItem;
