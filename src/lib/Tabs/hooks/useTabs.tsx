import { Children, ReactElement, ReactNode, useEffect, useState } from 'react';

export type Label = string | number;
export type PanelList = {
  label: Label;
  disabled: boolean;
  contents: ReactNode;
}[];

const useTabs = (children: ReactNode) => {
  const [panelList, setPanelList] = useState<PanelList>([]);
  const [selectedPanelLabel, setSelectedPanelLabel] = useState<Label | null>(
    null
  );

  const selectedPanel = panelList.find(
    ({ label }) => label === selectedPanelLabel
  );

  const selectPanel = (label: Label) => setSelectedPanelLabel(label);

  const isSelected = (label: Label) => label === selectedPanelLabel;

  const isDuplicationLabel =
    new Set(panelList.map((panel) => panel.label)).size !== panelList.length;

  if (isDuplicationLabel) throw new Error('탭의 라벨이 중복되었습니다.');

  useEffect(() => {
    Children.forEach(children, (child, index) => {
      const panel = child as ReactElement;

      const { label, disabled } = panel.props;

      setPanelList((prev) => [...prev, { label, disabled, contents: panel }]);
      if (index === 0) setSelectedPanelLabel(label);
    });
  }, [children]);

  return { panelList, selectedPanel, isSelected, selectPanel };
};

export default useTabs;
