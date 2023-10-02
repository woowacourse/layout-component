import { Children, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import type { Direction } from '../../types';
import useSplitPane from './useSplitPane';
import Resizer from './Resizer/Resizer';
import * as S from './SplitPane.styled';

type SplitPaneProps = {
  direction?: Direction;
  resizerThickness?: number;
  defaultRatios: number[];
  minimumRatio?: number;
  maximumRatio?: number;
};

const SplitPane = (props: PropsWithChildren<SplitPaneProps>) => {
  const {
    direction = 'row',
    resizerThickness = 15,
    defaultRatios,
    minimumRatio = 0,
    maximumRatio = 100,
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
    <S.Container ref={rootRef} $direction={direction}>
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
              />
            )}
          </>
        );
      })}
    </S.Container>
  );
};

export default SplitPane;
