

const CtaForm = () => {
  return (
    <div className="form-container">
      <form action="" className="form">
        <div className="form-group">
          <label htmlFor="username-infull">Full Name</label><br />
          <input type="text" placeholder="Full name here..." />
        </div>
        <div className="form-group">
          <label htmlFor="username-infull">Email</label><br />
          <input type="text" placeholder="Your email here..." />
        </div>
        <div className="form-group">
          <label htmlFor="username-infull">Message</label><br />
          <textarea name="" id="" placeholder="How we can help you?"></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CtaForm

