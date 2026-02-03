import React, { useState, useEffect } from 'react';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import StartMenu from './components/StartMenu';

// Contenidos
import About from './content/About';
import Projects from './content/Projects';
import Experience from './content/Experience';
import Tech from './content/Tech';
import Links from './content/Links';

const App = () => {
  // Configuración
  const apps = [
    { id: 'about', title: 'Sobre Mí', content: About, icon: '👤', x: '10%', y: '5%' },
    { id: 'projects', title: 'Proyectos', content: Projects, icon: '📁', x: '40%', y: '10%' },
    { id: 'experience', title: 'Experiencia', content: Experience, icon: '💼', x: '15%', y: '45%' },
    { id: 'tech', title: 'Stack', content: Tech, icon: '💻', x: '50%', y: '50%' },
    { id: 'links', title: 'Enlaces', content: Links, icon: '🔗', x: '30%', y: '30%' },
  ];

  const [windows, setWindows] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const openWindow = (app) => {
  setIsStartOpen(false); // Cerramos menú inicio

  // --- LÓGICA MÓVIL (NUEVA) ---
  if (isMobile) {
    // En móvil, reemplazamos todo el array con SOLO la nueva app.
    // Esto cierra automáticamente cualquier otra ventana abierta.
    setWindows([app]);
    setActiveId(app.id);
    return;
  }

  // --- LÓGICA PC (INTACTA) ---
  if (windows.find((w) => w.id === app.id)) {
    setActiveId(app.id);
    return;
  }
  setWindows([...windows, app]);
  setActiveId(app.id);
};

  const closeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const focusWindow = (id) => {
    setActiveId(id);
    setIsStartOpen(false);
  };

  const toggleStart = () => {
    setIsStartOpen(!isStartOpen);
  };

  // Click en el fondo para cerrar menú inicio
  const handleBackgroundClick = (e) => {
    // Si el click fue directo en el contenedor principal (el fondo)
    if (e.target === e.currentTarget) {
      setIsStartOpen(false);
    }
  };

  return (
    <div 
      onClick={handleBackgroundClick}
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      
      {/* 1. ICONOS DE ESCRITORIO (Z-Index bajo) */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 40px)', // Restamos la barra
        padding: '20px', 
        display: 'flex', 
        flexDirection: isMobile ? 'row' : 'column', 
        alignContent:'flex-start',
        flexWrap: 'wrap',
        gap: '20px',
        zIndex: 1, // Aseguramos que esté sobre el fondo
        pointerEvents: 'none' // Truco: permite hacer click en el fondo a través del div contenedor
      }}>
        {apps.map((app) => (
          <div key={app.id} style={{ pointerEvents: 'auto' }}> 
            {/* Reactivamos clicks solo en los iconos */}
            <DesktopIcon 
              title={app.title} 
              icon={app.icon} 
              onClick={() => isMobile && openWindow(app)}
              onDoubleClick={() => !isMobile && openWindow(app)}
            />
          </div>
        ))}
      </div>

      {/* 2. VENTANAS (Z-Index medio) */}
      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          content={win.content}
          onClose={closeWindow}
          onFocus={focusWindow}
          zIndex={activeId === win.id ? 100 : 10} // Z-index alto
          initialX={win.x}
          initialY={win.y}
        />
      ))}

      {/* 3. MENÚ DE INICIO (Z-Index muy alto) */}
      {isStartOpen && (
         <div style={{ position: 'absolute', bottom: '40px', left: 0, zIndex: 99999 }}>
            <StartMenu isOpen={true} />
         </div>
      )}

      {/* 4. BARRA DE TAREAS (Z-Index máximo) */}
      <div style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 100000 }}>
        <Taskbar 
          windows={windows} 
          activeId={activeId} 
          onFocus={focusWindow} 
          onToggleStart={toggleStart}
          isStartOpen={isStartOpen}
        />
      </div>

    </div>
  );
};

export default App;