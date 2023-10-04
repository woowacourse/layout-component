import { createContext, memo } from 'react';

export type MasonryContextProps = {
  /** 행 사이의 간격 */
  rowGap?: React.CSSProperties['rowGap'];
};

export const MasonryContext = createContext<MasonryContextProps | null>(null);

const MasonryProvider = memo(function MasonryProvider(
  props: React.PropsWithChildren<MasonryContextProps>
) {
  const { rowGap, children } = props;

  return <MasonryContext.Provider value={{ rowGap }}>{children}</MasonryContext.Provider>;
});

export default MasonryProvider;
