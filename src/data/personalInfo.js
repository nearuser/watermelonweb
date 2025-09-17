// src/data/personalInfo.js

export const personalInfo = {
  // Información básica
  name: "Gabriel",
  title: "Fotografo Audiovisual",
  subtitle:
    "Bajo el concepto Visión Nativa, desarrollo una práctica visual que entrelaza fotografía, cine documental y memoria. Mi enfoque busca registrar lo íntimo, lo cotidiano y lo ancestral, rescatando relatos locales y vínculos con el paisaje.",

  // Descripción personal
  bio: "Mi trabajo nace de una mirada arraigada al territorio que habito. Crecí observando los cerros que hoy siguen siendo parte de mi horizonte cotidiano. Desde esa primera imagen —una fotografía a mi familia con el cerro de fondo— entendí que mirar era también pertenecer.",

  // Información de contacto
  contact: {
    email: "g.asenie.urra@gmail.com",
    Behance: "/gasenieurra",
    Instagram: "@chilechicano",
    location: "Chile Chico, Región de Aysén - Chile",
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
    Fotografia: {
      title: "Fotografia",
      description: "Fotografia Digital",
      technologies: ["Reflex", "Mirrorless", "Iluminación"],
    },
    Edición: {
      title: "Edición Fotografica",
      description: "Software de edición digital",
      technologies: ["Photoshop", "Premier PRO", "Lightroom"],
    },
  },

  // Experiencia profesional (opcional)
  experience: [
    {
      title: "Amo y señor del callejon velasquez",
      company: "dond esta el bus amarillo",
      period: "2020 - Presente",
      description: "tremenda casa muchacho, sabelo",
    },
    // Agrega más experiencias aquí
  ],

  // Educación (opcional)
  education: [
    {
      degree: "Tu Carrera",
      institution: "Tu Universidad",
      year: "2020-2024",
      description: "Universidad Tanto Tomár",
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
      "Trabajo con comunidades, familias y espacios que me invitan a mirar desde adentro. Creo en una imagen viva, con raíz y contexto. Una imagen que escuche.",
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
