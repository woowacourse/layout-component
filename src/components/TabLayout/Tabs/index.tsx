interface Props {
  tabs: string[];
  activateTab: (index: number) => void;
}

export default function Tabs({ tabs, activateTab }: Props) {
  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button key={tab} onClick={() => activateTab(index)}>
            {tab}
          </button>
        );
      })}
    </div>
  );
}
