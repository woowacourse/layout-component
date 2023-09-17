import styled from '@emotion/styled';

import type { HTMLAttributes } from 'react';

import type { ContainerProps } from '../Container/Container';
import Container from '../Container/Container';
import type { Gap, Layout } from './style';
import { gapStyle, layoutStyle } from './style';

type BasicLayoutProps = Gap & ContainerProps & HTMLAttributes<HTMLElement>;

export type FlexBasicLayout = 'start' | 'center' | 'end';
type FlexContentLayout = FlexBasicLayout | 'space-between' | 'space-around' | 'space-evenly';
export interface FlexLayoutStyle {
  layout?: Layout;
  justify?: FlexContentLayout;
  alignItems?: FlexBasicLayout | 'stretch';
  alignContent?: FlexContentLayout | 'stretch';
}

export interface FlexContainerProps extends FlexLayoutStyle, BasicLayoutProps {
  direction?: 'row' | 'column';
  wrap?: boolean;
  reverse?: boolean;
}

const StyledFlexContainer = styled(Container)`
  display: flex;
`;

const FlexContainer = ({
  layout,
  direction = 'row',
  wrap = false,
  reverse = false,
  justify,
  alignItems,
  alignContent,
  gap,
  rowGap,
  columnGap,
  position = 'center',
  children,
  ...attributes
}: FlexContainerProps) => {
  return (
    <StyledFlexContainer
      css={[
        wrap && { flexWrap: 'wrap' },
        { flexDirection: `${direction}${reverse ? '-reverse' : ''}` },
        layoutStyle({ direction, layout, justify, alignItems, alignContent }),
        gapStyle({ gap, rowGap, columnGap }),
      ]}
      position={position}
      {...attributes}
    >
      <>{children}</>
    </StyledFlexContainer>
  );
};

export default FlexContainer;
