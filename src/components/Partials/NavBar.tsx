import { Link } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header>
      <Link to="/" className="logo">
        <h1 className="lgo">CO.HAVEN</h1>
      </Link>
      <nav>
        <ul>
          <Link to="">
            <li>List Property</li>
          </Link>
          <Link to="">
            <li>Rent Property</li>
          </Link>
          <Link to="">
            <li>About Us</li>
          </Link>
          <Link to="">
            <li>Resourses</li>
          </Link>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
}

export default NavBar
