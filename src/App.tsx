import Tabs from './lib/Tabs/Tabs';

function App() {
  return (
    <div>
      <Tabs>
        <Tabs.Panel label="Panel1Panel1Panel1Panel1Panel1Panel1Panel1Panel1Panel1Panel1">
          Panel1Panel1Panel1Panel1Panel1Panel1Panel1Panel1Panel1
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Tabs.Panel>
        <Tabs.Panel label="Panel2Panel2Panel2Panel2Panel2Panel2Panel2">
          Panel2Panel2Panel2Panel2Panel2Panel2Panel2
        </Tabs.Panel>
        <Tabs.Panel label="3">
          Panel3
          <div>Hello</div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
