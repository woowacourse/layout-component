import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

export type Anchor = 'left' | 'right' | 'top' | 'bottom';

type Props = {
  /**
   * Drawer가 열릴 위치
   *
   * @default 'left'
   */
  anchor?: Anchor;
  /**
   * Drawer 활성화 여부
   *
   * @default false
   */
  open: boolean;
  /**
   * backdrop 클릭 시 실행할 핸들러
   *
   * @dafault undefined
   */
  onClose: Function;
};

const Drawer = ({ children, anchor = 'left', open = false, onClose }: PropsWithChildren<Props>) => {
  return (
    <>
      {open && <Backdrop onClick={() => onClose()} open={open} />}
      <StyledDrawer anchor={anchor} open={open}>
        {children}
      </StyledDrawer>
    </>
  );
};

export default Drawer;

const Backdrop = styled.div<Pick<Props, 'open'>>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const StyledDrawer = styled.div<Omit<Props, 'onClose'>>`
  position: fixed;
  transition: transform 300ms;
  background-color: white;

  ${({ anchor, open }) => {
    const commonLeftAndRightStyles = css`
      top: 0;
      height: 100vh;
      width: 260px;
    `;

    const commonUpAndBottomStyles = css`
      left: 0;
      right: 0;
      height: 260px;
      width: 100vw;
    `;

    switch (anchor) {
      case 'left':
        return css`
          ${commonLeftAndRightStyles}
          left: 0;
          transform: ${open ? 'translateX(0)' : 'translateX(-100%)'};
        `;
      case 'right':
        return css`
          ${commonLeftAndRightStyles}
          right: 0;
          transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
        `;
      case 'bottom':
        return css`
          ${commonUpAndBottomStyles}
          bottom: 0;
          transform: ${open ? 'translateY(0)' : 'translateY(100%)'};
        `;
      case 'top':
        return css`
          ${commonUpAndBottomStyles}
          top: 0;
          transform: ${open ? 'translateY(0)' : 'translateY(-100%)'};
        `;
      default:
        return;
    }
  }};
`;
