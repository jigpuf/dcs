import React from 'react';
import Formic from './conditioners/formic.js'
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';


const Conditioners = () => {
    const items = [
        {name: 'Formic', slug: 'formic', component:<Formic /> },
        {name: 'FC-R1', slug: 'fcr1', component:<Placeholder /> },
    ]
    return (
      <div>
          <ButtonMaker buttons={items}/>
      </div>
    );
  }


export default Conditioners;