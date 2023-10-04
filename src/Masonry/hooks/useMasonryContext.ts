import { useContext } from 'react';
import { MasonryContext } from '../contexts';

const useMasonryContext = () => {
  const value = useContext(MasonryContext);
  if (!value) throw new Error('컴포넌트가 MasonryProvider의 자손이 아닙니다!');
  return value;
};

export default useMasonryContext;
