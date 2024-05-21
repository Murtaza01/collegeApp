import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import Root, { redirectLoader } from "./pages/Root";
import React, { Suspense } from "react";
import NavigationPage from "./pages/Navigation";
import Error from "./pages/Error";
import SubjectsPage from "./pages/Subjects";
const BooksPage = React.lazy(() => import("./pages/Books"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: redirectLoader,
    errorElement: <Error />,
  },
  {
    path: ":stage",
    element: <StagePage />,

    children: [
      { index: true, element: <NavigationPage /> },
      {
        path: "books",
        element: (
          <Suspense fallback={<p>loading ...</p>}>
            <BooksPage />
          </Suspense>
        ),
      },
      { path: "subjects", element: <SubjectsPage /> },
    ],
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
