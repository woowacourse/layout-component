import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { rowTabLayoutContainer, columnTabLayoutContainer, rowMenuContainer, columnMenuContainer, unselectedRowMenuItem, selectedRowMenuItem, unselectedColumnMenuItem, selectedColumnMenuItem, content, } from "./style";
export default function TabLayout({ itemList, menuDirection }) {
    var _a;
    const [nowTabKey, setNowTabKey] = useState(itemList[0].key);
    const isRow = menuDirection === "row";
    return (_jsxs("div", Object.assign({ style: isRow ? rowTabLayoutContainer : columnTabLayoutContainer }, { children: [_jsx("div", Object.assign({ style: content }, { children: (_a = itemList.find((item) => item.key === nowTabKey)) === null || _a === void 0 ? void 0 : _a.content })), _jsx("div", Object.assign({ style: isRow ? rowMenuContainer : columnMenuContainer }, { children: itemList.map(({ key, name }) => {
                    if (nowTabKey !== key)
                        return (_jsx("button", Object.assign({ style: isRow ? unselectedRowMenuItem : unselectedColumnMenuItem, onClick: () => setNowTabKey(key) }, { children: name }), key));
                    return (_jsx("button", Object.assign({ style: isRow ? selectedRowMenuItem : selectedColumnMenuItem, onClick: () => setNowTabKey(key) }, { children: name }), key));
                }) }))] })));
}
