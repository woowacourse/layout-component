import type { CSSProperties as CSS, PropsWithChildren } from 'react';

interface TestItemProps {
  size?: number;
}

const TestItem = ({ children, size = 128 }: PropsWithChildren<TestItemProps>) => {
  const style: CSS = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: `${size}px`,
    height: `${size}px`,

    background: 'linear-gradient(to right, skyblue, violet)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  };

  return <div style={style}>{children}</div>;
};

export default TestItem;
