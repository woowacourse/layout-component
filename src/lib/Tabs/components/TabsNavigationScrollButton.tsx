import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from '../assets/Icons';
import { ScrollState, TabsDirection } from '../types';

type TabsNavigationScrollButtonProps = {
  isOverFlow: boolean;
  scrollState: ScrollState;
  scrollButtons: boolean;
  direction: TabsDirection;
  handleMoveScroll: (pos: 'end' | 'start') => void;
};

function TabsNavigationScrollButton({
  children,
  isOverFlow,
  scrollState,
  scrollButtons,
  direction,
  handleMoveScroll,
}: PropsWithChildren<TabsNavigationScrollButtonProps>) {
  return (
    <>
      {scrollButtons && isOverFlow && (
        <ScrollButton
          $enableScroll={
            isOverFlow && (scrollState === 'both' || scrollState === 'end')
          }
        >
          {direction === 'horizontal' ? (
            <LeftArrow onClick={() => handleMoveScroll('start')} />
          ) : (
            <UpArrow onClick={() => handleMoveScroll('start')} />
          )}
        </ScrollButton>
      )}
      {children}
      {scrollButtons && isOverFlow && (
        <ScrollButton
          $enableScroll={
            isOverFlow && (scrollState === 'both' || scrollState === 'start')
          }
        >
          {direction === 'horizontal' ? (
            <RightArrow onClick={() => handleMoveScroll('end')} />
          ) : (
            <DownArrow onClick={() => handleMoveScroll('end')} />
          )}
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
