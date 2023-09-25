import { Children, PropsWithChildren } from 'react';
import styles from './index.module.css';

interface Props extends PropsWithChildren {
  activeTab: number;
}

export default function Panels({ activeTab, children }: Props) {
  return (
    <div className={styles.panels}>
      {Children.map(children, (child, index) => {
        if (activeTab !== index) return null;

        return <article className={styles.panel}>{child}</article>;
      })}
    </div>
  );
}
