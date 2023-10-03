/** @jsxImportSource @emotion/react */

import { PropsWithChildren } from 'react';
import { createChildrenWithId } from './useTab';
import { css } from '@emotion/react';

const TabPanels = ({ children }: PropsWithChildren) => {
  const childrenWithId = createChildrenWithId(children);

  return <div css={tabPanelsStyle}>{childrenWithId}</div>;
};

export default TabPanels;

const tabPanelsStyle = css({
  padding: '1rem',
});
