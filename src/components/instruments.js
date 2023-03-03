import React from 'react';
import Smart from './instruments/smart.js';
import Dumb from './instruments/dumb.js';
import ButtonMaker from '../utilities/buttonMaker.js';

const Instruments = () => {

    const items = [
      {name: 'Smart Instruments', slug: 'smart', component:<Smart />},
      {name: 'Dumb Instruments', slug: 'dumb', component:<Dumb />},
    ]
    
    return (
      <div>
      <ul>
      <ButtonMaker buttons={items}/>
      </ul>
      </div>
    )
  
  }


export default Instruments;
