// src/data/index.js
// Archivo central para exportar todos los datos

// Importar primero para poder re-exportar
import { personalInfo, navigation, sectionTexts } from "./personalInfo";
import {
  projects,
  projectCategories,
  featuredProjects,
  getProjectById,
  getProjectsByCategory,
} from "./projects";

// Re-exportaciones nombradas
export { personalInfo, navigation, sectionTexts } from "./personalInfo";

export {
  projects,
  projectCategories,
  featuredProjects,
  getProjectById,
  getProjectsByCategory,
} from "./projects";

// Exportación por defecto con toda la data
export default {
  personalInfo,
  navigation,
  sectionTexts,
  projects,
  projectCategories,
  featuredProjects,
};
