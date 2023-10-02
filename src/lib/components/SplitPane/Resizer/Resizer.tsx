import * as S from './Resizer.styled';
import { Direction } from '../../../types/';

type ResizerProps = {
  id: number;
  direction: Direction;
  thickness: number;
};

const Resizer = (props: ResizerProps) => {
  const { id, direction, thickness } = props;

  return (
    <S.Container
      $direction={direction}
      $thickness={thickness}
      data-resizer-id={id}
    />
  );
};

export default Resizer;
