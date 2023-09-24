import { Children, ReactElement, useState } from 'react';
import styled from 'styled-components';

interface TabLayoutProps {
  tabs: string[];
  children: ReactElement;
}

interface TabHeaderItemProps {
  isSelected: boolean;
}

const TabLayoutContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
`;

const TabLayoutHeader = styled.div`
  display: flex;
`;

const TabHeaderItem = styled.div<TabHeaderItemProps>`
  ${({ isSelected }) => isSelected && 'border-bottom: 3px solid blue'};
  cursor: pointer;
`;

const TabLayout = ({ tabs, children }: TabLayoutProps) => {
  const [selectIdx, setSelectIdx] = useState(0);
  const selectedChildren = Children.toArray(children);

  return (
    <TabLayoutContainer>
      <TabLayoutHeader>
        {tabs.map((element, idx) => (
          <TabHeaderItem
            key={element}
            onClick={() => setSelectIdx(idx)}
            isSelected={idx === selectIdx}
          >
            {element}
          </TabHeaderItem>
        ))}
      </TabLayoutHeader>
      {selectedChildren[selectIdx]}
    </TabLayoutContainer>
  );
};

export default TabLayout;
