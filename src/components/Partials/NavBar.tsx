import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header>
      <Link to="/" className="logo">
        <h3 className="lgo">HAVEN-SQURES</h3>
      </Link>
      <nav>
        <ul>
          <NavLink to="">
            <li>Link Property</li>
          </NavLink>
          <NavLink to="">
            <li>Rent Property</li>
          </NavLink>
          <NavLink to="">
            <li>About Us</li>
          </NavLink>
          <NavLink to="">
            <li>Resourses</li>
          </NavLink>
        </ul>
      </nav>
      <Link to="/auth/login">
      <button>Login</button>
      </Link>
    </header>
  );
}

export default NavBar
