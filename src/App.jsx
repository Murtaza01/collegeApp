import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      const data = localStorage.getItem("persist:root");
      const stage = JSON.parse(JSON.parse(data).stage);
      const auth = JSON.parse(JSON.parse(data).isAuth);
      if (!auth.user && !auth.admin) {
        return redirect("/authorize");
      } else if (stage) {
        return redirect(stage);
      }
      return null;
    },
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
