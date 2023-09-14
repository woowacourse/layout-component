import { CSSProperties, PropsWithChildren } from 'react';
import './index.css';

type OVERFLOW = 'auto' | 'scroll' | 'hidden' | 'visible' | 'clip';

interface CSSContainerProps extends PropsWithChildren {
  minWidth: number;
  maxWidth: number;
  padding?: number;
  overflow?: OVERFLOW;
}

const Container = ({ minWidth, maxWidth, padding, overflow, children }: CSSContainerProps) => {
  const containerStyle: CSSProperties = {
    minWidth: minWidth || '',
    maxWidth: maxWidth || '',
    overflow: overflow || 'auto',
    padding: `${padding}px` || '0px',
  };

  return (
    <div className="rgp-container" style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
