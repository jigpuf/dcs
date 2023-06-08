import React from 'react';
import ArduinoCommands from './arduino/arduinoCommands.js'

import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';

const ArduinoSoftware = () => {
    const items = [
      {name: 'Data Types', slug: 'types', component:<Placeholder />},
      {name: 'Program sections', slug: 'sections', component:<Placeholder />},
      {name: 'Commands', slug: 'comands', component:<ArduinoCommands />},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        
        </ul>
      </div>
    )
    
  }

export default ArduinoSoftware;