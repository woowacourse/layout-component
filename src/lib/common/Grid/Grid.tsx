import styled from '@emotion/styled';

import Container from '../Container';
import type { BasicLayoutProps } from '../FlexContainer/FlexContainer';
import { gapStyle } from '../FlexContainer/styles/flexContainer.style';
import { gridItemRepeatStyle } from './styles/grid.style';

export interface GridProps extends BasicLayoutProps {
  /** 행(row)의 개수/높이 변경 가능 
   *  - [string] 단위까지 적어줘야 함 (ex. 8px | 10px 20px...) 
      &nbsp; 높이 변경 가능
      - [number] 숫자만 적을 경우 행의 개수 변경 가능
      &nbsp; 높이는 부모의 높이에 맞춰짐
  */
  rows?: number | string;
  /** 열(column)의 개수/너비 변경 가능
      - [string] 단위까지 적어줘야 함 (ex. 8px | 10px 20px...) 
      &nbsp; 너비 변경 가능
      - [number] 숫자만 적을 경우 열의 개수 변경 가능
      &nbsp; 너비는 부모의 너비에 맞춰짐 */
  columns?: number | string;
  /** **columns 속성을 number로 적었을 때**, 행의(column)의 높이 변경 가능 */
  columnSize?: number | string;
  /** **rows 속성을 number로 적었을 때**, 행의(row)의 높이 변경 가능 */
  rowSize?: number | string;
  /**
   * Item 속성을 줄 경우, Grid Item으로 사용 가능
      - true : Grid Item으로 사용 가능
      - false : Grid Item으로 사용 불가
      @default false
   */
  item?: boolean;
  /**
   * **Grid Item일 경우**, grid-area 속성 사용 가능
      - areaName을 이용해 Grid Container에서 templateAreas 속성으로 Item 배치 가능
      @default ''
   */
  areaName?: string;
  /**
   * grid-template-areas 속성 사용 가능
   */
  templateAreas?: string;
}

const StyledGridContainer = styled(Container)`
  display: grid;
`;

const Grid = ({
  gap,
  rowGap,
  columnGap,
  rows,
  columns,
  columnSize,
  rowSize,
  item = false,
  areaName = '',
  templateAreas,
  ...attributes
}: GridProps) => {
  return (
    <StyledGridContainer
      css={[
        { gridTemplateAreas: templateAreas },
        gapStyle({ gap, rowGap, columnGap }),
        gridItemRepeatStyle({ rows, columns, rowSize, columnSize }),
        item && {
          display: 'initial',
          gridArea: areaName,
        },
      ]}
      {...attributes}
    />
  );
};

export default Grid;
