import { Children, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  activeTab: number;
}

export default function Panels({ activeTab, children }: Props) {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (activeTab !== index) return null;

        return <div>{child}</div>;
      })}
    </>
  );
}
