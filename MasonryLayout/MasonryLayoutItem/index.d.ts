import { PropsWithChildren } from 'react';
interface MasonryLayoutItemProps extends PropsWithChildren {
    rowGap?: string;
    smallRowGap?: string;
    mediumRowGap?: string;
    largeRowGap?: string;
    xLargeRowGap?: string;
    doubleXLargeRowGap?: string;
    gap?: string;
    smallGap?: string;
    mediumGap?: string;
    largeGap?: string;
    xLargeGap?: string;
    doubleXLargeGap?: string;
}
export default function MasonryLayoutItem({ children, ...rest }: MasonryLayoutItemProps): import("react/jsx-runtime").JSX.Element;
export {};
