// src/App.js
import React from "react";

// Componentes comunes
import { Header, Footer } from "./components/common";

// Secciones principales
import { Hero, About, Projects, Contact } from "./sections";

// Estilos CSS personalizados (si los necesitas)
// import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
