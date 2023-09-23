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
import Flex from '../components/Flex';
import FlexItem from '../components/FlexItem';
var meta = {
    title: 'Flex',
    component: Flex,
    decorators: [
        function (Story) { return (_jsx("div", __assign({ style: { height: '200px', width: '500px', backgroundColor: 'skyblue' } }, { children: _jsx(Story, {}, void 0) }), void 0)); },
    ]
}, satisfies, Meta;
_jsxs("typeof", __assign({ Flex: true }, { children: ["; export default meta; type Story = StoryObj", _jsxs("typeof", __assign({ meta: true }, { children: ["; interface FlexExampleProps ", isCustom, ": boolean; } const FlexExample = (", isCustom, ": FlexExampleProps) => ", , "return (", _jsxs(_Fragment, { children: [_jsx(FlexItem, __assign({ align: isCustom ? 'center' : 'auto' }, { children: "1" }), void 0), _jsx(FlexItem, { children: "2" }, void 0), _jsx(FlexItem, { children: "3" }, void 0)] }, void 0), "); }; export const Default: Story = ", args, ": ", children, ": ", _jsx(FlexExample, { isCustom: false }, void 0), ", }, }; export const Stack: Story = ", args, ": ", direction, ": 'column', justify: 'center', align: 'center', gap: 4, children: ", _jsx(FlexExample, { isCustom: false }, void 0), ", }, }; export const DirectionColumn: Story = ", args, ": ", direction, ": 'column', children: ", _jsx(FlexExample, { isCustom: false }, void 0), ", }, }; export const AlignSelf: Story = ", args, ": ", direction, ": 'column', justify: 'center', align: 'center', gap: 4, children: ", _jsx(FlexExample, { isCustom: true }, void 0), ", }, };"] }), void 0)] }), void 0);
//# sourceMappingURL=Flex.stories.js.map