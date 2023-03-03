import React from 'react';
import Rlc from './electronics/rlc.js';
import Wheatstone from './electronics/wheatstone.js';
import Components from './electronics/components.js';
import Protection from './electronics/protection.js';
import Logic from './electronics/logic.js';
import Ground from './electronics/ground.js';
import Pcb from './electronics/pcb.js';
import ButtonMaker from '../utilities/buttonMaker.js';

const Electronics = () => {


    const items = [
      {name: 'RLC Circuits/Power', slug: 'rlc', component:<Rlc />},
      {name: 'Wheatstone', slug: 'wheatstone', component:<Wheatstone /> },
      {name: 'Components', slug: 'components', component:<Components /> },
      {name: 'Circuit Protection', slug: 'protection', component:<Protection /> },
      {name: 'Digital/logic gates', slug: 'digital', component:<Logic /> },
      {name: 'Grounding', slug: 'isolation', component:<Ground /> },
      {name: 'PCBs', slug: 'pcb', component:<Pcb /> },
    ]
    
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Electronics;
