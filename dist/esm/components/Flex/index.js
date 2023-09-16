import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
const Flex = ({ direction = 'row', justify = 'start', align = 'start', gap = 0, wrap = false, children, }) => {
    const applyStyle = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
    };
    return (_jsx("div", { className: 'ys-layout-components-flex', style: applyStyle, children: children }));
};
export default Flex;
