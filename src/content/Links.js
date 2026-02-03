// src/content/Links.js
import React from 'react';

const Links = () => {
  const baseUrl = process.env.PUBLIC_URL;
  const cvPath = `${baseUrl}/cv.pdf`;
  const links = [
    { title: "GitHub", url: "https://github.com/Freddycatala31", icon: "💻" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/irene-ortiz-%C3%A1lvarez/", icon: "🤝" },
    { title: "Visualizar CV", url: cvPath, icon: "📄" }, // Asegúrate de tener un PDF en la carpeta public public\curriculum.pdf
  ];

  return (
    <div style={{ padding: '15px', textAlign: 'center' }}>
      <p>Conexiones de red disponibles:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            // TARGET: _blank abre nueva pestaña (útil si la descarga falla y solo lo abre)
            target={"_blank"}
            rel="noopener noreferrer"
            // DOWNLOAD: Fuerza la descarga y sugiere nombre de archivo
            download={link.isDownload ? "Curriculum_Irene.pdf" : undefined}
            style={{ 
              textDecoration: 'none',
              color: 'black',
              padding: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px',
              cursor: 'pointer',
              border: '1px solid #a0a0a0',
              background: '#e0e0e0',
              borderRadius: '3px',
              boxShadow: 'inset 1px 1px 0px white, 1px 1px 2px black'
            }}
          >
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <span>{link.title}</span>
          </a>
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