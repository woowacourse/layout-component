import { CSSProperties } from 'react';
export interface CommonStyleProps {
    /**
     * 컴포넌트의 너비를 조정할 수 있습니다.
     */
    width?: string;
    /**
     * true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)
     */
    fullScreen?: boolean;
    /**
     * margin 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    m?: string;
    /**
     * margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    mx?: string;
    /**
     * margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    my?: string;
    /**
     * margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    ml?: string;
    /**
     * margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    mr?: string;
    /**
     * margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    mb?: string;
    /**
     * margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    mt?: string;
    /**
     * margin에서 가로 옵션을 auto로 조정할 수 있습니다.
     */
    mxAuto?: boolean;
    /**
     * margin에서 세로 옵션을 auto로 조정할 수 있습니다.
     */
    myAuto?: boolean;
    /**
     * padding 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    p?: string;
    /**
     * padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    px?: string;
    /**
     * padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    py?: string;
    /**
     * padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    pl?: string;
    /**
     * padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    pr?: string;
    /**
     * padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    pb?: string;
    /**
     * padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%
     */
    pt?: string;
    fontSize?: string;
    fontWeight?: CSSProperties['fontWeight'];
    textAlign?: CSSProperties['textAlign'] | string;
    border?: string;
    borderRadius?: string;
    color?: string;
    bgColor?: string;
}
export declare const CommonTag: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CommonStyleProps>>;
