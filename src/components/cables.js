import React from 'react';
import Terminations from './cables/terminations.js'
import Waterproofing from './cables/waterproofing.js'
import Avionics from './cables/avi.js'
import ButtonMaker from '../utilities/buttonMaker.js';

const Cables = () => {
  
    const items = [
      {name: 'Terminations', slug: 'terminations', component:<Terminations />},
      {name: 'Waterproofing', slug: 'waterproofing', component:<Waterproofing />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>

        </ul>
      </div>
    )
    
  }

export default Cables;
