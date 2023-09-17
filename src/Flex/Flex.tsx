import { ReactNode } from 'react';

interface FlexProps {
  /**
   * Flex의 자식 컴포넌트입니다.
   */
  children: ReactNode[];
}

const Flex = ({ children, ...props }: FlexProps) => {
  const flexStyles = {
    display: 'flex',
  };

  return (
    <div style={flexStyles} {...props}>
      {...children}
    </div>
  );
};

export default Flex;
