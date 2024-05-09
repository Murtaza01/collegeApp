import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import Root, { redirectLoader } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => redirectLoader(),
  },
  {
    path: ":stage",
    element: <StagePage />,
  },
  {
    path: "/authorize",
    element: <AuthPage />,
  },
  { path: "/stagepick", element: <StagePickPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
