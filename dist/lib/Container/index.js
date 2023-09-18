import { jsx as _jsx } from "react/jsx-runtime";
import "./style.css";
export default function Container({ children, minWidth, maxWidth, padding, }) {
    const style = {
        minWidth,
        maxWidth,
        padding: `${padding}px`,
    };
    return (_jsx("div", Object.assign({ className: "container" }, { children: _jsx("div", Object.assign({ style: style }, { children: children })) })));
}
