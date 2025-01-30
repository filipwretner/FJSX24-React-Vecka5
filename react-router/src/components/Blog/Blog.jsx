import { NavLink, Outlet } from "react-router-dom";

function Blog() {
    return (
        <div>
            <Outlet />
            <h2>Welcome to Blog Page</h2>
            <ul>
                <li>
                    <NavLink to="1">Blog Post 1</NavLink>
                </li>
                <li>
                    <NavLink to="2">Blog Post 1</NavLink>
                </li>
                <li>
                    <NavLink to="3">Blog Post 1</NavLink>
                </li>
            </ul>
        </div>
    );
}