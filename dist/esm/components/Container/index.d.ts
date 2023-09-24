import { PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';
interface ContainerProps extends PropsWithChildren {
    maxwidth?: number;
    minwidth?: number;
    backgroundColor: CSSProperties['backgroundColor'];
}
declare const Container: ({ minwidth, maxwidth, backgroundColor, children, }: Partial<ContainerProps>) => import("react/jsx-runtime").JSX.Element;
export default Container;
