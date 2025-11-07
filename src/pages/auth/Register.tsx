import "../../css/auth.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <section className="auth-section">
        <div className="form-container">
          <h3>Create an Acoount</h3>
          <form action="">
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="text" placeholder="name..." />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" placeholder="Password..." />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword"></label>
              <input type="password" placeholder="Confirm password..." />
            </div>
            <input type="submit" />
            <hr />
            <button>Google</button>
            <p>
              Already have an account? <Link to="/auth/login">Sign In</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
