import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
const Container = ({ minWidth, maxWidth, customStyle = {}, children, }) => {
    const applyStyle = Object.assign(Object.assign({}, customStyle), { minWidth: `${!minWidth ? maxWidth : minWidth}px`, width: `${maxWidth}px` });
    return (_jsx("div", { className: 'ys-layout-components-container', children: _jsx("div", { className: 'ys-layout-components-content', style: applyStyle, children: children }) }));
};
export default Container;
