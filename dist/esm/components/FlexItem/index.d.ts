import { PropsWithChildren } from 'react';
interface FlexItemProps extends PropsWithChildren {
    align: 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}
declare const FlexItem: ({ align, children }: Partial<FlexItemProps>) => import("react/jsx-runtime").JSX.Element;
export default FlexItem;
