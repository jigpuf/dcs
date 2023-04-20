import React from 'react';
import Lectures from './plc/lectures.js'
import PlcProgramming from './plc/plcProgramming.js'
import Notes from './plc/notes.js'
import PlcSoftware from './plc/plcSoftware.js'
import PlcHardware from './plc/plcHardware.js'
import PlcCommunications from './plc/plcCommunications.js'
import PlcConfigure from './plc/plcConfigure.js'
import PlcProject from './plc/plcProject.js'
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';

const PLC = () =>{
    const items = [
        {name: 'Modules', slug: 'modules', component:<Placeholder />},
        {name: 'Chasis', slug: 'chasis', component:<Placeholder />},
        {name: 'Lectures', slug: 'lectures', component:<Lectures />},
        {name: 'Notes', slug: 'notes', component:<Notes />},
        {name: 'Hardware', slug: 'hardware', component:<PlcHardware /> },
        {name: 'Firmware', slug: 'firmware', component:<Placeholder />},
        {name: 'Software', slug: 'software', component:<PlcSoftware /> },
        {name: 'Configure', slug: 'configure', component:<PlcConfigure /> },
        {name: 'Programming', slug: 'programming', component:<PlcProgramming />},
        {name: 'Communications', slug: 'communications', component:<PlcCommunications />},
        {name: 'Project', slug: 'project', component:<PlcProject />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default PLC;