import { PropsWithHTMLElement } from "../types";

export type TabProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      button?: React.ReactNode | string;
    },
    TElementType
  >;

const Tab = <TElementType extends React.ElementType = "div">(
  props: TabProps<TElementType>
) => {
  const { as: Element = "div", button, ...restProps } = props;

  return <Element {...restProps} />;
};

export default Tab;
