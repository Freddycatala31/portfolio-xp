import React, { useState, useEffect } from 'react';

const Taskbar = ({ windows, activeId, onFocus, onToggleStart, isStartOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="title-bar" style={{ 
      position: 'fixed', // ASEGURA QUE ESTÉ FIJO
      bottom: 0, 
      left: 0,
      width: '100vw', // Ocupa todo el ancho
      height: '40px', 
      padding: '0', 
      zIndex: 9999, // SIEMPRE ENCIMA
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 0,
      borderRadius: 0 // Quitar bordes redondeados de XP.css si molestan abajo
    }}>
      
      {/* Botón de Inicio */}
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center', paddingLeft: '2px' }}>
        <button 
          onClick={onToggleStart}
          className={isStartOpen ? 'active' : ''} // Se queda hundido si está abierto
          style={{ 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '5px',
            height: '32px',
            padding: '0 10px',
            borderRadius: '0 10px 10px 0',
            background: 'linear-gradient(to bottom, #3E801D, #255F0D)', // Verde XP
            color: 'white',
            border: '1px solid #fff'
          }}
        >
          <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" alt="start" style={{width: '18px'}}/>
          Start
        </button>
        
        <div style={{ borderLeft: '1px solid #555', height: '25px', margin: '0 5px', opacity: 0.5 }}></div>
        
        {/* Pestañas de ventanas */}
        <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', maxWidth: '70vw' }}>
          {windows.map(win => (
            <button 
              key={win.id} 
              className={activeId === win.id ? 'active' : ''}
              onClick={() => onFocus(win.id)}
              style={{ 
                fontWeight: activeId === win.id ? 'bold' : 'normal', 
                minWidth: '120px', 
                maxWidth: '150px',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '28px',
                marginTop: '2px'
              }}
            >
              {win.icon} {win.title}
            </button>
          ))}
        </div>
      </div>

      {/* Reloj */}
      <div className="status-bar-field" style={{ 
        width: '90px', 
        textAlign: 'center', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#0B76BA',
        color: 'white',
        borderLeft: '1px solid rgba(255,255,255,0.3)'
      }}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Taskbar;