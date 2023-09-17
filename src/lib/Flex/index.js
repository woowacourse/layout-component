import { jsx as _jsx } from "react/jsx-runtime";
export default function Flex({ ref, css, direction = 'row', alignItems = 'start', flexWrap = 'nowrap', justifyContent = 'start', children, }) {
    return (_jsx("div", { ref: ref, style: {
            display: 'flex',
            justifyContent,
            alignItems,
            flexWrap,
            flexDirection: direction,
            ...css,
        }, children: children }));
}
