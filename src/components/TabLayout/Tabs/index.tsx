import styles from './index.module.css';

interface Props {
  tabs: string[];
  activateTab: (index: number) => void;
}

export default function Tabs({ tabs, activateTab }: Props) {
  return (
    <ul className={styles['tab-button-list']}>
      {tabs.map((tab, index) => {
        return (
          <li className={styles['tab-button-item']} key={tab}>
            <button className={styles['tab-button']} onClick={() => activateTab(index)}>
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
