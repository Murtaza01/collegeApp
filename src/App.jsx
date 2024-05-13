import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StagePage from "./pages/Stage";
import StagePickPage from "./pages/StagePick";
import AuthPage from "./pages/Auth";
import Root, { redirectLoader } from "./pages/Root";
import BooksPage from "./pages/Books";
import NavigationPage from "./pages/Navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => redirectLoader(),
  },
  {
    path: ":stage",
    element: <StagePage />,

    children: [
      { index: true, element: <NavigationPage /> },
      {
        path: "books",
        element: <BooksPage />,
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
    async () => {
      await i18n.changeLanguage("ar");
    };
  }, []);
  return <RouterProvider router={router} />;
}
