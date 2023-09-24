var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useState } from 'react';
import styled from 'styled-components';
var TabLayoutContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  display: flex;\n"], ["\n  position: fixed;\n  bottom: 0;\n  display: flex;\n"])));
var TabLayoutHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var TabHeaderItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  cursor: pointer;\n"], ["\n  ", ";\n  cursor: pointer;\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected && 'border-bottom: 3px solid blue';
});
var TabLayout = function (_a) {
    var tabs = _a.tabs, children = _a.children;
    var _b = useState(0), selectIdx = _b[0], setSelectIdx = _b[1];
    var selectedChildren = Children.toArray(children);
    return (_jsxs(TabLayoutContainer, { children: [_jsx(TabLayoutHeader, { children: tabs.map(function (element, idx) { return (_jsx(TabHeaderItem, { onClick: function () { return setSelectIdx(idx); }, isSelected: idx === selectIdx, children: element }, element)); }) }), selectedChildren[selectIdx]] }));
};
export default TabLayout;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map