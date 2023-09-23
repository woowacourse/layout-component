import styled, { css } from 'styled-components';

interface ParallaxItemProps {
  translateZ: number;
  scale: number;
  objectFit: string;
  imgUrl: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
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

  transform: ${({ translateZ, scale }) =>
    `translateZ(${translateZ}px) scale(${scale});`};

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
