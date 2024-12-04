import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSendForm() {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log(contactForm);
    setFormSent(true);
  }

  return (
    <div className="contact bg-slate-800 py-20">
      <div className="contact-content mx-auto w-[95vw] text-white sm:w-10/12 md:w-4/5 lg:w-10/12">
        <SectionTitle title="Contact" />
        {!formSent && (
          <p className="text-center text-lg text-cyan-400" data-aos="fade-left">
            Have a question or just want to connect?
          </p>
        )}
        <div
          className="contact-form mx-auto w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5"
          data-aos="zoom-in"
        >
          {!formSent && (
            <form className="mt-10 flex flex-col gap-5">
              <input
                type="text"
                id="name"
                className="contact-input"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
              />
              <input
                type="email"
                id="email"
                className="contact-input"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />
              <textarea
                id="message"
                className="contact-input"
                placeholder="Your message"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                rows={3}
              />
              <button
                type="button"
                className="send-contact-form-buttom"
                onClick={() => {
                  handleSendForm();
                }}
              >
                Send
              </button>
            </form>
          )}
          {formSent && (
            <div className="sent-message mt-10 flex flex-col gap-5 text-center">
              <h2 className="text-2xl text-cyan-500">Message sent!</h2>
              <p className="mb-5 text-lg">
                Thank you for reaching out. I'll get back to you soon.
              </p>
              <p
                className="mb-5 cursor-pointer text-pink-500 underline underline-offset-2"
                onClick={() => {
                  setContactForm({
                    name: "",
                    email: "",
                    message: "",
                  });
                  setFormSent(false);
                }}
              >
                Send another message
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
