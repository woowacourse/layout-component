import React from "react";
import "./style.css";
interface ContainerProps extends React.PropsWithChildren {
    minWidth: string;
    maxWidth: string;
    padding: number;
}
export default function Container({ children, minWidth, maxWidth, padding, }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
