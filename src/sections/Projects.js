// src/sections/Projects.js
import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { projects, projectCategories, sectionTexts } from "../data";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar proyectos por categoría
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Componente para las tarjetas de proyecto
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.images.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === "completed"
                ? "bg-green-100 text-green-800"
                : project.status === "in-progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
            }`}
          >
            {project.status === "completed"
              ? "Completado"
              : project.status === "in-progress"
                ? "En Progreso"
                : "Planeado"}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              ⭐ Destacado
            </span>
          </div>
        )}

        {/* Overlay con links */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <Github size={16} />
              <span>Código</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.shortDescription || project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              <ExternalLink size={14} className="mr-1" />
              Ver Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-700 transition-colors text-sm font-medium"
            >
              <Github size={14} className="mr-1" />
              Código
            </a>
          </div>

          {/* Project dates */}
          <div className="text-xs text-gray-400">
            {project.startDate} - {project.endDate || "Presente"}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {sectionTexts.projects.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {sectionTexts.projects.subtitle}
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center space-x-2 mb-4 px-4 py-2 bg-white rounded-lg shadow-md"
            >
              <Filter size={16} />
              <span>Filtros</span>
            </button>

            {/* Filter Buttons */}
            <div
              className={`flex flex-wrap gap-3 ${showFilters ? "block" : "hidden sm:flex"}`}
            >
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 font-medium ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Projects count */}
            <div className="text-sm text-gray-500 mt-4 sm:mt-0">
              {filteredProjects.length} proyecto
              {filteredProjects.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Filter size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-gray-500">
              Prueba con otra categoría o revisa todos los proyectos
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estos son solo algunos de mis proyectos. Si tienes una idea o
              proyecto en mente, me encantaría colaborar contigo.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
