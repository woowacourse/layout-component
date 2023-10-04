import React, { useEffect, useRef, useState, useCallback } from 'react';
import type {
  ComponentPropsWithoutRef,
  ReactElement,
  CSSProperties,
  ReactNode,
} from 'react';
import { Flex } from '../..';
import {
  defaultDividerStyle,
  pane1Style,
  pane2Style,
  splitPaneContainerStyle,
} from './SplitPane.styles';

type pixelWidth = `${number}px`;

export interface SplitPaneProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * SplitPane을 적용하는 컴포넌트의 너비
   *
   * @default '100%'
   */
  width?: string;
  /**
   * 왼쪽 pane의 최대 너비
   *
   * @default '500px'
   */
  paneMaxWidth?: pixelWidth;
  /**
   * 왼쪽 pane의 최소 너비
   *
   * @default '100px'
   */
  paneMinWidth?: pixelWidth;
  /**
   * 가운데 분할선의 스타일
   * 선의 색과 굵이 등을 조절하고 싶다면 'borderRight' 속성을 선언해야 기본 선에 덮어씌워집니다.
   */
  dividerStyle?: CSSProperties;
  children: React.ReactNode | ReactElement;
}

const SplitPane = ({
  width = '100%',
  paneMaxWidth = '500px',
  paneMinWidth = '100px',
  dividerStyle,
  children,
  ...attributes
}: SplitPaneProps) => {
  const [isActive, setIsActive] = useState(false);

  const removeNullChildren = (children: ReactNode): ReactNode[] | undefined => {
    return React.Children.map(children, (c) => c)?.filter((c) => c);
  };
  const notNullChildren = removeNullChildren(children);

  if (!Array.isArray(notNullChildren)) {
    throw new Error(
      '자식 컴포넌트가 유효하지 않습니다. 2개의 컴포넌트를 넣었는지 확인해주세요.'
    );
  }

  const leftPaneRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isActive) return;

      if (leftPaneRef.current) {
        if (
          e.clientX < Number(paneMinWidth.replace('px', '')) ||
          e.clientX > Number(paneMaxWidth.replace('px', ''))
        )
          return;

        leftPaneRef.current.style.width = `${e.clientX}px`;
      }
    },
    [isActive, paneMaxWidth, paneMinWidth]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      if (leftPaneRef.current) {
        leftPaneRef.current.style.width = `${leftPaneRef.current.offsetWidth}px`;
        leftPaneRef.current.style.flex = 'none';
      }
    });
  }, []);

  const handleMouseUp = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <Flex
      css={splitPaneContainerStyle({ width })}
      onMouseMove={handleMouseMove}
      {...attributes}
      dir="row"
    >
      <div draggable={false} css={pane1Style} ref={leftPaneRef}>
        {notNullChildren[0]}
      </div>
      <div
        css={defaultDividerStyle}
        style={dividerStyle}
        onMouseDown={handleMouseDown}
      />
      <div draggable={false} css={pane2Style}>
        {notNullChildren[1]}
      </div>
    </Flex>
  );
};

export default SplitPane;
