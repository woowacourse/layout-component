import type { CSSProperties as CSS, PropsWithChildren } from 'react';

interface TestItemProps {
  height?: number;
}

export const TestItem = ({ children, height = 256 }: PropsWithChildren<TestItemProps>) => {
  const style: CSS = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: `100%`,
    minHeight: `${height}px`,

    background: 'linear-gradient(to right, skyblue, violet)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  };

  return <div style={style}>{children}</div>;
};

export default TestItem;
