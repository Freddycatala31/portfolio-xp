import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const Window = ({ id, title, content: Content, onClose, zIndex, onFocus, initialX, initialY }) => {
  const nodeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Estilos condicionales
  const mobileStyle = {
 width: '90%',       // Un poco más estrecho para ver bordes
    left: '5%',         // Centrado (5% margen a cada lado)
    
    // CAMBIO IMPORTANTE: Altura reducida
    height: '50vh',     // Ocupa solo la mitad de la pantalla
    top: '40%',         // La bajamos para que los iconos de arriba se vean
                        // (O puedes poner top: '10%' si prefieres ver los de abajo)
    
    position: 'absolute',
    zIndex: zIndex,
    boxShadow: '2px 2px 10px rgba(0,0,0,0.5)',
    display: 'flex',       // Asegura que el contenido se estructure bien
    flexDirection: 'column'
  };

  const desktopStyle = {
    width: '450px',
    left: initialX || '30%',
    top: initialY || '10%',
    position: 'absolute',
    zIndex: zIndex,
    boxShadow: '2px 2px 10px rgba(0,0,0,0.5)'
  };

  return (
    <Draggable 
      handle=".title-bar" 
      nodeRef={nodeRef} 
      onMouseDown={() => onFocus(id)}
      disabled={isMobile} // IMPORTANTE: Desactivar arrastre en móvil
    >
      <div 
        ref={nodeRef}
        className="window" 
        style={isMobile ? mobileStyle : desktopStyle}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={() => onClose(id)} />
          </div>
        </div>
        
        <div 
          className="window-body" 
          style={{ 
            background: '#ECE9D8', 
            // En móvil calculamos la altura restando la barra de título (aprox 30px)
            height: isMobile ? 'calc(100% - 30px)' : '350px', 
            overflowY: 'auto' 
          }}
        >
          {Content && <Content />}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;