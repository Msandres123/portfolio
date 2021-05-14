import React from "react";

export default function Contact() {
  function alertOnSubmit(evt) {
    // evt.preventDefault();
    alert("Your email has been successfully sent");
  }

  return (
    <div id="contact-container">
      <h1 className="contact-header">Contact Info</h1>
      <p>Email: Msandres123@gmail.com</p>
      <p>Phone: 802-279-6930</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/mikael-andres-795132114/">https://www.linkedin.com/in/mikael-andres-795132114/</a></p>
      
      {/* <p>Send me an Email</p>
      <form
        method="POST"
        action="/email"
        id="email-form"
        onSubmit={alertOnSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="email-input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="email-input"
        />
        <textarea name="text" className="email-text"></textarea>
        <input type="submit" className="email-input" />
      </form> */}
    </div>
  );
}
