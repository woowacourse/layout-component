import { Children, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import type { Direction, HexColor } from '../../types';
import useSplitPane from './useSplitPane';
import Resizer from './Resizer/Resizer';
import * as S from './SplitPane.styled';

type SplitPaneProps = {
  direction?: Direction;
  resizerThickness?: number;
  borderThickness?: number;
  defaultRatios: number[];
  minimumRatio?: number;
  maximumRatio?: number;
  horizontalMargin?: number;
  verticalMargin?: number;
  themeColor?: HexColor;
};

const SplitPane = (props: PropsWithChildren<SplitPaneProps>) => {
  const {
    direction = 'row',
    resizerThickness = 15,
    borderThickness = 2,
    defaultRatios,
    minimumRatio = 0,
    maximumRatio = 100,
    themeColor = '#be33ff',
    horizontalMargin = 0,
    verticalMargin = 0,
    children,
  } = props;
  const elements = Children.toArray(children);
  const rootRef = useRef<HTMLDivElement>(null);
  const { elementRatios } = useSplitPane({
    rootRef,
    direction,
    defaultRatios,
    minimumRatio,
    maximumRatio,
  });

  return (
    <S.Container
      ref={rootRef}
      $direction={direction}
      $themeColor={themeColor}
      $borderThickness={borderThickness}
      $horizontalMargin={horizontalMargin}
      $verticalMargin={verticalMargin}
    >
      {elements.map((element, index) => {
        return (
          <>
            <S.SplitPaneItem
              $direction={direction}
              $ratio={elementRatios[index]}
            >
              {element}
            </S.SplitPaneItem>
            {index !== elements.length - 1 && (
              <Resizer
                id={index}
                direction={direction}
                thickness={resizerThickness}
                themeColor={themeColor}
              />
            )}
          </>
        );
      })}
    </S.Container>
  );
};

export default SplitPane;
