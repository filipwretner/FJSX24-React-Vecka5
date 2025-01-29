// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router";
import {
  NavLink,
  // Link
} from "react-router";

function Header() {
  // const navigate = useNavigate();

  // function navigateToAboutPage() {
  //   navigate("/about");
  // }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li onClick={navigateToAboutPage}>About</li> */}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
