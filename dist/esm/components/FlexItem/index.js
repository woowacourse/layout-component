import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
const FlexItem = ({ align = 'auto', children }) => {
    const applyStyle = {
        alignSelf: align,
    };
    return (_jsx("div", { className: 'ys-layout-components-flex-item', style: applyStyle, children: children }));
};
export default FlexItem;
