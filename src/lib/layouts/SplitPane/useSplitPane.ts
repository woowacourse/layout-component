import {useEffect, useRef, useState} from 'react';

export const useSplitPane = (defaultSize: string, minSize?: string, maxSize?: string) => {
  const [paneSize, setPaneSize] = useState(defaultSize);
  const [isResizing, setIsResizing] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftPaneRef = useRef<HTMLDivElement | null>(null);
  const rightPaneRef = useRef<HTMLDivElement | null>(null);

  // 패널 크기 조절 시작
  const handleMouseDown = () => {
    setIsResizing(true);
  };

  // 패널 크기 조절 종료
  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    // 패널 사이즈가 변경중이라면
    if (!isResizing || !containerRef.current) {
      return;
    }

    // 패널의 양쪽 끝의 x 좌표를 구함
    const leftPaneLeftX = leftPaneRef.current?.getBoundingClientRect().left || 0;
    const rightPanelRightX = rightPaneRef.current?.getBoundingClientRect().right || 0;

    const mouseX = e.clientX;

    // 마우스 위치가 패널 범위를 벗어나면 종료
    if (mouseX < leftPaneLeftX || mouseX > rightPanelRightX) {
      return;
    }

    const newPaneSize = `${((mouseX - leftPaneLeftX) / (rightPanelRightX - leftPaneLeftX)) * 100}%`;

    // 최소 크기와 최대 크기를 체크하고 업데이트
    if ((minSize && newPaneSize < minSize) || (maxSize && newPaneSize > maxSize)) {
      return;
    }

    setPaneSize(newPaneSize);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 메모리 누수 방지
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return {
    containerRef,
    leftPaneRef,
    rightPaneRef,
    paneSize,
    isResizing,
    handleMouseDown,
  };
}
