import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
    <Link to="/">
        <h1>CO.HAVEN</h1>
    </Link>
      <nav>
        <ul>
          <Link to="">
            <li>Sell Property</li>
          </Link>
          <Link to="">
            <li>Buy Property</li>
          </Link>
          <Link to="">
            <li>Rent</li>
          </Link>
          <Link to="">
            <li>About Us</li>
          </Link>
          <Link to="">
            <li>Resourses</li>
          </Link>
              </ul>
              <button>Login</button>
      </nav>
    </header>
  );
}

export default NavBar
