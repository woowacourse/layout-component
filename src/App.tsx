import SplitPane from './lib/splitPane/SplitPane';

function App() {
  return (
    <SplitPane maxSize={400} minSize={200}>
      <div style={{ backgroundColor: 'gray', fontSize: '30px' }}>Left Pane</div>
      <div style={{ backgroundColor: 'brown', fontSize: '30px' }}>Right Pane</div>
    </SplitPane>
  );
}

export default App;
