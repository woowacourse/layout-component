import { CSSProperties, PropsWithChildren } from 'react';
import './index.css';
interface ContainerProps extends PropsWithChildren {
    maxWidth: number;
    customStyle?: Omit<CSSProperties, 'width'>;
    minWidth?: number;
}
declare const Container: ({ minWidth, maxWidth, customStyle, children, }: ContainerProps) => import("react/jsx-runtime").JSX.Element;
export default Container;
