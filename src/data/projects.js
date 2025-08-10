// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Proyecto E-commerce",
    description:
      "Una aplicación web completa con React, Firebase y Stripe para pagos. Incluye carrito de compras, autenticación de usuarios, panel administrativo y integración con pasarelas de pago.",
    shortDescription: "E-commerce completo con React y Firebase",

    // Tecnologías utilizadas
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Stripe",
      "Context API",
    ],

    // Características principales
    features: [
      "Autenticación de usuarios",
      "Carrito de compras persistente",
      "Integración con Stripe",
      "Panel de administración",
      "Responsive design",
      "Búsqueda y filtros",
    ],

    // Imágenes del proyecto
    images: {
      main: "https://via.placeholder.com/800x450/3b82f6/white?text=E-commerce+Demo",
      thumbnail:
        "https://via.placeholder.com/400x250/3b82f6/white?text=E-commerce",
      gallery: [
        "https://via.placeholder.com/600x400/3b82f6/white?text=Homepage",
        "https://via.placeholder.com/600x400/3b82f6/white?text=Product+Page",
        "https://via.placeholder.com/600x400/3b82f6/white?text=Cart",
      ],
    },

    // Enlaces
    links: {
      demo: "https://tu-ecommerce-demo.com",
      github: "https://github.com/tuusuario/ecommerce-project",
      figma: "https://figma.com/design-link", // opcional
    },

    // Metadata
    status: "completed", // completed, in-progress, planned
    featured: true,
    category: "fullstack",
    startDate: "2024-01",
    endDate: "2024-03",
  },

  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo con gráficos en tiempo real y gestión de datos. Incluye visualizaciones dinámicas, filtros avanzados y exportación de reportes en múltiples formatos.",
    shortDescription: "Dashboard con análisis de datos en tiempo real",

    technologies: ["React", "Chart.js", "Node.js", "MongoDB", "Socket.io"],

    features: [
      "Gráficos interactivos en tiempo real",
      "Filtros y búsqueda avanzada",
      "Exportación de datos (PDF, Excel)",
      "Notificaciones push",
      "Múltiples tipos de visualización",
      "API REST para datos",
    ],

    images: {
      main: "https://via.placeholder.com/800x450/10b981/white?text=Analytics+Dashboard",
      thumbnail:
        "https://via.placeholder.com/400x250/10b981/white?text=Dashboard",
      gallery: [
        "https://via.placeholder.com/600x400/10b981/white?text=Main+Dashboard",
        "https://via.placeholder.com/600x400/10b981/white?text=Charts+View",
        "https://via.placeholder.com/600x400/10b981/white?text=Reports",
      ],
    },

    links: {
      demo: "https://tu-dashboard-demo.com",
      github: "https://github.com/tuusuario/analytics-dashboard",
    },

    status: "completed",
    featured: true,
    category: "frontend",
    startDate: "2024-04",
    endDate: "2024-06",
  },

  {
    id: 3,
    title: "App Mobile First",
    description:
      "Aplicación móvil desarrollada con React Native y Firebase. Incluye autenticación, notificaciones push, modo offline y sincronización de datos en tiempo real.",
    shortDescription: "App móvil con React Native y Firebase",

    technologies: [
      "React Native",
      "Firebase",
      "Redux Toolkit",
      "Expo",
      "AsyncStorage",
    ],

    features: [
      "Funcionalidad offline",
      "Notificaciones push",
      "Autenticación biométrica",
      "Sincronización en tiempo real",
      "Navegación fluida",
      "Optimizada para iOS y Android",
    ],

    images: {
      main: "https://via.placeholder.com/400x600/8b5cf6/white?text=Mobile+App",
      thumbnail:
        "https://via.placeholder.com/400x250/8b5cf6/white?text=Mobile+App",
      gallery: [
        "https://via.placeholder.com/300x600/8b5cf6/white?text=Login+Screen",
        "https://via.placeholder.com/300x600/8b5cf6/white?text=Home+Screen",
        "https://via.placeholder.com/300x600/8b5cf6/white?text=Profile+Screen",
      ],
    },

    links: {
      demo: "https://expo.dev/@tuusuario/tu-app",
      github: "https://github.com/tuusuario/mobile-app",
      playstore: "https://play.google.com/store/apps/details?id=com.tuapp", // opcional
      appstore: "https://apps.apple.com/app/tu-app/id123456789", // opcional
    },

    status: "in-progress",
    featured: false,
    category: "mobile",
    startDate: "2024-07",
    endDate: null,
  },

  // Proyecto adicional de ejemplo
  {
    id: 4,
    title: "Blog Personal",
    description:
      "Blog estático generado con Next.js, optimizado para SEO y rendimiento. Incluye sistema de comentarios, búsqueda y modo oscuro.",
    shortDescription: "Blog estático con Next.js y MDX",

    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "Prisma"],

    features: [
      "Generación estática (SSG)",
      "Optimización SEO avanzada",
      "Sistema de comentarios",
      "Búsqueda de contenido",
      "Modo oscuro/claro",
      "RSS Feed automático",
    ],

    images: {
      main: "https://via.placeholder.com/800x450/f59e0b/white?text=Personal+Blog",
      thumbnail: "https://via.placeholder.com/400x250/f59e0b/white?text=Blog",
      gallery: [
        "https://via.placeholder.com/600x400/f59e0b/white?text=Blog+Homepage",
        "https://via.placeholder.com/600x400/f59e0b/white?text=Article+Page",
      ],
    },

    links: {
      demo: "https://tu-blog.com",
      github: "https://github.com/tuusuario/personal-blog",
    },

    status: "completed",
    featured: false,
    category: "frontend",
    startDate: "2023-11",
    endDate: "2023-12",
  },
];

// Categorías de proyectos para filtros
export const projectCategories = [
  { id: "all", label: "Todos", count: projects.length },
  {
    id: "fullstack",
    label: "Full Stack",
    count: projects.filter((p) => p.category === "fullstack").length,
  },
  {
    id: "frontend",
    label: "Frontend",
    count: projects.filter((p) => p.category === "frontend").length,
  },
  {
    id: "mobile",
    label: "Mobile",
    count: projects.filter((p) => p.category === "mobile").length,
  },
];

// Proyectos destacados (para mostrar en homepage)
export const featuredProjects = projects.filter((project) => project.featured);

// Función para obtener proyecto por ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id));
};

// Función para obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export default projects;
