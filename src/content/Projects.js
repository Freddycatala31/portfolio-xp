
import React from 'react';

const Projects = () => {
  const projects = [
    { name: "Videojuego 2D en Unity", tech: "Unity, C#"},
    { name: "Dashboard de datos sobre el ascensor social", tech: "HTML,CSS,JavaScript, Chart.js"},
    { name: "Gestor de empleados", tech: "Python,Tkiner"},
    { name: "Desarrollo de un CRM empresarial", tech: "Angular 18, SpringBoot-Java21"}
  ];

  return (
    <div style={{ padding: '10px' }}>
      <p>Mis proyectos más recientes:</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {projects.map((p, i) => (
          <fieldset key={i}>
            <legend>{p.name}</legend>
            <p style={{ fontSize: '12px' }}>Tech: {p.tech}</p>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default Projects;