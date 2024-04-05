import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page components

import Home from "./pages/Home";
import MonEspace from "./pages/MonEspace";
import App from "./App";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/monespace",
        element: <MonEspace />,
      },
      
    ],
  },
]);


// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);