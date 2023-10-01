import { useEffect, useRef } from 'react';
import { createPortalRoot } from '../utils';

const usePortal = (rootName: string) => {
  const portalRootRef = useRef<HTMLDivElement>(
    (document.getElementById(rootName) as HTMLDivElement) || createPortalRoot(rootName),
  );

  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.querySelector('body');

    if (bodyRef.current) {
      const portal = portalRootRef.current;
      bodyRef.current.appendChild(portal);
    }
  }, []);

  return { portalRootRef };
};

export default usePortal;
