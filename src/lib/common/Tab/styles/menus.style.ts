import { css } from '@emotion/react';

import { lineClampStyle } from '@styles/text';

import type { MenusProps } from '../Menus';

interface menuContainerStyleProps
  extends Pick<MenusProps, 'highlightColor' | 'noUnderline' | 'lineClamp'> {
  vertical: boolean | undefined;
}

export const menuContainerStyle = ({
  highlightColor,
  noUnderline,
  vertical = false,
  lineClamp,
}: menuContainerStyleProps) => css`
  ${!noUnderline && `box-shadow: 0 2px 0 0 #eee;`}

  button {
    ${vertical && `box-shadow: 0 2px 0 0 #eee;`}
    ${lineClampStyle(lineClamp ? 1 : undefined)}
  }

  button.active {
    font-weight: 600;
    color: ${highlightColor};

    ${!noUnderline && `box-shadow: 0 2px 0 0 ${highlightColor};`}

    fill: ${highlightColor};
    stroke: ${highlightColor};
  }
`;
