import styled from 'styled-components';
import {
  CommonLayoutStyleProps,
  commonLayoutStyle,
} from '../common/commonLayout';

interface GridProps extends CommonLayoutStyleProps {
  rows: number;
  columns: number;
  gap?: number;
}

const Grid = styled.div<GridProps>`
  ${commonLayoutStyle}
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
`;

export default Grid;
