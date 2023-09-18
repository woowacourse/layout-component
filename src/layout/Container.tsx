import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

type Border = "s";
type Direction = "t" | "r" | "l" | "b";
type Position = "r" | "a" | "f" | "s";

type CSSPropertiesType =
  | "mxw"
  | "mxh"
  | "mnw"
  | "mnh"
  | "w"
  | "h"
  | "mt"
  | "mr"
  | "ml"
  | "mb"
  | "pt"
  | "pr"
  | "pl"
  | "pb"
  | "p"
  | "bg"
  | "bd"
  | "bdr";

type NumberOrStringPropertyType<T extends string> = Record<
  `${T}-${number | string}`,
  boolean
>;

type NumberOrStringPropertyKey =
  | "mxw"
  | "mxh"
  | "mnw"
  | "mnh"
  | "w"
  | "h"
  | "bg"
  | "bdr";

interface ContainerProps
  extends HTMLAttributes<HTMLElement>,
    NumberOrStringPropertyType<NumberOrStringPropertyKey>,
    NumberOrStringPropertyType<`m${Direction}` | `p${Direction}`>,
    Record<`p-${Position}`, boolean>,
    Record<`bd-${number}-${Border}-${string | number}`, boolean> {
  style: CSSProperties;
}

type CSSType = Record<CSSPropertiesType, keyof CSSProperties>;

const CSS: CSSType = {
  mxw: "maxWidth",
  mxh: "maxHeight",
  mnw: "minWidth",
  mnh: "minHeight",
  w: "width",
  h: "height",
  mt: "marginTop",
  mr: "marginRight",
  ml: "marginLeft",
  mb: "marginBottom",
  pt: "paddingTop",
  pr: "paddingRight",
  pl: "paddingLeft",
  pb: "paddingBottom",
  p: "position",
  bg: "backgroundColor",
  bd: "border",
  bdr: "borderRadius",
} as const;

const Container = (props: PropsWithChildren<Partial<ContainerProps>>) => {
  const { children, style, ...restProps } = props;
  const styles = Object.keys(restProps).reduce((obj, item) => {
    obj[CSS[item.split("-")[0] as CSSPropertiesType]] = `${
      item.split("-")[1]
    }px`;
    return obj;
  }, {} as Record<string, string>);

  return (
    <section
      style={{
        ...style,
        ...styles,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{children}</div>
    </section>
  );
};

export default Container;
