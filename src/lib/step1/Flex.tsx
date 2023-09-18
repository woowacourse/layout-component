import React from 'react';
import styled from 'styled-components';

interface Props {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string | number;
}

const Flex = ({
  direction,
  justify,
  align,
  gap,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <Style.Flex
      $direction={direction}
      $justify={justify}
      $align={align}
      $gap={gap}
    >
      {children}
    </Style.Flex>
  );
};

export default Flex;

const Style = {
  Flex: styled.div<{
    $direction?: string;
    $justify?: string;
    $align?: string;
    $gap?: string | number;
  }>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    justify-content: ${(props) => props.$justify};
    align-items: ${(props) => props.$align};
    gap: ${(props) => props.$gap};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `,
};
