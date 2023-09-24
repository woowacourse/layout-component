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
import { styled } from 'styled-components';

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

  const isSelected = (label: Label) => label === selectedPanelLabel;

  const isDuplicationLabel =
    new Set(panelList.map((panel) => panel.label)).size !== panelList.length;

  if (isDuplicationLabel) throw new Error('탭의 라벨이 중복되었습니다.');

  useEffect(() => {
    Children.forEach(children, (child, index) => {
      const panel = child as ReactElement;

      const { label } = panel.props;

      setPanelList((prev) => [...prev, { label, contents: panel }]);
      if (index === 0) setSelectedPanelLabel(label);
    });
  }, [children]);

  return (
    <Layout>
      <Flex tag="ul">
        {panelList.map(({ label }) => {
          return (
            <Flex.Item
              tag="li"
              key={label}
              onClick={() => setSelectedPanelLabel(label)}
              style={{
                color: isSelected(label) ? '#3b82f6' : '#000000',
              }}
            >
              {label}
              {isSelected(label) && <SelectedLine />}
            </Flex.Item>
          );
        })}
      </Flex>
      <div>{selectedPanel?.contents}</div>
    </Layout>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;

    border-bottom: 1.5px solid #d0d0d0;
    & > li {
      padding: 12px 16px;
      position: relative;

      transition: color 0.2s ease;

      cursor: pointer;
    }
  }
`;

const SelectedLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  height: 2px;

  background-color: #3b82f6;
`;
