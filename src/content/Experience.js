import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp Inc.",
      period: "2021 - Presente",
      desc: "Liderando la migración de legacy code a React 18. Mejora del rendimiento en un 40%."
    },
    {
      role: "Web Developer",
      company: "Agencia Creativa",
      period: "2019 - 2021",
      desc: "Desarrollo de landing pages interactivas y e-commerce con Shopify y Javascript."
    },
    {
      role: "Junior Dev",
      company: "Startup Local",
      period: "2018 - 2019",
      desc: "Mantenimiento de bases de datos y corrección de bugs en el backend."
    }
  ];

  return (
    <div style={{ padding: '10px' }}>
      <p>Historial de versiones laborales:</p>
      
      {jobs.map((job, index) => (
        <fieldset key={index} style={{ marginBottom: '15px' }}>
          <legend><strong>{job.company}</strong></legend>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <strong>{job.role}</strong>
            <span style={{ color: '#666' }}>{job.period}</span>
          </div>
          <p style={{ margin: '5px 0' }}>{job.desc}</p>
        </fieldset>
      ))}
    </div>
  );
};

export default Experience;