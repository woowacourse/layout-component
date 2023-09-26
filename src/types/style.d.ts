import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare module '*.module.css';
