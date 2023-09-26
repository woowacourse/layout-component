import { useRef } from 'react';
import useSplitPaneResizer from './useSplitPaneResizer';
import * as S from './SplitPane.styled';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../types';

type SplitPaneProps = HTMLAttributes<HTMLElement> & {
  defaultSize?: Size;
  minSize?: Size;
  maxSize?: Size;
  direction?: 'row' | 'column';
  width?: Size;
  height?: Size;
  children: ReactNode;
};

const SplitPane = (props: SplitPaneProps) => {
  const {
    defaultSize = '50%',
    minSize = '10%',
    maxSize = '90%',
    direction = 'row',
    width = '100%',
    height = '100%',
    children,
  } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);
  const { resizerX, resizerY } = useSplitPaneResizer({
    defaultSize,
    minSize,
    maxSize,
    direction,
    rootRef,
    resizerRef,
  });

  return (
    <S.Container $width={width} $height={height}>
      <S.Root
        $direction={direction}
        $resizerX={resizerX}
        $resizerY={resizerY}
        ref={rootRef}
      >
        <S.ChildrenContainer $direction={direction}>
          {children}
        </S.ChildrenContainer>
        <S.Resizer
          $direction={direction}
          $top={resizerY}
          $left={resizerX}
          ref={resizerRef}
        />
      </S.Root>
    </S.Container>
  );
};

export default SplitPane;
