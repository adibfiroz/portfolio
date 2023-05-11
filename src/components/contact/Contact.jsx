import React, { useRef, useState } from "react";
import "./contact.scss";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_e09c3y4",
        "template_nmsz5sd",
        ref.current,
        "7XR3Zt2sZcWapdmuA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="contacts" id="contact">
      <div className="container">
        <div className="cl">
          <form ref={ref} onSubmit={handleSubmit}>
            <div className="title">Contact Us</div>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <textarea
              placeholder="Write your message"
              name="message"
              rows={8}
            />
            <button disabled={loading} type="submit">
              {loading ? "Sending" : "Send"}
            </button>
            {success && (
              <span style={{ color: "#fff" }}>
                Your message has been sent. We'll get back to you soon {":)"}
              </span>
            )}
          </form>
        </div>
        <div className="cr">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
