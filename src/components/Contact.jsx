import "./Contact.css";

import Linkedin from "../assets/linkedin.png";
import Github from "../assets/githublogo.png";
import Facebook from "../assets/facebooklogo.png";
import Whatsapp from "../assets/whatsapplogo.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // use the maintained browser SDK

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{7,14}$/i.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (must start with + and contain 8–15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", comment: "" });
    } catch (err) {
      console.error("Email failed", err);
      alert("Sorry, something went wrong while sending your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_title">
        <span className="angle_bracket">{"<"}</span>
        <span className="title_text">contact me</span>
        <span className="angle_bracket">{" >"}</span>
      </div>

      <div className="contact_info_container">
        <div>
          <div className="contact_info_title">
            Hire Me <br /> For The Next Projects.
          </div>
          <div className="contact_info_desc">Drop Your Details Here.</div>
          <div className="contact_info_links">
            <a href="https://www.linkedin.com/in/thomas-odvart-aa9464179">
              <div className="contact_info_link">
                <img width={15} src={Linkedin} alt="LinkedIn" />
              </div>
            </a>
            <a href="https://github.com/TheRealWagon">
              <div style={{ backgroundColor: "#f79d4c" }} className="contact_info_link">
                <img width={20} src={Github} alt="GitHub" />
              </div>
            </a>
            <a href="https://www.facebook.com/thomas.odvart/">
              <div className="contact_info_link">
                <img width={15} src={Facebook} alt="Facebook" />
              </div>
            </a>
            <a href="https://wa.me/32478258204?text=Hi%20Thomas%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk!">
              <div className="contact_info_link">
                <img width={25} src={Whatsapp} alt="WhatsApp" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="contact_form_container">
        <div className="contact_form_sidebar" />
        <form ref={formRef} className="contact_form" onSubmit={handleSubmit} noValidate>
          <h2>Contact Us</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1234567890"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Your comment here..."
            rows="4"
            value={formData.comment}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {submitted && (
            <p className="success">Thanks! Your message has been sent. I will reply shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;