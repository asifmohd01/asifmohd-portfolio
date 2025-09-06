import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/asifmohd01",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/asifmohd01/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:asifmohd3840@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r text-portfolio-primary from-portfolio-primary to-purple-400 bg-clip-text text-transparent">
              Asif Mohd
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Software Engineer passionate about creating innovative solutions
              and building user-friendly applications. Always eager to learn new
              technologies and collaborate on exciting projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-portfolio-primary flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-soft hover:shadow-purple"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-portfolio-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-portfolio-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-portfolio-primary">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:asifmohd3840@gmail.com"
                  className="hover:text-portfolio-primary transition-colors duration-200"
                >
                  asifmohd3840@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+918491040620"
                  className="hover:text-portfolio-primary transition-colors duration-200"
                >
                  +91 8491040620
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Asif Mohd. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with ❤️ using React.js & Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-primary via-purple-500 to-portfolio-secondary"></div>
    </footer>
  );
};

export default Footer;
