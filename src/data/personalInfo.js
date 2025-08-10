// src/data/personalInfo.js

export const personalInfo = {
  // Información básica
  name: "Tu Nombre",
  title: "Desarrollador Full Stack",
  subtitle: "especializado en React, Firebase y experiencias web modernas",

  // Descripción personal
  bio: "Soy un desarrollador Full Stack con experiencia en tecnologías modernas como React, Firebase, Node.js y bases de datos NoSQL. Me encanta trabajar en proyectos que combinen diseño atractivo con funcionalidad robusta.",

  // Información de contacto
  contact: {
    email: "tu@email.com",
    github: "@tuusuario",
    linkedin: "@tuperfil",
    location: "Tu Ciudad, País",
  },

  // Enlaces a redes sociales
  social: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuperfil",
    email: "mailto:tu@email.com",
    twitter: "https://twitter.com/tuusuario", // opcional
  },

  // Habilidades por categorías
  skills: {
    frontend: {
      title: "Frontend",
      description: "React, Tailwind, JavaScript",
      technologies: [
        "React",
        "JavaScript ES6+",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "TypeScript",
      ],
    },
    backend: {
      title: "Backend",
      description: "Firebase, Node.js, APIs",
      technologies: ["Firebase", "Node.js", "Express", "REST APIs", "GraphQL"],
    },
    database: {
      title: "Database",
      description: "Firestore, MongoDB",
      technologies: ["Firestore", "MongoDB", "PostgreSQL", "Redis"],
    },
    tools: {
      title: "Tools",
      description: "Git, VS Code, Zed",
      technologies: ["Git", "GitHub", "VS Code", "Zed", "Docker", "Figma"],
    },
  },

  // Experiencia profesional (opcional)
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "Tu Empresa",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web con React y Firebase",
    },
    // Agrega más experiencias aquí
  ],

  // Educación (opcional)
  education: [
    {
      degree: "Tu Carrera",
      institution: "Tu Universidad",
      year: "2020-2024",
      description: "Especialización en desarrollo web",
    },
    // Agrega más educación aquí
  ],

  // Configuración del sitio
  siteConfig: {
    title: "Portfolio - Tu Nombre",
    description: "Portfolio personal de Tu Nombre - Desarrollador Full Stack",
    url: "https://tu-portfolio.com",
    image: "/og-image.jpg", // para redes sociales
  },
};

// Información adicional que puedes usar
export const navigation = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

// Textos de secciones
export const sectionTexts = {
  hero: {
    greeting: "Hola, soy",
    cta: {
      primary: "Ver Proyectos",
      secondary: "Contacto",
    },
  },
  about: {
    title: "Sobre Mí",
    subtitle:
      "Apasionado por crear soluciones digitales que impacten positivamente en las personas",
  },
  projects: {
    title: "Mis Proyectos",
    subtitle:
      "Una selección de proyectos que muestran mis habilidades y experiencia",
  },
  contact: {
    title: "¿Trabajamos Juntos?",
    subtitle: "Estoy siempre interesado en nuevos proyectos y oportunidades",
    cta: "Enviar Email",
  },
};

export default personalInfo;
