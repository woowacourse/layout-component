import React, {
  useState,
  useEffect,
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
} from "react";
import styled from "styled-components";

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
  const [columnWrapper, setColumnWrapper] = useState<
    Array<(React.ReactElement | null)[]>
  >([]);

  useEffect(() => {
    setColumnWrapper(distributeChildrenIntoColumns(children, columns, gap));
  }, [columns, children, gap]);

  return (
    <ColumnWrapper>
      {columnWrapper.map((columnItems, columnIndex) => (
        <MasonryContainer key={`column${columnIndex}`}>
          {columnItems}
        </MasonryContainer>
      ))}
    </ColumnWrapper>
  );
};

const MasonryContainer = styled.div`
  display: flex;
`;

const ColumnWrapper = styled.div`
  margin: 1em;
  flex: 1;
`;
