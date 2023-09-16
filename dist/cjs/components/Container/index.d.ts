import { PropsWithChildren } from 'react';
interface ContainerProps extends PropsWithChildren {
    maxWidth?: number;
    minWidth?: number;
}
declare const Container: ({ minWidth, maxWidth, children, }: Partial<ContainerProps>) => import("react/jsx-runtime").JSX.Element;
export default Container;
