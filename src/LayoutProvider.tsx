import type { PropsWithChildren } from 'react';

import { Global } from '@emotion/react';

import { GlobalStyle } from '@styles/GlobalStyle';

type LayoutProviderProps = PropsWithChildren;

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
};

export default LayoutProvider;
