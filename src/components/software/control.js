import React from 'react';
import Nimax from './control/nimax.js'
import Rockwell from './control/rockwell.js'
import NiControl from './control/nicontrol.js'
import ButtonMaker from '../../utilities/buttonMaker.js'

const Control = () => {
    const items = [
      {name: 'NIMAX', slug: 'nimax', component:<Nimax />},
      {name: 'Rockwell Automation', slug: 'rockwell', component:<Rockwell />},
      {name: 'NI Control Program', slug: 'control', component:<NiControl />},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Control;
