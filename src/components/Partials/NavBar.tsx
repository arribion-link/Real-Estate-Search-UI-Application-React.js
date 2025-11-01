import { Link } from "react-router-dom";
// import {useState } from "react";

const NavBar = () => {
  // const [activeNav, setActiveNav] = useState(true);
  return (
    <header>
      <Link to="/" className="logo">
        <h1 className="lgo">CO.HAVEN</h1>
      </Link>
      <nav>
        <ul>
          <Link to="">
            <li>List Property</li>
           {/* { {activeNav }:<hr />{   } } */}
          </Link>
          <Link to="">
            <li>Rent Property</li>
            <hr />
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
