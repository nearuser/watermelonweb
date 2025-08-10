// src/sections/Hero.js
import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo, sectionTexts } from "../data";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-12">
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl text-gray-600 mb-2 animate-fade-in">
              {sectionTexts.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          {/* Title & Description */}
          <div
            className="mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              {sectionTexts.hero.cta.primary}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              {sectionTexts.hero.cta.secondary}
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center space-x-8 mb-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <IconComponent size={28} />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div
          className="animate-bounce cursor-pointer animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={40} />
          </button>
        </div>

        {/* Floating Elements (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
