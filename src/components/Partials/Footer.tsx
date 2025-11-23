import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-around flex-wrap min-h-2/4">
        <div>
          <h3>ABOUT</h3>
          <p>Lorem, ipsum dolor sit amet consectetur?</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} HavenSquare. All Rights Reserved.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li className="hover:underline decoration-1">
              <Link to="">List Property</Link>
            </li>
            <li className="nav-hover">Rent Property</li>
            <li className="nav-hover">About Us</li>
            <li className="nav-hover">Services</li>
            <li className="nav-hover">Communty</li>
            <li className="nav-hover">Events</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Private Policy</li>
            <li>Terms and Conditions</li>
            <li>Codnify.dev</li>
            <li>Arribion Technologies</li>
            <li>DegitilizedDev</li>
          </ul>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <div></div>
        </div>
      </footer>
    </>
  );
}

export default Footer
