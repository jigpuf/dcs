import React from 'react';
import Drager8000 from './gas/drager8000.js'
import Sensalert from './gas/sensalert.js'
import ButtonMaker from '../../../utilities/buttonMaker.js'

const Gas = () => {
    const items = [
        {name: 'Sensalert', slug: 'sensalert', component:<Sensalert /> },
        {name: 'Drager', slug: 'drager', component:<Drager8000 /> },
      ]
      return (
        <div>
          <ul>
          <ButtonMaker buttons={items}/>
          </ul>
        </div>
      )
      
    }

export default Gas;
