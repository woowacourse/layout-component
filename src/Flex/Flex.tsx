import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { convertToPixel, generateDirectionStyle } from '../utils';
import { ElementBasicStyleType } from '../types/styles';
import { Combine, SCProps } from '../types/utility';

type FlexStyleProps = Pick<
  CSSProperties,
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'justifyContent'
  | 'justifyItems'
  | 'justifySelf'
  | 'flexDirection'
  | 'flexWrap'
>;

type FlexContainerProps = ElementBasicStyleType & FlexStyleProps;

type FlexProps = Combine<FlexContainerProps, ComponentPropsWithoutRef<'div'>>;

const Flex = (props: FlexProps) => {
  const {
    children,
    minWidth,
    maxWidth,
    margin,
    padding,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    flexDirection,
    flexWrap,
    ...restProps
  } = props;

  return (
    <FlexWrapper
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $margin={margin}
      $padding={padding}
      $alignContent={alignContent}
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $justifyContent={justifyContent}
      $justifyItems={justifyItems}
      $justifySelf={justifySelf}
      $flexDirection={flexDirection}
      $flexWrap={flexWrap}
      {...restProps}
    >
      {children}
    </FlexWrapper>
  );
};

export default Flex;

type FlexSCProps = SCProps<FlexContainerProps>;

const FlexWrapper = styled.div<FlexSCProps>`
  display: flex;

  min-width: ${({ $minWidth }) => convertToPixel($minWidth) ?? 0};
  max-width: ${({ $maxWidth }) => convertToPixel($maxWidth) ?? 'unset'};

  ${({ $margin }) => generateDirectionStyle('margin', $margin)};
  ${({ $padding }) => generateDirectionStyle('padding', $padding)}

  align-content: ${({ $alignContent }) => $alignContent ?? 'initial'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'initial'};
  align-self: ${({ $alignSelf }) => $alignSelf ?? 'initial'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'initial'};
  justify-items: ${({ $justifyItems }) => $justifyItems ?? 'initial'};
  justify-self: ${({ $justifySelf }) => $justifySelf ?? 'initial'};
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'initial'};
  flex-wrap: ${({ $flexWrap }) => $flexWrap ?? 'initial'};
`;
