// src/sections/Contact.js
import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { personalInfo, sectionTexts } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    // Aquí integrarías con tu servicio de email (Firebase Functions, EmailJS, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      name: "Email",
      value: personalInfo.contact.email,
      href: personalInfo.social.email,
      icon: Mail,
      color: "bg-red-100 text-red-600",
      description: "Respuesta en 24 horas",
    },
    {
      name: "GitHub",
      value: personalInfo.contact.github,
      href: personalInfo.social.github,
      icon: Github,
      color: "bg-gray-100 text-gray-600",
      description: "Revisa mi código",
    },
    {
      name: "LinkedIn",
      value: personalInfo.contact.linkedin,
      href: personalInfo.social.linkedin,
      icon: Linkedin,
      color: "bg-blue-100 text-blue-600",
      description: "Conectemos profesionalmente",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {sectionTexts.contact.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {sectionTexts.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ¿Tienes un proyecto en mente? ¿Necesitas ayuda con desarrollo
                web? ¿O simplemente quieres saludar? No dudes en contactarme a
                través de cualquiera de estos medios.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg ${method.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {method.name}
                      </h4>
                      <p className="text-gray-600 mb-1">{method.value}</p>
                      <p className="text-sm text-gray-500">
                        {method.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            {personalInfo.contact.location && (
              <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Ubicación
                  </h4>
                  <p className="text-gray-600">
                    {personalInfo.contact.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Disponible para trabajo remoto
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíame un Mensaje
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                <CheckCircle className="text-green-600 mr-3" size={20} />
                <p className="text-green-700">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto o pregunta..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    {sectionTexts.contact.cta}
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">¿Prefieres el email directo?</p>
              <a
                href={personalInfo.social.email}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <Mail size={16} className="mr-2" />
                {personalInfo.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Trabajemos juntos para convertir tu idea en una realidad digital
              que impacte positivamente a tus usuarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={personalInfo.social.email}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Contactar Ahora
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Github size={20} className="mr-2" />
                Ver mi Trabajo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
