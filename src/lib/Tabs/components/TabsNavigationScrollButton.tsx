import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from '../assets/Icons';
import { TabsDirection } from '../Tabs';

type TabsNavigationScrollButtonProps = {
  isOverFlow: boolean;
  scrollState: 'start' | 'end' | 'both' | null;
  handleMoveScroll: (pos: 'end' | 'start') => void;
  scrollButtons: boolean;
  direction: TabsDirection;
};

function TabsNavigationScrollButton({
  children,
  isOverFlow,
  scrollState,
  handleMoveScroll,
  scrollButtons,
  direction,
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
