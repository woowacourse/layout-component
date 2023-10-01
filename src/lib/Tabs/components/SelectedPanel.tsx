import useTabs from '../hooks/useTabs';

const SelectedPanel = () => {
  const { selectedPanel } = useTabs();

  return <div>{selectedPanel?.contents}</div>;
};

export default SelectedPanel;
