import { CSSProperties, HTMLProps, PropsWithChildren } from "react";

type CSSPropertiesType = "jc" | "ac" | "ai" | "fw" | "fd";

type CSSType = Record<CSSPropertiesType, keyof CSSProperties>;

type FlexPropertyType = Record<`${CSSPropertiesType}-${string}`, boolean>;

const CSS: CSSType = {
  fd: "flexDirection",
  fw: "flexWrap",
  jc: "justifyContent",
  ac: "alignContent",
  ai: "alignItems",
} as const;

interface FlexProps extends HTMLProps<HTMLElement>, FlexPropertyType {
  style: CSSProperties;
}

const Flex = (props: PropsWithChildren<Partial<FlexProps>>) => {
  const { children, style, ...restProps } = props;

  const styles = Object.keys(restProps).reduce((obj, item) => {
    obj[CSS[item.split("-")[0] as CSSPropertiesType]] = item.split("-")[1];
    return obj;
  }, {} as Record<string, string>);

  return (
    <section style={{ display: "flex", ...style, ...styles }}>
      {children}
    </section>
  );
};

export default Flex;
