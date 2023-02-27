import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Un projet, une question ?</h5>
      <h5>
        Envoyez-moi, un message et je vous réponds le plus vite possible 
      </h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email & téléphone</h4>
            <h5>hpoulenc@gmail.com | 07 67 09  77 09</h5>
            <a href="mailto:hpoulenc@gmail.com">Envoyer un message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre Nom"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Votre Prénom"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Votre Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Votre message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer message
          </button>
          {message && <span>Merci, je vous réponds sous 24H</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
