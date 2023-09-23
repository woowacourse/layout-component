import { PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';
interface ContainerProps extends PropsWithChildren {
    maxWidth?: number;
    minWidth?: number;
    backgroundColor: CSSProperties['backgroundColor'];
}
declare const Container: ({ minWidth, maxWidth, backgroundColor, children, }: Partial<ContainerProps>) => import("react/jsx-runtime").JSX.Element;
export default Container;
