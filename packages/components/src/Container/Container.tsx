import { content, root, vars } from "./Container.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import cssLength from "../cssLength";
import { PropsWithHTMLElement } from "../types";

export type ContainerProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      minWidth?: number;
      maxWidth?: number;
    },
    TElementType
  >;

const Container = <TElementType extends React.ElementType = "div">(
  props: ContainerProps<TElementType>
) => {
  const { as: Element = 'div', minWidth, maxWidth, ...divProps } = props;

  return (
    <Element className={root}>
      <div
        {...divProps}
        className={content}
        style={{
          ...divProps.style,
          ...assignInlineVars({
            [vars.minWidth]: cssLength(minWidth ?? "initial"),
            [vars.maxWidth]: cssLength(maxWidth ?? "initial"),
          }),
        }}
      />
    </Element>
  );
};

export default Container;
