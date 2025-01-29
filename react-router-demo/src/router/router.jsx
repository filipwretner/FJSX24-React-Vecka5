import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import About from "./../pages/About";
import Blog from "./../components/Blog/Blog";
import BlogDetails from "./../components/Blog/BlogDetails";
import Home from "./../pages/Home";

const router = createBrowserRouter([
  {
    path: "/", // 👈 App.jsx är nu föräldern för ALLA routes
    element: <App />,
    children: [
      {
        index: true, // 👈 Gör så att Home.jsx laddas vid "/"
        element: <Home />,
      },
      {
        path: "about", // 👈 /about är nu en child route
        element: <About />,
      },
      {
        path: "blog", // 👈 /blog är också en child route
        element: <Blog />,
        children: [
          {
            path: ":blogId", // 👈 / :blogId är en dynamisk grand child route
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
