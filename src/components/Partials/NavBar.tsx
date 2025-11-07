import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header>
      <Link to="/" className="logo">
        <h3 className="lgo font-bold text-blue-400 text-3xl">HAVEN-SQURES</h3>
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
        <button className="border-1 border-amber-50 rounded-2xl w-40 px-2 py-4 hover:bg-amber-50 hover:text-white  transition duration-300 ease-in-out">
          Login
        </button>
      </Link>
    </header>
  );
}

export default NavBar
