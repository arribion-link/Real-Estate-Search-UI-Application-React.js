
const Register = () => {
    return (
      <>
        <section>
          <div className="form-section">
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
                <input type="password" placeholder="Confirm password..."/>
              </div>
            </form>
          </div>
        </section>
      </>
    );
}

export default Register
