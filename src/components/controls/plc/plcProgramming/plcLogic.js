import React from 'react';
import DigitalIO from './plcLogic/digitalIO.js'
import AnalogIO from './plcLogic/analogIO.js'
import ButtonMaker from '../../../../utilities/buttonMaker.js'


const Logic = () => {
    const items = [
      {name: 'Digital I/O', slug: 'digitalIO', component:<DigitalIO />},
      {name: 'Analog I/O', slug: 'analogIO', component:<AnalogIO />},
    ]
    return (
      <div>
        <ul>
          <ButtonMaker buttons={items}/>
        </ul>
      </div>
      )
      
    }
export default Logic;
