import React from 'react';
import DcDistro from './power/dcDistro.js'
import Concepts from './power/concepts.js'
import Transformers from './power/transformers.js'
import ButtonMaker from '../utilities/buttonMaker.js';


const Power = () => {

    const items = [
      {name: 'DC Distribution', slug: 'dc', component:<DcDistro />},
      {name: 'Power concepts', slug: 'concepts', component:<Concepts />},
      {name: 'Transformers', slug: 'transformers', component:<Transformers /> },
      {name: 'Switches', slug: 'switches' },
      {name: 'Panels', slug: 'panels' },
      {name: 'Codes', slug: 'codes' },
      {name: 'ATS Function', slug: 'ats',},
      {name: 'Grounding Systems', slug: 'grounding',},
      {name: 'Shielding', slug: 'shielding',},
      {name: 'VFD', slug: 'vfd',},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Power;
