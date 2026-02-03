import React, { useState } from 'react';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div style={{ padding: '10px' }}>
      {/* Menú de Pestañas */}
      <menu role="tablist" className="multi-rows">
        <li 
          role="tab" 
          aria-selected={activeTab === 'frontend'} 
          onClick={() => setActiveTab('frontend')}
        >
          <a href="#frontend">Frontend</a>
        </li>
        <li 
          role="tab" 
          aria-selected={activeTab === 'backend'} 
          onClick={() => setActiveTab('backend')}
        >
          <a href="#backend">Backend</a>
        </li>
        <li 
          role="tab" 
          aria-selected={activeTab === 'tools'} 
          onClick={() => setActiveTab('tools')}
        >
          <a href="#tools">Tools</a>
        </li>
      </menu>

      {/* Contenido de las pestañas */}
      <div className="window" role="tabpanel" style={{ height: '200px' }}>
        <div className="window-body">
          
          {activeTab === 'frontend' && (
            <div>
              <p>Tecnologías de Interfaz:</p>
              <ul className="tree-view">
                <li>React.js (Hooks, Context)</li>
                <li>Vue.js</li>
                <li>CSS3 / SASS / Tailwind</li>
                <li>Redux Toolkit</li>
              </ul>
            </div>
          )}

          {activeTab === 'backend' && (
            <div>
              <p>Servidor y Base de Datos:</p>
              <ul className="tree-view">
                <li>Node.js & Express</li>
                <li>Python (Django)</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          )}

          {activeTab === 'tools' && (
            <div>
              <p>Herramientas de desarrollo:</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button disabled>Git</button>
                <button disabled>Docker</button>
                <button disabled>Figma</button>
                <button disabled>Jira</button>
                <button disabled>VS Code</button>
              </div>
            </div>
          )}

        </div>
      </div>
      
      <div className="status-bar" style={{ marginTop: '10px' }}>
        <p className="status-bar-field">Estado: Actualizado</p>
        <p className="status-bar-field">Driver: Stable</p>
      </div>
    </div>
  );
};

export default Tech;