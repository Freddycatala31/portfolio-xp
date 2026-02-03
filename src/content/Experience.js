import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: "Practicas FCT",
      company: "Consultoria Mirelia",
      period: "Marzo - Junio 2024",
      desc: "Gestión de CRM y Administración de grupo"
    },
    {
      role: "4eso+empresa",
      company: "Juguetrónica",
      period: "Abril 2022",
      desc: "Gestión de Eventos y servicio al cliente"
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