import { PropsWithHTMLElement } from "../types";
import { active, root } from "./TabButton.css";

export type TabButtonProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      startIcon?: React.ReactNode;
      active?: boolean;
    },
    TElementType
  >;

const TabButton = <TElementType extends React.ElementType = "button">(
  props: TabButtonProps<TElementType>
) => {
  const {
    as: Element = "button",
    startIcon,
    active: isActive,
    children,
    ...restProps
  } = props;

  return (
    <Element {...restProps} className={[isActive && active, root].join(" ")}>
      {startIcon}
      {children}
    </Element>
  );
};

export default TabButton;
