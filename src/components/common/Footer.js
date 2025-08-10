// src/components/common/Footer.js
import React from "react";
import { Github, Linkedin, Mail, Beer } from "lucide-react";
import { personalInfo } from "../../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.social.github,
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      url: personalInfo.social.linkedin,
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      url: personalInfo.social.email,
      icon: Mail,
      color: "hover:text-green-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {personalInfo.title} especializado en crear experiencias web
              modernas y funcionales que generen impacto positivo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Sobre Mí
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contacto
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-2">
              <a
                href={personalInfo.social.email}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {personalInfo.contact.email}
              </a>
              {personalInfo.contact.location && (
                <p className="text-gray-300 text-sm">
                  📍 {personalInfo.contact.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>
                &copy; {currentYear} {personalInfo.name}.
              </span>
              <span>Todos los derechos reservados.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Beer size={16} className="text-yellow-400 fill-current" />
              <span>usando React y Tailwind CSS</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Desarrollado con React • Tailwind CSS • Firebase • Hospedado en
              Firebase Hosting
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
