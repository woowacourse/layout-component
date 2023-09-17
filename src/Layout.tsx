import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <hr />
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/container"}>container</Link>
        </li>
        <li>
          <Link to={"/grid"}>grid</Link>
        </li>
        <li>
          <Link to={"/flex"}>flex</Link>
        </li>
      </ul>
    </>
  );
}

export default Layout;
