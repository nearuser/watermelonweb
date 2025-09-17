// src/sections/Hero.js
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo, sectionTexts } from "../data";

const Hero = () => {
  // URLs de tus imágenes de Firebase
  const backgroundImages = [
    "https://firebasestorage.googleapis.com/v0/b/gasenieurra-c6b7c.firebasestorage.app/o/Fotografias%20portafolio%201%2FWEB3.jpg?alt=media&token=db6fe70b-11d3-4a7f-bd6f-ed7c65f9234b",
    "https://firebasestorage.googleapis.com/v0/b/gasenieurra-c6b7c.firebasestorage.app/o/Fotografias%20portafolio%201%2FWEB7.jpg?alt=media&token=364403f7-3d0f-4144-b0ab-8ff7b49fd14d",
    "https://firebasestorage.googleapis.com/v0/b/gasenieurra-c6b7c.firebasestorage.app/o/Fotografias%20portafolio%201%2FWEB4.jpg?alt=media&token=26886a54-5475-4b43-b4c3-09dec02fe8c1",
    "https://firebasestorage.googleapis.com/v0/b/gasenieurra-c6b7c.firebasestorage.app/o/Fotografias%20portafolio%201%2FWEB8.jpg?alt=media&token=410a01de-dc93-4369-b0bc-71b30b37a6a1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      // Cargar la primera imagen inmediatamente
      const firstImg = new Image();
      firstImg.onload = () => {
        setImagesLoaded((prev) => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      };
      firstImg.src = backgroundImages[0];

      // Cargar las demás imágenes progresivamente
      backgroundImages.slice(1).forEach((src, index) => {
        setTimeout(
          () => {
            const img = new Image();
            img.onload = () => {
              setImagesLoaded((prev) => {
                const newState = [...prev];
                newState[index + 1] = true;
                return newState;
              });
            };
            img.src = src;
          },
          (index + 1) * 500,
        ); // Cargar cada 500ms
      });
    };

    preloadImages();
  }, []);

  // Auto-change images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length,
        );
        setIsTransitioning(false);
      }, 500); // Duración de la transición
    }, 10000); // Cambiar cada 10 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex && imagesLoaded[index]
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: imagesLoaded[index] ? `url(${image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}

        {/* Fallback gradient si las imágenes no cargan */}
        {!imagesLoaded[currentImageIndex] && (
          <div className="absolute inset-0 bg-gradient-to-br from-white-50 to-blue-50"></div>
        )}
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 200);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-110 shadow-lg"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl text-white mb-2 animate-fade-in drop-shadow-lg">
              {sectionTexts.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          {/* Title & Description */}
          <div
            className="mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 drop-shadow-lg">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
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
              className="bg-blue-600 bg-opacity-90 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-blue-700 hover:bg-opacity-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              {sectionTexts.hero.cta.primary}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white border-opacity-80 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200 font-semibold"
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
                className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-200 transform hover:scale-110 drop-shadow-lg"
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
            className="text-white text-opacity-70 hover:text-opacity-100 transition-colors duration-200 drop-shadow-lg"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={40} />
          </button>
        </div>

        {/* Floating Elements (Decorative) - Ahora más sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
