import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import StagePickPage, { loader as routeProtectLoader } from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import RedirectPage, { loader as redirectLoader } from "./pages/Redirect";
import NavigationPage from "./pages/Navigation";
import ErrorPage from "./pages/Error";
import BooksPage from "./pages/Books";
import useDir from "./hooks/useDir";
import ResourcesPage from "./pages/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectPage />,
    loader: redirectLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/authorize",
    element: <AuthPage />,
  },
  {
    path: "/stagepick",
    element: <StagePickPage />,
    loader: routeProtectLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: ":stage",
    element: <RootPage />,
    loader: routeProtectLoader,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <NavigationPage /> },
      {
        path: "books",
        element: <BooksPage />,
      },
 {
        path: "resources",
        element: <ResourcesPage />, 
      },

    ],
  },
]);
export default function App() {
  useDir();
  return <RouterProvider router={router} />;
}
