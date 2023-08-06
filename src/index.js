import "./style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReactReduxProvider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { store } from "./redux/store";
import IndexPage from "./routes";
import DestroyUser from "./routes/destroy-user";
import UserEditPage from "./routes/edit-user";
import RootPage from "./routes/root";
import UserPage from "./routes/user";
import NewUser from "./routes/new-user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <IndexPage />,
          },
          {
            path: "/users/new",
            element: <NewUser />,
          },
          {
            path: "/users/:userId",
            element: <UserPage />,
          },
          {
            path: "/users/:userId/edit",
            element: <UserEditPage />,
          },
          {
            path: "/users/:userId/destroy",
            element: <DestroyUser />,
          },
        ],
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
