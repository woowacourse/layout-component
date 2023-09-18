import { jsx as _jsx } from "react/jsx-runtime";
export default function Grid({ rows, columns, gap, children }) {
    const style = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}px`,
    };
    return _jsx("div", Object.assign({ style: style }, { children: children }));
}
