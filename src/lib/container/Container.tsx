import { ContainerProps } from './types.ts';
import * as S from './Container.styled.tsx';

const Container = (props: ContainerProps) => {
  const { minWidth, maxWidth, children } = props;

  return (
    <S.Container minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </S.Container>
  );
};

export default Container;
