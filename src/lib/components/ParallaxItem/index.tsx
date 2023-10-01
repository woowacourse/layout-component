import styled, { css } from 'styled-components';

interface ParallaxItemProps {
  scale: number;
  objectFit: string;
  imgUrl: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  speed: number;
}

const ParallaxItem = ({ imgUrl, ...props }: ParallaxItemProps) => {
  return <Img src={imgUrl} {...props} />;
};

type ImgProps = Omit<ParallaxItemProps, 'imgUrl'>;

const Img = styled.img<ImgProps>`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};

  transform: ${({ speed, scale }) =>
    `translateZ(${(1 - speed) * -100}px) scale(${scale});`};

  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}

  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}

    ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
    
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `};
`;

export default ParallaxItem;
