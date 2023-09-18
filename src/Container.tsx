import { CSSProperties } from 'react';
interface ContainerProps {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  children: React.ReactNode;
}

const defaultStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Container({ minWidth, maxWidth, children }: ContainerProps) {
  return <div style={{ ...defaultStyle, minWidth, maxWidth }}>{children}</div>;
}

export default Container;
