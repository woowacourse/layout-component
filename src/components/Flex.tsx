import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  direction?: 'row' | 'column';
  justify?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'self-start'
    | 'self-end'
    | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
}

const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  wrap = 'nowrap',
  gap,
  children,
  ...attributes
}: Props) => {
  const flexContainerStyle = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,
  };

  return (
    <div style={flexContainerStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Flex;
