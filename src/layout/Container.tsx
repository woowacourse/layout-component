import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import Flex from "./Flex";

type CSSUnit = "rem" | "em" | "px" | "vh" | "vw" | "%";
type SizeCSSType = "mxw" | "mxh" | "mnw" | "mnh" | "w" | "h";
type BoxCSSType = "mt" | "mr" | "ml" | "mb" | "pt" | "pr" | "pl" | "pb";
type BorderCSSType = "bw" | "bs" | "bc" | "br";
type StyleCSSType = "bgc";
type PositionCSSType = "p" | "t" | "r" | "l" | "b";

type CSSType = Record<CSSPropertiesType, keyof CSSProperties>;

type SizeCSSPropertyType = Record<
  `${SizeCSSType}-${number}-${CSSUnit}`,
  boolean
>;
type BoxCSSPropertyType = Record<`${BoxCSSType}-${number}-${CSSUnit}`, boolean>;
type BorderCSSPropertyType = Record<
  `${
    | Extract<BorderCSSType, "bw">
    | Extract<BorderCSSType, "br">}-${number}-${CSSUnit}`,
  boolean
> &
  Record<
    `${Extract<BorderCSSType, "bs"> | Extract<BorderCSSType, "bc">}-${string}`,
    boolean
  >;
type StyleCSSPropertyType = Record<`${StyleCSSType}-${string}`, boolean>;
type PositionCSSPropertyType = Record<
  `${PositionCSSType}-${number}-${CSSUnit}`,
  boolean
> &
  Record<`${PositionCSSType}-${string}`, boolean>;

type CSSPropertiesType = SizeCSSType &
  BoxCSSType &
  BorderCSSType &
  StyleCSSType &
  PositionCSSType;

interface ContainerProps
  extends Omit<HTMLAttributes<HTMLElement>, "style">,
    SizeCSSPropertyType,
    BoxCSSPropertyType,
    BorderCSSPropertyType,
    StyleCSSPropertyType,
    PositionCSSPropertyType {}

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

type PropertyCategoryType = "STRING_PROPERTY" | "NUMERIC_PROPERTY";

const checkPropertyCategory = (properties: string[]): PropertyCategoryType => {
  return properties.length === 3 ? "NUMERIC_PROPERTY" : "STRING_PROPERTY";
};

const Container = (props: PropsWithChildren<Partial<ContainerProps>>) => {
  const { children, ...restProps } = props;
  const styles = Object.keys(restProps).reduce((obj, item) => {
    const properties = item.split("-");

    if (checkPropertyCategory(properties) === "NUMERIC_PROPERTY") {
      obj[
        CSS[properties[0] as CSSPropertiesType]
      ] = `${properties[1]}${properties[2]}`;
    } else {
      obj[CSS[properties[0] as CSSPropertiesType]] = `${properties[1]}`;
    }

    return obj;
  }, {} as Record<string, string>);

  return (
    <section
      style={{
        ...styles,
      }}
    >
      <Flex js-center ai-center>
        {children}
      </Flex>
    </section>
  );
};

export default Container;
