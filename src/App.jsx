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
      // const stage = JSON.parse(JSON.parse(data).stage);
      const auth = JSON.parse(JSON.parse(data).isAuth);
      if (!auth.user && !auth.admin) {
        return redirect("/authorize");
      }
      return null;
    },
  },

  {
    path: "/authorize",
    element: <AuthPage />,
  },
  { path: "/stagepick", element: <StagePickPage /> },
  // {
  //   path: ":stage",
  //   element: ,
  // },
]);

export default function App() {
  const data = localStorage.getItem("persist:root");
  const stage = JSON.parse(JSON.parse(data).stage);
  console.log(stage);
  return <RouterProvider router={router} />;
}
