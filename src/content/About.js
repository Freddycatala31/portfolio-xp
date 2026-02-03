import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '15px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      {/* Columna Izquierda: Foto */}
      <div style={{ textAlign: 'center', width: '120px' }}>
        <img 
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // CAMBIA ESTO POR TU FOTO
          alt="Avatar" 
          style={{ 
            width: '100px', 
            height: '100px', 
            border: '2px solid #808080', 
            marginBottom: '10px' 
          }} 
        />
        <p><strong>Usuario Admin</strong></p>
      </div>

      {/* Columna Derecha: Info */}
      <div style={{ flex: 1 }}>
        <h4 style={{ marginTop: 0 }}>Irene Ortiz Álvarez</h4>
        <p>
          Apasionada de la robótica y la
            tecnología, me defino por ser
            una persona con ganas de
            aprender, creativa y resolutiva.

        </p>
        
        <fieldset style={{ marginTop: '15px' }}>
          <legend>Detalles de Contacto</legend>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={() => window.open('https://github.com/Freddycatala31', '_blank')}>
              GitHub
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/irene-ortiz-%C3%A1lvarez/', '_blank')}>
              LinkedIn
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default About;