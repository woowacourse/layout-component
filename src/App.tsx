import TabLayout from './lib/components/TabLayout';

function App() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='h-52 w-52'>
        <TabLayout tabs={['Tab 1', 'Tab 2', 'Tab 3']} tabPosition='top' activeButtonColor='#0067A3'>
          <div className='flex h-full items-center justify-center rounded-lg border p-6 shadow-lg'>
            Content1
          </div>
          <div className='flex h-full items-center justify-center rounded-lg border p-6 shadow-lg'>
            Content2
          </div>
          <div className='flex h-full items-center justify-center rounded-lg border p-6 shadow-lg'>
            Content3
          </div>
        </TabLayout>
      </div>
    </div>
  );
}

export default App;
