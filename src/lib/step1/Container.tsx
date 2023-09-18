import React from 'react';
import styled from 'styled-components';

interface Props {
  minWidth?: number | string;
  maxWidth?: number | string;
}

const Container = ({
  minWidth,
  maxWidth,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <Style.Container $minWidth={minWidth} $maxWidth={maxWidth}>
      {children}
    </Style.Container>
  );
};

export default Container;

const Style = {
  Container: styled.div<{
    $minWidth?: string | number;
    $maxWidth?: string | number;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: ${(props) => props.$minWidth};
    max-width: ${(props) => props.$maxWidth};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    overflow: hidden;
  `,
};
