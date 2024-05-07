import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import StagePage from "./pages/Stage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: ":stage",
        element: <StagePage />,
        children: [
          // { path: "books", }
          // ..
        ],
      },
      //...
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
