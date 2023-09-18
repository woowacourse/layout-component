import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export default function Button({
  primary = false,
  size = 'md',
  label,
  ...props
}: ButtonProps) {
  return (
    <StyledButton type='button' $primary={primary} $size={size} {...props}>
      {label}
    </StyledButton>
  );
}

const SIZE = {
  sm: {
    fontSize: '12px',
    padding: '10px 16px',
  },
  md: {
    fontSize: '14px',
    padding: '11px 20px',
  },
  lg: {
    fontSize: '16px',
    padding: '12px 24px',
  },
};

const StyledButton = styled.button<{
  $primary: boolean;
  $size: 'sm' | 'md' | 'lg';
}>`
  display: inline-block;

  padding: ${(props) => SIZE[props.$size].padding};
  border-radius: 3em;
  border: ${(props) =>
    props.$primary ? '1px solid #1ea7fd' : '1px solid gray'};

  color: ${(props) => (props.$primary ? 'white' : 'black')};
  background-color: ${(props) => (props.$primary ? '#1ea7fd' : 'transparent')};

  box-shadow: ${(props) =>
    props.$primary && ' rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};

  font-size: ${(props) => SIZE[props.$size].fontSize};
  font-weight: 700;
  line-height: 1;

  cursor: pointer;
`;
