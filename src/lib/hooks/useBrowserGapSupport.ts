import { useEffect, useState } from 'react';

const useBrowserGapSupport = () => {
  const [doesBrowserSupportGap, setDoesBrowserSupportGap] = useState(false);

  useEffect(() => {
    setDoesBrowserSupportGap(
      window.CSS && window.CSS.supports && window.CSS.supports('gap', '0px'),
    );
  }, []);

  return { doesBrowserSupportGap };
};

export default useBrowserGapSupport;
