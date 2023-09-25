import { CSSProperties, HTMLProps, PropsWithChildren } from "react";

type CSSPropertiesType = "gtc" | "gtr" | "rg" | "cg" | "g" | "gac" | "gar";

type CSSType = Record<CSSPropertiesType, keyof CSSProperties>;

type GridPropertyType = Record<`${CSSPropertiesType}-${string}`, boolean>;

const CSS: CSSType = {
  gtc: "gridTemplateColumns",
  gtr: "gridTemplateRows",
  rg: "rowGap",
  cg: "columnGap",
  g: "gap",
  gac: "gridAutoColumns",
  gar: "gridAutoRows",
} as const;

interface GridProps extends HTMLProps<HTMLElement>, GridPropertyType {
  style: CSSProperties;
}

const Grid = (props: PropsWithChildren<Partial<GridProps>>) => {
  const { children, style, ...restProps } = props;

  const styles = Object.keys(restProps).reduce((obj, item) => {
    obj[CSS[item.split("-")[0] as CSSPropertiesType]] = item
      .split("-")[1]
      .split("_")
      .join(" ");
    return obj;
  }, {} as Record<string, string>);

  return (
    <section style={{ display: "grid", ...style, ...styles }}>
      {children}
    </section>
  );
};

export default Grid;
