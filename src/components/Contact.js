import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.user_name || !formData.user_email)) {
      toast.error('Please enter both name and email.', { className: 'custom-toast', position: 'top-center' });
      return;
    }
    if (step === 2 && !formData.interest) {
      toast.error('Please fill in your area of interest.', { className: 'custom-toast', position: 'top-center' });
      return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.message) {
      toast.error('Please enter your message.', { className: 'custom-toast', position: 'top-center' });
      return;
    }

    emailjs
      .sendForm(
        'service_cj74smj',
        'template_jtiw25g',
        form.current,
        'jNlONNPatxustPwz2'
      )
      .then(() => {
        toast.success('✅ Message sent successfully!', {
          position: 'top-center',
          className: 'custom-toast',
        });
        form.current.reset();
        setFormData({ user_name: '', user_email: '', interest: '', message: '' });
        setModalOpen(false);
        setStep(1);
      })
      .catch(() => {
        toast.error('❌ Something went wrong. Please try again.', {
          position: 'top-center',
          className: 'custom-toast',
        });
      });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's Connect 📬</h2>

      <div className="contact-info">
        <h3>Tanishk Abinav</h3>
        <p>Front-End Developer & UI/UX Designer</p>
        <p>Based in India 🌏🇮🇳</p>
        <p>I love building beautiful interfaces and interactive digital experiences.</p>
        <div className="contact-links">
          <a href="https://github.com/tanishk16148" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/l-b-tanishk-abinav-79a802279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishk16148@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
        </div>
        <button className="contact-open-btn" onClick={() => setModalOpen(true)}>Contact Me</button>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="contact-modal">
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>✖</button>
            <form ref={form} onSubmit={sendEmail} className="modal-form">
              {step === 1 && (
                <>
                  <div className="form-group">
                    <label>Name:</label>
                    <input placeholder="Name" type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="Email" type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="form-group">
                  <label>What do you want to collaborate on?</label>
                  <input placeholder="collaborate..." type="text" name="interest" value={formData.interest} onChange={handleChange} />
                </div>
              )}

              {step === 3 && (
                <div className="form-group">
                  <label>Your Message:</label>
                  <textarea placeholder="Message for me..." name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                </div>
              )}

              <div className="step-btns">
                {step > 1 && <button type="button" onClick={prevStep} className="contact-btn">Back</button>}
                {step < 3 && <button type="button" onClick={nextStep} className="contact-btn">Next</button>}
                {step === 3 && <button type="submit" className="contact-btn">Send</button>}
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default Contact;
