import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from '../assets/Icons';
import { TabsDirection } from '../../types/type';
import useTabs from '../hooks/useTabs';

type TabsNavigationScrollButtonProps = {
  scrollButtons: boolean;
  direction: TabsDirection;
};

function TabsNavigationScrollButton({
  children,
  scrollButtons,
  direction,
}: PropsWithChildren<TabsNavigationScrollButtonProps>) {
  const { isOverFlow, scrollPositionState, handleMoveScroll } = useTabs();
  return (
    <>
      {scrollButtons && isOverFlow && (
        <ScrollButton
          $enableScroll={
            isOverFlow &&
            (scrollPositionState === 'both' || scrollPositionState === 'end')
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
            isOverFlow &&
            (scrollPositionState === 'both' || scrollPositionState === 'start')
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
