import React from 'react';

interface Props {
  label: string;
  children: React.ReactNode;
}

const Tab = ({ label, children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
