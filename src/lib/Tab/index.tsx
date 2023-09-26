import React from 'react';

interface Props {
  label: string;
  children?: React.ReactNode;
}

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
