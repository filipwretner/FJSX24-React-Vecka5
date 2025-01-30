import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Blog from "./../components/Blog/Blog";
import BlogDetails from "./../components/Blog/BlogDetails";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        path: "blogId",
                        element: <BlogDetails />,
                    }
                ],
            },
        ],
    },
]);

export default router;