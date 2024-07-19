import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "ui/pages/Home/HomePage";
import { ProfilePage } from "ui/pages/Profile/ProfilePage";
import { RootPage } from "ui/pages/Root/Page";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/home", element: <HomePage />, index: true },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

export { mainRouter };
