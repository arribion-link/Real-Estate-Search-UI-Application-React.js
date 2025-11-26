import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-around flex-wrap pt-[5em] min-h-[70vh]">
        <div>
          <h3 className="font-bold text-2xl">ABOUT</h3>
          <p>Lorem, ipsum dolor sit amet consectetur?</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} HavenSquare. All Rights Reserved.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Quick Links</h3>
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
          <h3 className="font-bold text-2xl">Company</h3>
          <ul>
            <li className="nav-hover">About</li>
            <li className="nav-hover">Services</li>
            <li className="nav-hover">Private Policy</li>
            <li className="nav-hover">Terms and Conditions</li>
            <li className="nav-hover">Codnify.dev</li>
            <li className="nav-hover">Arribion Technologies</li>
            <li className="nav-hover">DegitilizedDev</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Follow Us On</h3>
          <div></div>
        </div>
      </footer>
    </>
  );
}

export default Footer
