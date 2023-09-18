import { jsx as _jsx } from "react/jsx-runtime";
export default function Flex({ direction, justify, align, gap, children, }) {
    const style = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
    };
    return _jsx("div", Object.assign({ style: style }, { children: children }));
}
