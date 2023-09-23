import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexItemProps extends PropsWithChildren {
  align: 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}

const FlexItemComponent = styled.div<FlexItemProps>`
  align-self: ${({ align }) => align};
`;

const FlexItem = ({ align = 'auto', children }: Partial<FlexItemProps>) => {
  return <FlexItemComponent align={align}>{children}</FlexItemComponent>;
};

export default FlexItem;
