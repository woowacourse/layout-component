import { jsx as _jsx } from "react/jsx-runtime";
export default function Container({ children, minWidth, maxWidth, padding, }) {
    const style = {
        minWidth,
        maxWidth,
        padding: `${padding}px`,
        margin: "0 auto",
    };
    return _jsx("div", Object.assign({ style: style }, { children: children }));
}
