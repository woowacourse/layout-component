import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Flex from '../components/Flex';
import FlexItem from '../components/FlexItem';
var meta = {
    title: 'Flex',
    component: Flex,
    decorators: [
        function (Story) { return (_jsx("div", { style: { height: '200px', width: '500px', backgroundColor: 'skyblue' }, children: _jsx(Story, {}) })); },
    ],
};
export default meta;
var FlexExample = function (_a) {
    var isCustom = _a.isCustom;
    return (_jsxs(_Fragment, { children: [_jsx(FlexItem, { align: isCustom ? 'center' : 'auto', children: "1" }), _jsx(FlexItem, { children: "2" }), _jsx(FlexItem, { children: "3" })] }));
};
export var Default = {
    args: {
        children: _jsx(FlexExample, { isCustom: false }),
    },
};
export var Stack = {
    args: {
        direction: 'column',
        justify: 'center',
        align: 'center',
        gap: 4,
        children: _jsx(FlexExample, { isCustom: false }),
    },
};
export var DirectionColumn = {
    args: {
        direction: 'column',
        children: _jsx(FlexExample, { isCustom: false }),
    },
};
export var AlignSelf = {
    args: {
        direction: 'column',
        justify: 'center',
        align: 'center',
        gap: 4,
        children: _jsx(FlexExample, { isCustom: true }),
    },
};
//# sourceMappingURL=Flex.stories.js.map