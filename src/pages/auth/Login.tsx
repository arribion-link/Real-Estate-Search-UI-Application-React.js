
const Login = () => {
  return (
   <>
        <section>
          <div className="form-section">
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
            </form>
          </div>
        </section>
      </>
  )
}

export default Login
