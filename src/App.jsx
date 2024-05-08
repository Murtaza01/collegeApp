import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "/stagepick", element: <StagePickPage /> },
  {
    path: ":stage",
    element: <StagePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
