import { useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import useMasonryContext from '../../hooks/useMasonryContext';
import { columnFlow, rowGapVar, volumeVar } from './Item.css';
import { toPixelIfNumber } from '../../../utils/toPixelIfNumber';

const Item = (props: React.PropsWithChildren) => {
  const { children } = props;

  const [volume, setVolume] = useState(1);
  const item = useRef<HTMLDivElement>(null);
  const { rowGap = 0 } = useMasonryContext();

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
        [rowGapVar]: toPixelIfNumber(rowGap),
        [volumeVar]: volume.toString(),
      })}
    >
      {children}
    </div>
  );
};

export default Item;
