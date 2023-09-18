import type { CSSProperties } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { center, maxWidthVar, minWidthVar } from './Container.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
}

const Container = (props: React.PropsWithChildren<ContainerProps>) => {
  const { maxWidth = '', minWidth = '', children, className, style, ...rest } = props;
  return (
    <div
      className={`${className} ${center}`}
      style={{
        ...style,
        ...assignInlineVars({
          [maxWidthVar]: maxWidth.toString(),
          [minWidthVar]: minWidth.toString(),
        }),
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
