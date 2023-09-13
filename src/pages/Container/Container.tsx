import type { ComponentPropsWithoutRef } from 'react';
import { wrapperStyle } from './Container.style';

interface ContainerProps extends ComponentPropsWithoutRef<React.ElementType> {
  /**
   * 최대 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
   *
   * @default '100%'
   */
  maxWidth?: number | string;
  /**
   * 최소 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
   *
   * @default '100px'
   */
  minWidth?: number | string;
  /**
   * Container의 tag로 설정하고 싶은 값
   *
   * @default 'div'
   */
  as?: 'div' | 'dialog' | 'section' | 'article' | 'area' | 'form';
}

const Container = ({
  maxWidth = '100%',
  minWidth = '100px',
  as: RenderTag = 'div',
  children,
  ...attributes
}: ContainerProps) => {
  return (
    <RenderTag {...attributes} css={wrapperStyle(minWidth, maxWidth)}>
      {children}
    </RenderTag>
  );
};

export default Container;
