import React from 'react';

// Añadimos 'onClick' a las props que recibe el componente
const DesktopIcon = ({ title, icon, onDoubleClick, onClick }) => (
  <div 
    // Ahora conectamos AMBOS eventos
    onClick={onClick}
    onDoubleClick={onDoubleClick} 
    style={{ 
      width: '80px', 
      textAlign: 'center', 
      cursor: 'pointer', 
      color: 'white',
      textShadow: '1px 1px 2px black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // Un poco de estilo para mejorar la zona táctil en móvil
      padding: '5px',
      userSelect: 'none' // Evita que se seleccione el texto al hacer doble click
    }}
    // Efecto visual simple al presionar (opcional)
    className="desktop-icon"
  >
    <div style={{ fontSize: '32px', marginBottom: '5px' }}>{icon}</div>
    <span style={{ 
      fontSize: '14px', 
      background: 'rgba(0,0,0,0.2)', // Fondo sutil para leer mejor
      padding: '2px 5px',
      borderRadius: '3px'
    }}>
      {title}
    </span>
  </div>
);

export default DesktopIcon;