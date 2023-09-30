import { useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import useMasonryContext from '../../hooks/useMasonryContext';
import { columnFlow, rowGapVar, volumeVar } from './Item.css';
import { toPixelIfNumber } from '../../../utils/toPixelIfNumber';

type ItemProps = {
  /** 각 Item의 rowGap을 개별적으로 설정 */
  rowGap?: React.CSSProperties['rowGap'];
};

const Item = (props: React.PropsWithChildren<ItemProps>) => {
  const { children, rowGap } = props;

  const [volume, setVolume] = useState(1);
  const item = useRef<HTMLDivElement>(null);
  const { rowGap: globalRowGap = 0 } = useMasonryContext();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      const { height } = entry.target.getBoundingClientRect();

      setVolume(Math.ceil(height));
    });

    if (item.current) resizeObserver.observe(item.current);

    return () => resizeObserver.disconnect();
  }, [rowGap]);

  return (
    <div
      ref={item}
      className={columnFlow}
      style={assignInlineVars({
        [rowGapVar]: toPixelIfNumber(rowGap ?? globalRowGap),
        [volumeVar]: volume.toString(),
      })}
    >
      {children}
    </div>
  );
};

export default Item;
