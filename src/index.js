import "./style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReactReduxProvider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { store } from "./redux/store";
import IndexPage from "./routes";
import RootPage from "./routes/root";
import { DestroyUserPage, EditUserPage, NewUserPage, UserPage } from "./routes/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/users/new",
        element: <NewUserPage />,
      },
      {
        path: "/users/:userId",
        element: <UserPage />,
      },
      {
        path: "/users/:userId/edit",
        element: <EditUserPage />,
      },
      {
        path: "/users/:userId/destroy",
        element: <DestroyUserPage />,
      },
    ],
  },
  {},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReactReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReactReduxProvider>
  </React.StrictMode>
);
