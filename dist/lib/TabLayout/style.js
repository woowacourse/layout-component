export const rowTabLayoutContainer = {
    display: "flex",
    flexDirection: "column-reverse",
};
export const rowMenuContainer = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "30px",
    top: "1px",
    position: "relative",
};
const rowMenuItem = {
    maxWidth: "120px",
    minWidth: "40px",
    padding: "2px 10px",
    borderRadius: "4px 4px 0 0",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    cursor: "pointer",
};
export const unselectedRowMenuItem = Object.assign(Object.assign({}, rowMenuItem), { color: "rgba(0,0,0,0.8)", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)" });
export const selectedRowMenuItem = Object.assign(Object.assign({}, rowMenuItem), { fontWeight: "600", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid white", backgroundColor: "white" });
export const columnTabLayoutContainer = {
    display: "flex",
    flexDirection: "row-reverse",
};
export const columnMenuContainer = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    maxWidth: "100px",
    position: "relative",
    left: "1px",
};
const columnMenuItem = {
    height: "30px",
    padding: "2px 15px",
    minWidth: "30px",
    borderRadius: "4px  0 0 4px",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    cursor: "pointer",
};
export const unselectedColumnMenuItem = Object.assign(Object.assign({}, columnMenuItem), { color: "rgba(0,0,0,0.8)", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)" });
export const selectedColumnMenuItem = Object.assign(Object.assign({}, columnMenuItem), { fontWeight: "600", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid white", backgroundColor: "white" });
export const content = {
    padding: "5px",
    border: "1px solid rgba(0,0,0,0.5)",
    backgroundColor: "white",
};
