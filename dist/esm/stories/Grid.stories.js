var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
var meta = {
    title: 'Grid',
    component: Grid
}, satisfies, Meta;
_jsxs("typeof", __assign({ Grid: true }, { children: ["; export default meta; type Story = StoryObj", _jsxs("typeof", __assign({ meta: true }, { children: ["; interface StoryGridItemsProps ", isCustom, ": boolean; } const StoryGridItems = (", isCustom, ": StoryGridItemsProps) => ", , "return (", _jsxs(_Fragment, { children: [_jsx(GridItem, __assign({ gridRow: isCustom ? '1/3' : 'auto' }, { children: "A" }), void 0), _jsx(GridItem, { children: "B" }, void 0), _jsx(GridItem, { children: "C" }, void 0), _jsx(GridItem, { children: "D" }, void 0), _jsx(GridItem, { children: "E" }, void 0)] }, void 0), "); }; export const Default: Story = ", args, ": ", columns, ": 3, gap: 10, children: ", _jsx(StoryGridItems, { isCustom: false }, void 0), ", }, }; export const Custom: Story = ", args, ": ", columns, ": 3, gap: 10, children: ", _jsx(StoryGridItems, { isCustom: true }, void 0), ", }, };"] }), void 0)] }), void 0);
//# sourceMappingURL=Grid.stories.js.map