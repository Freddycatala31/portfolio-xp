// src/content/Links.js
import React from 'react';

const Links = () => {
  const links = [
    { title: "GitHub", url: "https://github.com/Freddycatala31", icon: "💻" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/irene-ortiz-%C3%A1lvarez/", icon: "🤝" },
    { title: "Descargar CV", url: "/curriculum.pdf", icon: "📄" }, // Asegúrate de tener un PDF en la carpeta public
  ];

  return (
    <div style={{ padding: '15px', textAlign: 'center' }}>
      <p>Conexiones de red disponibles:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {links.map((link, index) => (
          <button 
            key={index}
            onClick={() => window.open(link.url, '_blank')}
            style={{ 
              padding: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <span>{link.title}</span>
          </button>
        ))}
      </div>
      
      <div style={{ marginTop: '20px', borderTop: '1px solid #999', paddingTop: '10px' }}>
        <p style={{ marginBottom: '5px' }}>O envíame un correo directo:</p>
        <button onClick={() => window.location.href = "mailto:ortizalvarezirene@gmail.com"}>
          📧 Enviar Email
        </button>
      </div>
    </div>
  );
};

export default Links;