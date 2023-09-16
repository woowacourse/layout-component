import { CSSProperties, PropsWithChildren } from 'react';
import './index.css';

interface ContainerProps extends PropsWithChildren {
  maxWidth: number;
  customStyle?: Omit<CSSProperties, 'width'>;
  minWidth?: number;
}
const Container = ({
  minWidth,
  maxWidth,
  customStyle = {},
  children,
}: ContainerProps) => {
  const applyStyle = {
    ...customStyle,
    minWidth: `${!minWidth ? maxWidth : minWidth}px`,
    width: `${maxWidth}px`,
  };

  return (
    <div className='ys-layout-components-container'>
      <div className='ys-layout-components-content' style={applyStyle}>
        {children}
      </div>
    </div>
  );
};

export default Container;
