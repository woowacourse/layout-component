import { jsx as _jsx } from "react/jsx-runtime";
import "./style.css";
export default function Flex({ direction, justify, align, gap, children, }) {
    const style = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
    };
    return (_jsx("div", Object.assign({ className: "flex", style: style }, { children: children })));
}
