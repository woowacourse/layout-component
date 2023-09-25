import { CSSProperties } from 'react';
import { PropsWithOutTag } from '../@type/props.type';
import { useTabContext } from './context';

export interface TabItemProps {
  value: number;
  label: string;
  disabled?: boolean;
  indicatorColor?: CSSProperties['color'];
}

export const TabItem = ({
  label,
  value,
  disabled,
  indicatorColor = 'blueviolet',
  style,
  ...rest
}: PropsWithOutTag<'button', TabItemProps>) => {
  const { focusTabIdx, setFocusTabIdx } = useTabContext();
  const isFocus = focusTabIdx === value;

  const changeFocusTabIdx = () => {
    setFocusTabIdx(value);
  };

  const styledElement: CSSProperties = {
    backgroundColor: 'transparent',
    border: 0,
    padding: '1rem',
    ...style,
    borderBottom: `2px solid ${isFocus ? indicatorColor : 'transparent'}`,
    color: isFocus && `${indicatorColor}`,
  };

  return (
    <button
      onClick={changeFocusTabIdx}
      style={{ ...styledElement }}
      {...rest}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
