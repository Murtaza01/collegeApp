import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import RedirectPage, { redirectLoader } from "./pages/Redirect";
import NavigationPage from "./pages/Navigation";
import ErrorPage from "./pages/Error";
import SubjectsPage from "./pages/Subjects";
import BooksPage from "./pages/Books";
import useDir from "./hooks/useDir";
import SubjectPage from "./pages/Subject";

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
  { path: "/stagepick", element: <StagePickPage /> },
  {
    path: ":stage",
    element: <RootPage />,

    children: [
      { index: true, element: <NavigationPage /> },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "subjects",
        element: <SubjectsPage />,
      },
      { path: "subjects/:subject", element: <SubjectPage /> },
    ],
  },
]);
export default function App() {
  useDir();
  return <RouterProvider router={router} />;
}
