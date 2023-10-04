import { ElementType, ReactElement } from 'react';
import { PolymorphicComponentProps } from '../types/common';
export interface _ContainerProps {
    /**
     * 컴포넌트의 최소 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다.
     */
    minWidth?: string;
    /**
     * 컴포넌트의 최대 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다.
     */
    maxWidth?: string;
}
export type ContainerProps<T extends ElementType> = PolymorphicComponentProps<T, _ContainerProps>;
type ContainerComponent = <T extends ElementType>(props: ContainerProps<T>) => ReactElement | null;
declare const Container: ContainerComponent;
export default Container;
