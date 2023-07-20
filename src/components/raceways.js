import React from 'react';
import Tray from './raceways/tray.js';
import Rigid from './raceways/rigid.js';
import Flex from './raceways/flex.js';
import EMT from './raceways/emt.js';

import ButtonMaker from '../utilities/buttonMaker.js';

const Raceways = () => {
    const items = [
      {name: 'Cable Tray', slug: 'tray', component:<Tray />},
      {name: 'Rigid', slug: 'rigid', component:<Rigid />},
      {name: 'Flex Seal', slug: 'flex', component:<Flex />},
      {name: 'EMT', slug: 'emt', component:<EMT />},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Raceways;
