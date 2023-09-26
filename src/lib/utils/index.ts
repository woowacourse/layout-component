export const createPortalRoot = (rootName: string) => {
  const root = document.createElement('div');
  root.setAttribute('id', rootName);

  return root;
};
