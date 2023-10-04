import { content, root, vars } from "./Container.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import asCssLength from "../asCssLength";
import { PropsWithHTMLElement } from "../types";

export type ContainerProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      minWidth?: number | string;
      maxWidth?: number | string;
    },
    TElementType
  >;

const Container = <TElementType extends React.ElementType = "div">(
  props: ContainerProps<TElementType>
) => {
  const { as: Element = 'div', minWidth, maxWidth, ...restProps } = props;

  return (
    <Element className={root}>
      <div
        {...restProps}
        className={content}
        style={{
          ...restProps.style,
          ...assignInlineVars({
            [vars.minWidth]: asCssLength(minWidth ?? "initial"),
            [vars.maxWidth]: asCssLength(maxWidth ?? "initial"),
          }),
        }}
      />
    </Element>
  );
};

export default Container;
