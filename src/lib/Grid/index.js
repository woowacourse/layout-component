import { jsx as _jsx } from "react/jsx-runtime";
export default function Grid({ ref, css, rows = 1, columns = 1, gap = 0, gapX, gapY, children, }) {
    return (_jsx("div", { ref: ref, style: {
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: `${gap}px`,
            rowGap: gapY ? `${gapY}px` : '',
            columnGap: gapX ? `${gapX}px` : '',
            ...css,
        }, children: children }));
}
