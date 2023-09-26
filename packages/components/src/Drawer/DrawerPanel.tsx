import React from 'react';
import styled from 'styled-components';

export interface DrawerPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
}

const DrawerPanel = ({ children, width, ...divProps }: DrawerPanelProps) => {
  return (
    <Panel $width={width} {...divProps}>
      {children}
    </Panel>
  );
};

export default DrawerPanel;

const Panel = styled.div<{ $width?: string }>`
  width: ${({ $width }) => ($width ? $width : '280px')};
  padding: 20px 32px;

  cursor: pointer;
`;
