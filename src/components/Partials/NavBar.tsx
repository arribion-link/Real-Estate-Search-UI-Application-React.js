import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header className="flex bg-black justify-between text-white p-4">
      <Link to="/" className="logo">
        <h3 className="font-bold text-blue-400 text-2xl">HAVEN-SQURES</h3>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <NavLink to="" className="border p-1">
            <li></li>
          </NavLink>
          <NavLink to="/properties">
            <li>Properties</li>
          </NavLink>
          <NavLink to="" className="border p-1">
            <li></li>
          </NavLink>
          <NavLink to="">
            <li>About Us</li>
          </NavLink>
          <NavLink to="" className="border p-1">
            <li ></li>
          </NavLink>
          <NavLink to="">
            <li>Pricing</li>
          </NavLink>
          <NavLink to="" className="border p-1">
            <li></li>
          </NavLink>
          <NavLink to="">
            <li>Resourses</li>
          </NavLink>
          <NavLink to="" className="border p-1">
            <li></li>
          </NavLink>
          <NavLink to="">
            <li>Contact Us</li>
          </NavLink>
          <NavLink to="" className="border p-1">
            <li></li>
          </NavLink>
        </ul>
      </nav>
      <Link to="/auth/login">
        <button className="border border-amber-50 rounded-4xl w-40 px-4 py-1 hover:bg-white hover:text-black transition duration-500 ease-in-out">
          Login
        </button>
      </Link>
    </header>
  );
}

export default NavBar
