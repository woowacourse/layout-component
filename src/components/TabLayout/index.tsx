import { Children, ReactElement, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface TabLayoutProps {
  tabs: string[];
  children: ReactElement[];
  bordercolor: CSSProperties['color'];
}

interface TabHeaderItemProps {
  isselected: boolean;
  bordercolor: CSSProperties['color'];
}

const TabLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabLayoutHeader = styled.div`
  display: flex;
`;

const TabHeaderItem = styled.div<TabHeaderItemProps>`
  padding: 10px;
  ${({ isselected, bordercolor }) => isselected && `border-bottom: 3px solid ${bordercolor}`};
  cursor: pointer;
`;

const TabLayout = ({ tabs, children, bordercolor }: TabLayoutProps) => {
  const [selectIdx, setSelectIdx] = useState(0);
  const selectedChildren = Children.toArray(children);

  return (
    <TabLayoutContainer>
      <TabLayoutHeader>
        {tabs.map((element, idx) => (
          <TabHeaderItem
            bordercolor={bordercolor}
            key={element}
            onClick={() => setSelectIdx(idx)}
            isselected={idx === selectIdx}
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
