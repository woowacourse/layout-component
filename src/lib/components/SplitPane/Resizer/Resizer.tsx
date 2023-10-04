import * as S from './Resizer.styled';
import type { Direction, HexColor } from '../../../types/';

type ResizerProps = {
  id: number;
  direction: Direction;
  thickness: number;
  themeColor: HexColor;
};

const Resizer = (props: ResizerProps) => {
  const { id, direction, thickness, themeColor } = props;

  return (
    <S.Container
      $direction={direction}
      $thickness={thickness}
      $themeColor={themeColor}
      data-resizer-id={id}
    >
      {Array.from({ length: 3 }).map(() => (
        <S.Diamond $size={thickness / 3} $themeColor={themeColor} />
      ))}
    </S.Container>
  );
};

export default Resizer;
