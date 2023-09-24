import { useState } from 'react';

const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleDrawer };
};

export default useDrawer;
