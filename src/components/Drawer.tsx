import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled, { CSSProp, css } from "styled-components";

export type Anchor = "TOP" | "BOTTOM" | "LEFT" | "RIGHT";

interface Props extends ComponentPropsWithoutRef<"div">, PropsWithChildren {
  anchor: Anchor;
  isOpen: boolean;
  onClose: () => void;
  etc?: CSSProp;
}

const Drawer = ({ anchor, isOpen, onClose, etc, children, ...rest }: Props) => {
  return (
    <>
      <S.Backdrop $isOpen={isOpen} onClick={onClose} />
      <S.ChildrenWrapper $anchor={anchor} $isOpen={isOpen} $etc={etc} {...rest}>
        {children}
      </S.ChildrenWrapper>
    </>
  );
};

export default Drawer;

const S = {
  Wrapper: styled.div``,

  Backdrop: styled.section<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);

    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  `,

  ChildrenWrapper: styled.section<{
    $anchor: Anchor;
    $isOpen: boolean;
    $etc?: CSSProp;
  }>`
    ${({ $anchor }) => position[$anchor]}
    ${({ $anchor, $isOpen }) => ($isOpen ? open : close[$anchor])}
    
    position: fixed;

    transition: all ease-out 0.4s;

    ${({ $etc }) => $etc}
  `,
};

const position = {
  TOP: css`
    top: 0;
    left: 0;
    width: 100vw;
  `,
  BOTTOM: css`
    bottom: 0;
    left: 0;
    width: 100vw;
  `,
  RIGHT: css`
    top: 0;
    right: 0;
    height: 100vh;
  `,
  LEFT: css`
    top: 0;
    left: 0;
    height: 100vh;
  `,
};

const open = css`
  transform: translate(0, 0);
`;

const close = {
  TOP: css`
    visibility: hidden;
    transform: translateY(-100%);
  `,
  BOTTOM: css`
    visibility: hidden;
    transform: translateY(100%);
  `,
  RIGHT: css`
    visibility: hidden;
    transform: translateX(100%);
  `,
  LEFT: css`
    visibility: hidden;
    transform: translateX(-100%);
  `,
};
