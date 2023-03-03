import React from 'react';
import Controls from './controls.js';
import Instruments from './instruments.js';
import Cables from './cables.js';
import Raceways from './raceways.js';
import Electronics from './electronics.js';
import Power from './power.js';
import Software from './software.js';
import Tools from './tools.js';
import Panels from './panels.js';
import Inventory from './inventory.js';
import Network from './network.js';
import Manager from './manager.js';
import Apps from './apps.js';



const MainSection = (props) => {
  const activeTab = props.activeTab;
  return (
    <div className="main">
      {activeTab === 'controls' && <Controls />}
      {activeTab === 'instruments' && <Instruments />}
      {activeTab === 'cables' && <Cables />}
      {activeTab === 'raceways' && <Raceways />}
      {activeTab === 'electronics' && <Electronics />}
      {activeTab === 'power' && <Power />}
      {activeTab === 'networking' && <Network />}
      {activeTab === 'software' && <Software />}
      {activeTab === 'tools' && <Tools />}
      {activeTab === 'panels' && <Panels />}
      {activeTab === 'inventory' && <Inventory />}
      {activeTab === 'manage' && <Manager />}
      {activeTab === 'apps' && <Apps />}

    </div>
  );
};

export default MainSection;

