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

export interface SplitPaneProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * SplitPane을 적용하는 컴포넌트의 너비
   *
   * @default '100%'
   */
  width?: string;
  /**
   * 왼쪽 pane의 최대 너비
   * 숫자만 입력 가능하며 px로 고정됩니다.
   *
   * @default 500
   */
  paneMaxWidth?: number;
  /**
   * 왼쪽 pane의 최소 너비
   * 숫자만 입력 가능하며 px로 고정됩니다.
   *
   * @default 100
   */
  paneMinWidth?: number;
  /**
   * 가운데 분할선의 스타일
   * 선의 색과 굵이 등을 조절하고 싶다면 'borderRight' 속성을 선언해야 기본 선에 덮어씌워집니다.
   */
  dividerStyle?: CSSProperties;
  children: React.ReactNode | ReactElement;
}

const SplitPane = ({
  width = '100%',
  paneMaxWidth = 500,
  paneMinWidth = 100,
  dividerStyle,
  children,
  ...attributes
}: SplitPaneProps) => {
  const [isActive, setIsActive] = useState(false);
  const removeNullChildren = (children: ReactNode): ReactNode[] => {
    return React.Children.toArray(children).filter((c) => c);
  };
  const notNullChildren = removeNullChildren(children) as React.ReactNode[];

  const leftPaneRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isActive) return;

      if (leftPaneRef.current) {
        if (e.clientX < paneMinWidth || e.clientX > paneMaxWidth) return;

        leftPaneRef.current.style.width = `${e.clientX}px`;
      }
    },
    [isActive, paneMaxWidth, paneMinWidth]
  );

  useEffect(() => {
    if (leftPaneRef.current) {
      leftPaneRef.current.style.width = `${leftPaneRef.current.offsetWidth}px`;
      leftPaneRef.current.style.flex = 'none';
    }
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
