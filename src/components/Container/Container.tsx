import type { ContentSectioningTags } from '~/types';
import * as S from './Container.styled';

export interface ContainerProps {
  children: React.ReactNode;
  as?: ContentSectioningTags;
  minWidth?: React.CSSProperties['minWidth'];
  maxWidth?: React.CSSProperties['maxWidth'];
}

const Container = (props: ContainerProps) => {
  const { children, as = 'div', minWidth, maxWidth = '100%' } = props;

  return (
    <S.ContainerRoot as={as} minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </S.ContainerRoot>
  );
};

export default Container;
