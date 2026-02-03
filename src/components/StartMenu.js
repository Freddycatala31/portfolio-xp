import React from 'react';

const StartMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="window" style={{
      width: '250px',
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
      background: '#ECE9D8',
      border: '1px solid #0055EA',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      overflow: 'hidden' // Importante para los bordes redondeados
    }}>
      {/* Cabecera azul */}
      <div style={{
        background: 'linear-gradient(to bottom, #245EDC, #3E87E8)',
        padding: '10px',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <img 
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
          alt="User" 
          style={{ width: '40px', height: '40px', borderRadius: '3px', border: '2px solid white' }}
        />
        <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Admin</span>
      </div>

      {/* Cuerpo del menú */}
      <div style={{ flex: 1, display: 'flex' }}>
        
        {/* Columna Izquierda (Blanca) */}
        <div style={{ flex: 1, background: 'white', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div className="start-item" style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
            <span>🌍</span>
            <div>
              <strong>Internet</strong>
              <div style={{fontSize: '10px', color: '#666'}}>Chrome</div>
            </div>
          </div>
          <div className="start-item" style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <div style={{fontSize: '10px', color: '#666'}}>Outlook</div>
            </div>
          </div>
        </div>

        {/* Columna Derecha (Azul claro) */}
        <div style={{ width: '40%', background: '#D3E5FA', padding: '10px', borderLeft: '1px solid #9FBDEB' }}>
          <p style={{ margin: '5px 0', fontSize: '12px', fontWeight: 'bold' }}>📄 Mis Documentos</p>
          <p style={{ margin: '5px 0', fontSize: '12px', fontWeight: 'bold' }}>📷 Mis Imágenes</p>
          <hr style={{ borderColor: '#9FBDEB', margin: '10px 0' }}/>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>⚙️ Panel de Control</p>
        </div>
      </div>

      {/* Pie (Apagar) */}
      <div style={{
        background: 'linear-gradient(to bottom, #3E87E8, #245EDC)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white'
      }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => alert("¡Hasta luego!")}>
          🛑 Apagar
        </button>
      </div>
    </div>
  );
};

// ESTA ES LA LÍNEA CLAVE PARA ARREGLAR EL ERROR:
export default StartMenu;