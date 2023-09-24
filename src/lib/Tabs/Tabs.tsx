import { PropsWithChildren } from 'react';
import TabPanel from './TabPanel';
import { Flex } from '..';
import { styled } from 'styled-components';
import useTabs from './useTabs';

function Tabs({ children }: PropsWithChildren) {
  const { panelList, selectedPanel, selectPanel, isSelected } =
    useTabs(children);

  return (
    <Layout>
      <Flex tag="ul">
        {panelList.map(({ label }) => {
          return (
            <Flex.Item
              tag="li"
              key={label}
              onClick={() => selectPanel(label)}
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
