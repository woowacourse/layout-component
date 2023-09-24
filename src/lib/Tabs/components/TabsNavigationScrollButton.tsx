import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { LeftArrow, RightArrow } from '../assets/Icons';

type TabsNavigationScrollButtonProps = {
  isOverFlow: boolean;
  scrollState: 'left' | 'right' | 'both' | null;
  handleMoveScroll: (pos: 'end' | 'start') => void;
  scrollButtons: boolean;
};

function TabsNavigationScrollButton({
  children,
  isOverFlow,
  scrollState,
  handleMoveScroll,
  scrollButtons,
}: PropsWithChildren<TabsNavigationScrollButtonProps>) {
  return (
    <>
      {scrollButtons && isOverFlow && (
        <ScrollButton
          $enableScroll={
            isOverFlow && (scrollState === 'both' || scrollState === 'left')
          }
        >
          <LeftArrow onClick={() => handleMoveScroll('start')} />
        </ScrollButton>
      )}
      {children}
      {scrollButtons && isOverFlow && (
        <ScrollButton
          $enableScroll={
            isOverFlow && (scrollState === 'both' || scrollState === 'right')
          }
        >
          <RightArrow onClick={() => handleMoveScroll('end')} />
        </ScrollButton>
      )}
    </>
  );
}

export default TabsNavigationScrollButton;

const ScrollButton = styled.div<{ $enableScroll: boolean }>`
  opacity: ${({ $enableScroll }) => ($enableScroll ? '1' : '0.2')};

  svg {
    cursor: pointer;

    width: 12px;
    height: 12px;

    padding: 4px;
  }
`;
