// IMPORTANTE: Aquí añadimos { useState, useEffect } para que no de error
import React, { useState, useEffect } from 'react';
import fotoDni from '../materials/fotodni.jpeg';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      padding: '15px', 
      display: 'flex', 
      // Si es móvil, columna (uno debajo de otro). Si es PC, fila (lado a lado).
      flexDirection: isMobile ? 'column' : 'row', 
      gap: '20px', 
      alignItems: isMobile ? 'center' : 'flex-start' // Centramos todo en móvil
    }}>
      
      {/* Columna Foto */}
      <div style={{ 
        textAlign: 'center', 
        // En móvil quitamos el ancho fijo para que no estorbe
        width: isMobile ? 'auto' : '120px',
        marginBottom: isMobile ? '10px' : '0'
      }}>
        <img
          src={fotoDni} // Puedes cambiar esto por una foto tuya real
          alt="Avatar" 
          style={{ 
            width: '100px', 
            height: '130px', 
            border: '2px solid #808080', 
            marginBottom: '10px',
            objectFit: 'cover' 

          }} 
        />
        <p><strong>Usuario Admin</strong></p>
      </div>

      {/* Columna Derecha: Info */}
      <div style={{ flex: 1, width: '100%' }}>
        <h4 style={{ marginTop: 0, textAlign: isMobile ? 'center' : 'left' }}>Irene Ortiz Álvarez</h4>
        <p>
          Apasionada de la robótica y la tecnología, me defino por ser una persona con ganas de aprender, creativa y resolutiva.
        </p>
        <p>
          Actualmente, estoy cursando el ciclo formativo de grado superior en desarrollo de aplicaciones multiplataforma en el Instituto Nebrija.
        </p>
        <p>
          Soy una persona resolutiva, creativa y con muchas ganas de aprender y crecer profesionalmente en el ámbito de la tecnología.
        </p>
        
        <fieldset style={{ marginTop: '15px' }}>
          <legend>Detalles de Contacto</legend>
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start' // Botones centrados en móvil
          }}>
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