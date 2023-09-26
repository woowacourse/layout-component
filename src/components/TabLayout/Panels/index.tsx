import { Children, PropsWithChildren } from 'react';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props extends PropsWithChildren {
  activeTab: number;
}

export default function Panels({ activeTab, children }: Props) {
  return (
    <div className={cx('panels')}>
      {Children.map(children, (child, index) => {
        if (activeTab !== index) return null;

        return <article className={cx('panel')}>{child}</article>;
      })}
    </div>
  );
}
