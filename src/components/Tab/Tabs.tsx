/** @jsxImportSource @emotion/react */

import { PropsWithChildren } from 'react';
import { createChildrenWithId } from './useTab';
import { css } from '@emotion/react';

const Tabs = ({ children }: PropsWithChildren) => {
  const childrenWithId = createChildrenWithId(children);

  return (
    <div css={tabsStyle} role='tablist'>
      {childrenWithId}
    </div>
  );
};

export default Tabs;

const tabsStyle = css({
  display: 'flex',
  backgroundColor: '#d9d9d9',
  gap: '0.4rem',
  padding: '0.5rem',
  borderRadius: '8px',
});
