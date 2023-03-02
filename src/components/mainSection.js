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
import Training from './training.js';
import Inventory from './inventory.js';
import Network from './network.js';
import Links from './links.js';
import Apps from './apps.js';



/*
Since all the sections are rendering in the Main Section, we must import
all relevant files.  React from react must be in every file.  We are importing
the component with capital letters from the file with the path ./
*/

const MainSection = (props) => {
  const activeTab3 = props.activeTab2;
  //creates variable to contain the props.activeTab2 value from App.js
  return (
    <div className="mainSection">
      {activeTab3 === 'controls' && <Controls />}
      {activeTab3 === 'instruments' && <Instruments />}
      {activeTab3 === 'cables' && <Cables />}
      {activeTab3 === 'raceways' && <Raceways />}
      {activeTab3 === 'electronics' && <Electronics />}
      {activeTab3 === 'power' && <Power />}
      {activeTab3 === 'networking' && <Network />}
      {activeTab3 === 'software' && <Software />}
      {activeTab3 === 'tools' && <Tools />}
      {activeTab3 === 'training' && <Training />}
      {activeTab3 === 'panels' && <Panels />}
      {activeTab3 === 'inventory' && <Inventory />}
      {activeTab3 === 'links' && <Links />}
      {activeTab3 === 'apps' && <Apps />}




    </div>
  );
};
/*
If the active tab prop from App.js ==== the given value,and the following
component exists, then it will call the component.
*/
export default MainSection;
/*
the export default is what will export if the component in the file is not
specified.
*/
