// src/sections/About.js
import React from "react";
import { personalInfo, sectionTexts } from "../data";

const About = () => {
  // Convertir skills object a array para mapear
  const skillsArray = Object.entries(personalInfo.skills).map(
    ([key, skill]) => ({
      id: key,
      ...skill,
    }),
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {sectionTexts.about.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {sectionTexts.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://via.placeholder.com/400x400/6366f1/white?text=Tu+Foto"
                  alt={`${personalInfo.name} - Profile`}
                  className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ¡Hola! Soy {personalInfo.name.split(" ")[0]} 👋
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Experience/Education highlights */}
            {personalInfo.experience && personalInfo.experience.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Experiencia Actual
                </h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">
                    {personalInfo.experience[0].title}
                  </p>
                  <p className="text-gray-600">
                    {personalInfo.experience[0].company}
                  </p>
                  <p className="text-sm text-gray-500">
                    {personalInfo.experience[0].period}
                  </p>
                </div>
              </div>
            )}

            {/* Skills Grid */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Tecnologías & Herramientas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsArray.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors duration-200 group"
                  >
                    <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {skill.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-3">
                      {skill.description}
                    </p>

                    {/* Technology badges */}
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {skill.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                          +{skill.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600">
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">∞</div>
                <div className="text-sm text-gray-600">Ganas de Aprender</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info - Optional */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ¿Qué me motiva?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Me apasiona crear soluciones que no solo funcionen bien, sino que
            también generen un impacto positivo en la vida de las personas. Cada
            línea de código es una oportunidad para hacer algo mejor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
