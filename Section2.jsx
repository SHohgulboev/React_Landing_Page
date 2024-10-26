// Contact.js
import React from 'react';
import './Section2.css'; // Импорт кардани услубҳо

function Section2() {
  // Ин ивазкунанда барои нигоҳдории маълумоти форма истифода мешавад
  let formData = {
    name: '',
    email: '',
    message: '',
  };

  // Логикаи идора кардани тағйирот дар форма
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  // Логикаи фиристодани форма
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${formData.name} sent successfully!`);
    // Логика барои ирсоли паём ё бо сервер пайваст шудан
  };

  return (
    <section className="contact-section" id='contact'>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us by filling the form below or using the provided contact information.</p>
      <div className="contact-info">
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 React Street, Web City</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </section>
  );
}

export default Section2;
