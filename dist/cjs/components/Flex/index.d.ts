import { PropsWithChildren } from 'react';
import './index.css';
interface FlexProps extends PropsWithChildren {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'center' | 'start' | 'end';
    gap: number;
}
declare const Flex: ({ direction, justify, align, gap, children, }: FlexProps) => import("react/jsx-runtime").JSX.Element;
export default Flex;
