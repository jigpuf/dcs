import React from 'react';
import PlcProgramming from './plc/plcProgramming.js'
import PlcSoftware from './plc/plcSoftware.js'
import PlcHardware from './plc/plcHardware.js'
import PlcFirmware from './plc/plcFirmware.js'
import PlcCommunications from './plc/plcCommunications.js'
import PlcConfigure from './plc/plcConfigure.js'
import PlcProject from './plc/plcProject.js'
import ButtonMaker from '../../utilities/buttonMaker.js';

const PLC = () => {
    const items = [
      {name: 'Hardware', slug: 'hardware', component:<PlcHardware /> },
      {name: 'Firmware', slug: 'firmware', component:<PlcFirmware />},
      {name: 'Software', slug: 'software', component:<PlcSoftware /> },
      {name: 'Configure', slug: 'configure', component:<PlcConfigure /> },
      {name: 'Programming', slug: 'programming', component:<PlcProgramming />},
      {name: 'Communications', slug: 'communications', component:<PlcCommunications />},
      {name: 'Project', slug: 'project', component:<PlcProject />},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default PLC;
