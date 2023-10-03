import { PropsWithChildren } from 'react';
import { useTabContext } from './useTab';

type Props = {
  tabId?: number;
};

const TabPanel = ({ tabId = 0, children }: PropsWithChildren<Props>) => {
  const { tabIndex } = useTabContext();

  return (
    <>
      {tabId === tabIndex && (
        <div role='tabpanel' aria-labelledby={`panel-${tabId}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default TabPanel;
