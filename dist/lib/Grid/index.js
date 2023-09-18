import { jsx as _jsx } from "react/jsx-runtime";
import "./style.css";
export default function Grid({ rows, columns, gap, children }) {
    const style = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}px`,
    };
    return (_jsx("div", Object.assign({ className: "grid", style: style }, { children: children })));
}
