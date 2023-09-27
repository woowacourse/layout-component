import { css } from '@emotion/react';

interface menuContainerStyleProps {
  highlightColor: string;
  noUnderline: boolean;
  vertical: boolean | undefined;
}

export const menuContainerStyle = ({
  highlightColor,
  noUnderline,
  vertical = false,
}: menuContainerStyleProps) => css`
  ${!noUnderline && `box-shadow: 0 2px 0 0 #eee;`}

  button {
    ${vertical && `box-shadow: 0 2px 0 0 #eee;`}
  }

  button.active {
    font-weight: 600;
    color: ${highlightColor};

    ${!noUnderline && `box-shadow: 0 2px 0 0 ${highlightColor};`}

    fill: ${highlightColor};
    stroke: ${highlightColor};
  }
`;
