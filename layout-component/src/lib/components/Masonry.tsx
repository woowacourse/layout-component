import React, {
  useState,
  useEffect,
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
} from "react";

interface MasonryLayoutProps {
  columns: number;
  gap: number;
  children: ReactNode;
}

function distributeChildrenIntoColumns(
  children: ReactNode,
  columns: number,
  gap: number
) {
  const columnWrapper = Array.from(
    { length: columns },
    () => [] as (ReactElement | null)[]
  );
  const columnHeights = Array.from({ length: columns }, () => 0);

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    const elementChild = child as ReactElement;
    const shortestColumnIndex = columnHeights.indexOf(
      Math.min(...columnHeights)
    );
    const itemHeight = parseInt(
      elementChild.props.style?.height?.toString().replace("px", "") || "0",
      10
    );

    const newChild = (
      <elementChild.type
        {...elementChild.props}
        style={{
          ...elementChild.props.style,
          marginBottom: gap,
          width: "100%",
        }}
      />
    );

    columnWrapper[shortestColumnIndex].push(newChild);
    columnHeights[shortestColumnIndex] += itemHeight + gap;
  });

  return columnWrapper;
}

export const Masonry = ({ columns, children, gap }: MasonryLayoutProps) => {
  // 여기에 새로운 prop을 추가합니다.

  const [columnWrapper, setColumnWrapper] = useState<
    Array<(React.ReactElement | null)[]>
  >([]);

  useEffect(() => {
    setColumnWrapper(distributeChildrenIntoColumns(children, columns, gap));
  }, [columns, children, gap]);

  return (
    <div style={{ display: "flex" }}>
      {columnWrapper.map((columnItems, columnIndex) => (
        <div key={`column${columnIndex}`} style={{ margin: "1em", flex: "1" }}>
          {columnItems}
        </div>
      ))}
    </div>
  );
};
