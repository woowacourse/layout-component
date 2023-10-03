import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
var meta = {
    title: 'Grid',
    component: Grid,
};
export default meta;
var StoryGridItems = function (_a) {
    var isCustom = _a.isCustom;
    return (_jsxs(_Fragment, { children: [_jsx(GridItem, { gridRow: isCustom ? '1/3' : 'auto', children: "A" }), _jsx(GridItem, { children: "B" }), _jsx(GridItem, { children: "C" }), _jsx(GridItem, { children: "D" }), _jsx(GridItem, { children: "E" })] }));
};
export var Default = {
    args: {
        columns: 3,
        gap: 10,
        children: _jsx(StoryGridItems, { isCustom: false }),
    },
};
export var Custom = {
    args: {
        columns: 3,
        gap: 10,
        children: _jsx(StoryGridItems, { isCustom: true }),
    },
};
//# sourceMappingURL=Grid.stories.js.map