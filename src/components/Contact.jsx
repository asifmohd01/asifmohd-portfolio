"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Map form data to template placeholders
      const templateParams = {
        name: formData.name, // {{name}}
        email: formData.email, // {{email}}
        title: "Contact Us", // {{title}}
        message: formData.message, // {{message}}
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "asifmohd3840@gmail.com",
      link: "mailto:asifmohd3840@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8491040620",
      link: "tel:+918491040620",
    },
    { icon: "📍", label: "Location", value: "Bangalore, India", link: "#" },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/asifmohd01",
      link: "https://github.com/asifmohd01",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="flex items-center p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-2xl mr-4">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {info.label}
                    </h4>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/asifmohd01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 rounded-full"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/asifmohd01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 rounded-full"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                ✅ Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800">
                ❌ Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
