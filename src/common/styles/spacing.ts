import { css } from '@emotion/react';

export interface Spacing {
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pl?: number | string;
  pr?: number | string;
  pt?: number | string;
  pb?: number | string;
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
  mb?: number | string;
}

const addUnit = (prop: number | string) => {
  if (typeof prop === 'string') return prop;

  return `${prop}px`;
};

export const spacingStyle = ({
  p,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  m,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
}: Spacing) => css`
  ${p !== undefined && `padding: ${addUnit(p)}`};
  ${px !== undefined && `padding-left: ${addUnit(px)}; padding-right: ${addUnit(px)}`};
  ${py !== undefined && `padding-top: ${addUnit(py)}; padding-bottom: ${addUnit(py)}`};

  ${pt !== undefined && `padding-top: ${addUnit(pt)}`};
  ${pr !== undefined && `padding-right: ${addUnit(pr)}`};
  ${pb !== undefined && `padding-bottom: ${addUnit(pb)}`};
  ${pl !== undefined && `padding-left: ${addUnit(pl)}`};

  ${m !== undefined && `margin: ${addUnit(m)}`};
  ${mx !== undefined && `margin-left: ${addUnit(mx)}; margin-right: ${addUnit(mx)}`};
  ${my !== undefined && `margin-top: ${addUnit(my)}; margin-bottom: ${addUnit(my)}`};

  ${mt !== undefined && `margin-top: ${addUnit(mt)}`};
  ${mr !== undefined && `margin-right: ${addUnit(mr)}`};
  ${mb !== undefined && `margin-bottom: ${addUnit(mb)}`};
  ${ml !== undefined && `margin-left: ${addUnit(ml)}`};
`;

// for Storybook
export const spacingArgTypes = {
  p: {
    control: {
      type: 'text',
    },
    description: `상하좌우 padding
    <br />**아래의 설명은 모든 spacing props에 해당**
    <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
    <br />&nbsp; 🔷 스토리북에서는 string 🔷
    <br />- [number] 숫자만 적을 경우 px로 자동 변환
    `,
  },
  py: {
    control: {
      type: 'text',
    },
    description: `상하 padding`,
  },
  px: {
    control: {
      type: 'text',
    },
    description: `좌우 padding`,
  },
  pt: {
    control: {
      type: 'text',
    },
    description: `위에 padding`,
  },
  pr: {
    control: {
      type: 'text',
    },
    description: `오른쪽에 padding`,
  },
  pb: {
    control: {
      type: 'text',
    },
    description: `아래에 padding`,
  },
  pl: {
    control: {
      type: 'text',
    },
    description: `왼쪽에 padding`,
  },

  m: {
    control: {
      type: 'text',
    },
    description: `상하좌우 margin`,
  },
  my: {
    control: {
      type: 'text',
    },
    description: `상하 margin`,
  },
  mx: {
    control: {
      type: 'text',
    },
    description: `좌우 margin`,
  },
  mt: {
    control: {
      type: 'text',
    },
    description: `위에 margin`,
  },
  mr: {
    control: {
      type: 'text',
    },
    description: `오른쪽에 margin`,
  },
  mb: {
    control: {
      type: 'text',
    },
    description: `아래에 margin`,
  },
  ml: {
    control: {
      type: 'text',
    },
    description: `왼쪽에 margin`,
  },
} as const;
