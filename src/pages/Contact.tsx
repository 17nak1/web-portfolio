import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a chat!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://github.com/17nak1" target="_blank"  className="ci ci-github ci-2x ci-md"></a>
          <a href="https://www.linkedin.com/in/nazila-akhavan/" target="_blank" className="ci ci-linkedin ci-2x ci-md"></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
