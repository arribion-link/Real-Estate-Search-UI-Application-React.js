import { Link, NavLink } from "react-router-dom";
import logo_image from "../../assets/images/logo.png"
const NavBar = () => {
 
  return (
    <header
      className="flex bg-black justify-between
       text-white p-4 items-center
      top-0 left-0 z-50">
      <Link to="/">
        <img src={logo_image} alt=""
        className="block max-w-[4em]"/>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <NavLink to="/properties">
            <li>Properties</li>
          </NavLink>        
          <NavLink to="">
            <li>About Us</li>
          </NavLink>
          <NavLink to="">
            <li>Pricing</li>
          </NavLink>       
          <NavLink to="">
            <li>Resourses</li>
          </NavLink>   
          <NavLink to="">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>
      <Link to="/auth/login">
        <button
          className="border border-amber-50
           rounded-4xl w-40 px-4 py-1 hover:bg-white
            hover:text-black transition duration-500 ease-in-out">
          Login
        </button>
      </Link>
    </header>
  );
}

export default NavBar
