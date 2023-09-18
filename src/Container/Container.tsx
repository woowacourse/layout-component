import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { convertToPixel, generateDirectionStyle } from '../utils';
import { ElementBasicStyleType } from '../types/styles';
import { Combine, SCProps } from '../types/utility';

type ContainerStyleProps = ElementBasicStyleType;

type ContainerProps = Combine<
  ContainerStyleProps,
  ComponentPropsWithoutRef<'div'>
>;

const Container = (props: ContainerProps) => {
  const { children, minWidth, maxWidth, padding, margin, ...restProps } = props;

  return (
    <ContainerWrapper>
      <ContainerContent
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        $padding={padding}
        $margin={margin}
        {...restProps}
      >
        {children}
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Container;

type ContainerSCProps = SCProps<ContainerStyleProps>;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ContainerContent = styled.div<ContainerSCProps>`
  min-width: ${({ $minWidth }) => convertToPixel($minWidth) ?? 0};
  max-width: ${({ $maxWidth }) => convertToPixel($maxWidth) ?? 'unset'};

  ${({ $padding }) => generateDirectionStyle('padding', $padding)}
  ${({ $margin }) => generateDirectionStyle('margin', $margin)};
`;
