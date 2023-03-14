import React from 'react';

function ContactPage() {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p> You can download my CV, visit my GitHub profile, or send me a message.</p>
      <p><a href="path/to/your/cv.pdf" className="btn btn-primary">Download my CV (PDF)</a></p>
      <p><a href="https://github.com/parsa-hemmati" className="btn btn-primary">My GitHub Profile</a></p>
      <p><a href="https://www.linkedin.com/in/seyed-parsa-hemmati-hosseini/" className="btn btn-primary">My LinkedIn Page</a></p>
      <h2>Send me a message</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
