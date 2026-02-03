
import React from 'react';

const Projects = () => {
  const projects = [
    { name: "E-commerce App", tech: "React, Redux", img: "ruta/a/imagen1.jpg" },
    { name: "Dashboard Crypto", tech: "D3.js, API", img: "ruta/a/imagen2.jpg" }
  ];

  return (
    <div style={{ padding: '10px' }}>
      <p>Mis proyectos más recientes:</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {projects.map((p, i) => (
          <fieldset key={i}>
            <legend>{p.name}</legend>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
            <p style={{ fontSize: '12px' }}>Tech: {p.tech}</p>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default Projects;