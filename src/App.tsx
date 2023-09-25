import { Tab, TabList, TabPanel, Tabs } from './index.ts';
import TabPanelList from './lib/tabPanelList/TabPanelList.tsx';

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab name={'first'}>
          <h3>first</h3>
        </Tab>
        <Tab name={2}>
          <h3>second</h3>
        </Tab>
      </TabList>

      <TabPanelList>
        <TabPanel name={'first'}>
          <div>first Panel</div>
        </TabPanel>
        <TabPanel name={2}>
          <div>second Panel</div>
        </TabPanel>
      </TabPanelList>
    </Tabs>
  );
};

export default App;
