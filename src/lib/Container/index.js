import { jsx as _jsx } from "react/jsx-runtime";
export default function Container({ ref, css, minWidth = 0, maxWidth = 0, children, }) {
    return (_jsx("div", { ref: ref, style: {
            width: '100vw',
            minWidth: minWidth ? `${minWidth}px` : '',
            maxWidth: maxWidth ? `${maxWidth}px` : '',
            ...css,
        }, children: children }));
}
