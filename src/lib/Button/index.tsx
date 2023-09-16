import styles from './Button.module.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export default function Button({
  primary = false,
  size = 'md',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary
    ? styles['button--primary']
    : styles['button--secondary'];
  const sizeClass = styles[`button--${size}`];

  return (
    <button
      type='button'
      className={[styles['button'], sizeClass, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
