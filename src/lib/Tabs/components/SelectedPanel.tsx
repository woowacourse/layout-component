import { useTab } from '../TabsProvider';

const SelectedPanel = () => {
  const { selectedPanel } = useTab();

  return <div>{selectedPanel?.contents}</div>;
};

export default SelectedPanel;
