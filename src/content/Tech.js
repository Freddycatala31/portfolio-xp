import React, { useState } from 'react';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('tecnologias');

  return (
    <div style={{ padding: '10px' }}>
      {/* Menú de Pestañas */}
      <menu role="tablist" className="multi-rows">
        <li
          role="tab"
          aria-selected={activeTab === 'tecnologias'}
          onClick={() => setActiveTab('tecnologias')}
          style={{ padding: '8px 12px', marginRight: '12px' }}
        >
          <a href="#tecnologias">Tecnologías</a>
        </li>
        <li
          role="tab"
          aria-selected={activeTab === 'tools'}
          onClick={() => setActiveTab('tools')}
          style={{ padding: '8px 12px', marginRight: '12px' }}
        >
          <a href="#tools">Tools</a>
        </li>
      </menu>

      {/* Contenido de las pestañas */}
      <div className="window" role="tabpanel" style={{ height: '200px' }}>
        <div className="window-body">
          
          {activeTab === 'tecnologias' && (
            <div>
              <p>Tecnologías</p>
              <ul className="tree-view">
                <li>Java</li>
                <li>MySQL</li>
                <li>HTML / CSS / JavaScript</li>
                <li>Unity</li>
                <li>Python</li>
                <li>Arduino(C)</li>
                <li>Sistemas Operativos - Windows/Linux</li>
              </ul>
            </div>
          )}


          {activeTab === 'tools' && (
            <div>
              <p>Herramientas de desarrollo:</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button >Visual Studio Code</button>
                <button >Git</button>
                <button >Figma</button>
                <button >Trello</button>
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