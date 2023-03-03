import React from 'react';
import Selection from './fuses/selection.js'
import ButtonMaker from '../../utilities/buttonMaker.js'

const Fuses = () => {
  
    const items = [
      {name: 'Selection', slug: 'selection', component:<Selection />},
      {name: 'Ordering', slug: 'ordering', },
      {name: 'Testing', slug: 'testing', },
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Fuses;
