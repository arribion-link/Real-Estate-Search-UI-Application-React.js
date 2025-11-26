import '../../css/auth.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <section className="auth-section flex justify-center">
        <div className="form-container">
          <h3>Create an Acoount</h3>
          <form action="">
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" placeholder="Password..." />
            </div>
            <input type="submit" />
            <hr />
            <button>Google</button>
            <p>
              Already have an account? <Link to="/auth/register">Sign In</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login
