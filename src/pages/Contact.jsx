import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ib32gps",        // SERVICE ID
        "template_xcthj0q",       // TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "-i8foRykP2f1ROml4"       // PUBLIC KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error 👉", error);
        alert("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <motion.section
      className="bg-gray-900 text-white py-20 px-8 min-h-screen flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <div className="container mx-auto max-w-2xl">

        {!submitted && (
          <motion.p
            className="text-center text-lg text-gray-400 mb-8"
            variants={fadeIn}
          >
            Have a question or a project in mind? Feel free to reach out.
          </motion.p>
        )}

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Thank you for contacting us!
            </h3>
            <p className="text-lg text-gray-400">
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 mb-12"
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:ring-cyan-500"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:ring-cyan-500"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:ring-cyan-500"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-md text-gray-900 bg-cyan-500 hover:bg-cyan-400 transition font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        )}

        {/* Social Links */}
        <motion.div className="text-center" variants={fadeIn}>
          <p className="text-gray-400 mb-4">Or connect with us directly:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/crafweb"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/917465065665"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="mailto:crafweb.sites@gmail.com"
              className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Contact;
