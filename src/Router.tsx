import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export const router = createHashRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home /> 
      }
    ] 
  }
])