const space = [
  '4px',
  '8px',
  '12px',
  '16px',
  '20px',
  '28px',
  '40px',
  '48px',
  '60px',
  '80px',
] as const

export type SpaceThemeKeys = keyof typeof space

export default space
