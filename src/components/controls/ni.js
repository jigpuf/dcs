import React from 'react';
import NiModuleSwap from './ni/niModuleSwap.js'
import NiHardware from './ni/niHardware.js'
import NiCommunications from './ni/niCommunications.js'
import Scb100 from './ni/scb100.js'
import ButtonMaker from '../../utilities/buttonMaker.js';

const Ni = () => {
    const items = [
      {name: 'Module Swap', slug: 'niModuleSwap', component:<NiModuleSwap /> },
      {name: 'Hardware', slug: 'niHardware', component:<NiHardware /> },
      {name: 'Communications', slug: 'niCommunications', component:<NiCommunications /> },
      {name: 'SCB100', slug: 'scb', component:<Scb100 /> },
      ]
      return (
        <div>
          <ul>
          <ButtonMaker buttons={items}/>
          </ul>
        </div>
      )
      
    }

export default Ni;
