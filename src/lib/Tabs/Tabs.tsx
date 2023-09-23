import {
  Children,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import TabPanel from './TabPanel';
import { Flex } from '..';

type Label = string | number;
type PanelList = { label: Label; contents: ReactNode }[];

function Tabs({ children }: PropsWithChildren) {
  const [panelList, setPanelList] = useState<PanelList>([]);
  const [selectedPanelLabel, setSelectedPanelLabel] = useState<Label | null>(
    null
  );

  const selectedPanel = panelList.find(
    ({ label }) => label === selectedPanelLabel
  );

  const selectPanel = (label: Label) => setSelectedPanelLabel(label);

  useEffect(() => {
    Children.forEach(children, (child, index) => {
      const panel = child as ReactElement;

      const { label, children } = panel.props;

      setPanelList((prev) => [...prev, { label, contents: children }]);
      if (index === 0) setSelectedPanelLabel(label);
    });
  }, [children]);

  if (panelList.length === 0) return;

  return (
    <div>
      <Flex tag="ul" gap="10px">
        {panelList.map(({ label }) => {
          return (
            <Flex.Item tag="li" key={label} onClick={() => selectPanel(label)}>
              {label}
            </Flex.Item>
          );
        })}
      </Flex>
      <div>{selectedPanel?.contents}</div>
    </div>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;
