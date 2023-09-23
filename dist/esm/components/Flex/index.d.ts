import { PropsWithChildren } from 'react';
interface FlexProps extends PropsWithChildren {
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align: 'center' | 'start' | 'end';
    gap: number;
}
declare const Flex: ({ direction, justify, align, gap, children, }: Partial<FlexProps>) => import("react/jsx-runtime").JSX.Element;
export default Flex;
