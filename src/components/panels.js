import React from 'react';
import Fuses from './panels/fuses.js'
import Breaker from './panels/breaker.js'
import Examples from './panels/examples.js'
import ButtonMaker from '../utilities/buttonMaker.js';

const Controls = () => {
    const items = [
      {name: 'Fuse', slug: 'fuse', component:<Fuses />},
      {name: 'Breaker', slug: 'breaker', component:<Breaker />},
      {name: 'Contactor', slug: 'contactor',},
      {name: 'Relay', slug: 'relay',},
      {name: 'Power Supply', slug: 'power',},
      {name: 'HOA Switches', slug: 'hoa' },
      {name: 'Terminals', slug: 'terminals' },
      {name: 'Current Transducers', slug: 'ct' },
      {name: 'Panel Examples', slug: 'examples', component:<Examples />},
      {name: 'Resisters', slug: 'resisters',},
      {name: '', slug: '',},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }


export default Controls;
