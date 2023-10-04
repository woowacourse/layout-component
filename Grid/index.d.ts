import { ElementType, ReactElement } from 'react';
import { PolymorphicComponentProps } from '../types/common';
export interface _GridProps {
    /**
     * 숫자 혹은 문자열을 넣어 grid-template-rows 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(rows, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다.
     */
    rows?: string | number;
    /**
     * 숫자 혹은 문자열을 넣어 grid-template-columns를 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(columns, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다.
     */
    columns?: string | number;
    /**
     * Grid 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다.
     */
    gap?: string;
    /**
     * row 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다.
     */
    rowGap?: string;
    /**
     * column 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다.
     */
    columnGap?: string;
}
export type GridProps<T extends ElementType> = PolymorphicComponentProps<T, _GridProps>;
type GridComponent = <T extends ElementType>(props: GridProps<T>) => ReactElement | null;
declare const Grid: GridComponent;
export default Grid;
