

const CtaForm = () => {
  return (
    <div className="bg-gray-200 rounded-2xl p-4 min-w-80">
      <form action="">
        <div className="form-group">
          <label htmlFor="username-infull">Full Name</label>
          <input type="text" placeholder="Full name here..." />
        </div>
        <div className="form-group">
          <label htmlFor="username-infull">Full Name</label>
          <input type="text" placeholder="Your email here..." />
        </div>
        <div className="form-group">
          <label htmlFor="username-infull">Full Name</label>
          <textarea name="" id="" placeholder="How we can help you?"></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CtaForm

