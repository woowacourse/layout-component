import { Tab, TabList, TabPanel, Tabs } from './index.ts';
import TabPanelList from './lib/tabPanelList/TabPanelList.tsx';
import './tabStyle.css';

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab name={'1'}>
          <h3>first</h3>
        </Tab>
        <Tab name={'2'}>
          <h3>second</h3>
        </Tab>
      </TabList>

      <TabPanelList>
        <TabPanel name={'1'}>
          <div>first Panel</div>
        </TabPanel>
        <TabPanel name={'2'}>
          <div>second Panel</div>
        </TabPanel>
      </TabPanelList>
    </Tabs>
  );
};

export default App;
