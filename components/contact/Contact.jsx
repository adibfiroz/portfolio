"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const ref = useRef();
  const contactref = useRef(null);
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
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  const { scrollYProgress } = useScroll({
    target: contactref,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <section className=" mb-16" id="contact" ref={contactref}>
      <div className="container mx-auto p-5 ">
        <motion.div
          className="outline outline-2 outline-white/10 rounded-3xl relative overflow-hidden"
          animate={{
            backgroundPositionX: "800px",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: 'url("img/stars.png")',
          }}
        >
          <div
            className=" absolute inset-0 bg-[#2121ad9c] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: 'url("img/grid-lines.png")' }}
          ></div>
          <div className="grid md:grid-cols-2 gap-10 py-6 relative">
            <div className=" inline-flex items-center justify-center p-5">
              <div className=" backdrop-blur-3xl text-sm lg:text-lg rounded-xl py-5 px-4 md:py-10 md:px-8 flex flex-col gap-5 bg-white/5">
                <div className="inline-flex text-white items-center gap-4">
                  <LocationOnIcon className=" size-8 text-[#64b8fb]" />
                  <span>Mira road, Mumbai, India</span>
                </div>
                <div className="inline-flex text-white items-center gap-4">
                  <CallIcon className=" size-8 text-[#64b8fb]" />
                  <span className="flex items-center gap-1">
                    +91 9702 384 323 +
                    <WhatsAppIcon className=" size-8 text-[#64b8fb]" />
                  </span>
                </div>
                <div className="inline-flex text-white items-center gap-4">
                  <EmailIcon className=" size-8 text-[#64b8fb]" />
                  <span>adibfiroz9702@gmail.com</span>
                </div>
              </div>
            </div>
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className=" max-w-md mx-auto p-5"
            >
              <h2 className="text-white font-bold text-3xl md:text-5xl mb-8">
                Contact Us
              </h2>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                required
                placeholder="Name"
                name="name"
                className="w-full outline outline-2 bg-[#121212] outline-white/10 p-4 rounded-lg mb-5"
              />
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                required
                placeholder="Email"
                name="email"
                className="w-full outline outline-2 bg-[#121212] outline-white/10 p-4 rounded-lg mb-5"
              />
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                required
                placeholder="Write your message"
                name="message"
                rows={8}
                className="w-full outline outline-2 bg-[#121212] outline-white/10 p-4 rounded-lg mb-5 resize-none max-h-52"
              />
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                disabled={loading}
                type="submit"
                className="blue-gradient rounded-lg w-full p-4 text-xl text-gray-900 font-semibold"
              >
                {loading ? "Sending" : "Send"}
              </motion.button>
              {success && (
                <div className="mt-5">
                  Your message has been sent. We{`'`}ll get back to you soon{" "}
                  {":)"}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
