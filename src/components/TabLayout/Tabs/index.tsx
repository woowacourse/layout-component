interface Props {
  tabs: string[];
  activateTab: (index: number) => void;
}

export default function Tabs({ tabs, activateTab }: Props) {
  return (
    <ul className='tab-button-list'>
      {tabs.map((tab, index) => {
        return (
          <li key={tab}>
            <button className='tab-button' onClick={() => activateTab(index)}>
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
