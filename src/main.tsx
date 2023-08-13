// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createHashRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { UserList, UserDetails, ReactDemo } from "./components";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <UserList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "user/:userId",
    element: <UserDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "react",
    element: <ReactDemo />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
