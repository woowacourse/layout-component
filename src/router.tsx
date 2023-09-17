import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div>메뉴를 선택하세요.</div>,
        },
        {
          path: "container",
          element: <div>container</div>,
        },
        {
          path: "grid",
          element: <div>grid</div>,
        },
        {
          path: "flex",
          element: <div>flex</div>,
        },
      ],
    },
  ],
  {
    basename: "/layout-component/",
  }
);
export default router;
