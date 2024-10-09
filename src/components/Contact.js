import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:j.ramalho@livecom">j.ramalho@livecom</a></p>
        <p>Phone: +55 11 99828-9081</p>
        <p>LinkedIn: <a href="https://br.linkedin.com/in/joão-ramalho-sampaio-3a1a75228/pt" target="_blank" rel="noopener noreferrer">João Ramalho Sampaio</a></p>
        <p>GitHub: <a href="https://github.com/Ramalhin" target="_blank" rel="noopener noreferrer">Ramalhin</a></p>
      </div>
      <form className="contact-form">
        <h3>Send me a message</h3>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;