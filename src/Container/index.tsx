import { assignInlineVars } from '@vanilla-extract/dynamic';
import { center, maxWidthVar, minWidthVar } from './Container.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: string;
  maxWidth?: string;
}

const Container = (props: React.PropsWithChildren<ContainerProps>) => {
  const { maxWidth = '', minWidth = '', children, className, style, ...rest } = props;
  return (
    <div
      className={`${className} ${center}`}
      style={{
        ...style,
        ...assignInlineVars({ [maxWidthVar]: maxWidth, [minWidthVar]: minWidth }),
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
