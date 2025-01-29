import { createBrowserRouter } from "react-router-dom";
// import Home from "./../pages/Home";
import About from "./../pages/About";
import App from "./../App";
import Blog from "./../components/Blog/Blog";
import BlogDetails from "./../components/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
    children: [
      {
        path: ":blogId",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
