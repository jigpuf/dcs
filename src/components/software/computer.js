import React from 'react';
import Office from './computer/office.js'
import Visio from './computer/visio.js'
import Labview from './computer/labview.js'
import ButtonMaker from '../../utilities/buttonMaker.js'


const Computer = () => {
    const items = [
      {name: 'Office', slug: 'office', component:<Office />},
      {name: 'Visio', slug: 'visio', component:<Visio />},
      {name:'Labview', slug:'labview', component:<Labview />},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Computer;
