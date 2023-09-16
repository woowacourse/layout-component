import { PropsWithChildren } from 'react';
import './index.css';
interface FlexItemProps extends PropsWithChildren {
    align?: 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}
declare const FlexItem: ({ align, children }: FlexItemProps) => import("react/jsx-runtime").JSX.Element;
export default FlexItem;
