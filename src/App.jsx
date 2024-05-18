import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import Root, { redirectLoader } from "./pages/Root";
import React, { Suspense } from "react";
import NavigationPage from "./pages/Navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Error from "./pages/Error";
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
    ],
  },
  {
    path: "/authorize",
    element: <AuthPage />,
  },
  { path: "/stagepick", element: <StagePickPage /> },
]);

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    async function initialLanguage() {
      await i18n.changeLanguage("ar");
      // document.body.dir = "rtl";
    }
    initialLanguage();
  }, []);

  return <RouterProvider router={router} />;
}
