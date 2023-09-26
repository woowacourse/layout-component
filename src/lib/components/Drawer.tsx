import { ComponentPropsWithoutRef, Ref, forwardRef } from 'react'
import { styled } from 'styled-components'
import ReactDom from 'react-dom'

interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Drawer의 배치 방향을 설정합니다.
   */
  direction: 'right' | 'left' | 'top' | 'bottom'
  /**
   * Drawer의 열림 여부를 설정합니다.
   */
  isShow: boolean
  /**
   * Drawer를 닫는 함수입니다.
   */
  closeSheet: () => void
}

type DrawerContainerProps = Pick<DrawerProps, 'direction' | 'isShow'>

const Drawer = forwardRef(
  (
    { direction = 'right', isShow, closeSheet, children }: DrawerProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return ReactDom.createPortal(
      <>
        <DrawerContainer direction={direction} isShow={isShow} ref={ref}>
          {children}
        </DrawerContainer>
        {isShow && <DrawerBackDrop onClick={closeSheet} />}
      </>,
      document.body,
    )
  },
)

const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  width: ${(props) =>
    props.direction === 'top' || props.direction === 'bottom' ? '100%' : 'auto'};
  height: ${(props) =>
    props.direction === 'top' || props.direction === 'bottom' ? 'auto' : '100%'};
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  z-index: 10;

  /* Props로 받은 direction에 따라 transform을 설정합니다. */
  transform: ${(props) => {
    switch (props.direction) {
      case 'left':
        return props.isShow ? 'translateX(0)' : 'translateX(-100%)'
      case 'top':
        return props.isShow ? 'translateY(0)' : 'translateY(-100%)'
      case 'bottom':
        return props.isShow ? 'translateY(0)' : 'translateY(100%)'
      default:
        return props.isShow ? 'translateX(0)' : 'translateX(100%)'
    }
  }};
  /* 방향에 따른 위치 설정 */
  top: ${(props) => (props.direction === 'top' || props.direction === 'right' ? '0' : 'auto')};
  bottom: ${(props) => (props.direction === 'bottom' ? '0' : 'auto')};
  left: ${(props) =>
    props.direction === 'left' || props.direction === 'top' || props.direction === 'bottom'
      ? '0'
      : 'auto'};
  right: ${(props) => (props.direction === 'right' ? '0' : 'auto')};
`

const DrawerBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.35);
`
export default Drawer
