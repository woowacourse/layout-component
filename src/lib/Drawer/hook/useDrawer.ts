import { useState } from 'react';

const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return { isOpen, openDrawer, closeDrawer };
};

export default useDrawer;
