import React from 'react';
import DcDistro from './power/dcDistro.js'
import Concepts from './power/concepts.js'
import Transformers from './power/transformers.js'
import Panels from './power/panels.js'
import ButtonMaker from '../utilities/buttonMaker.js';
import Placeholder from '../utilities/placeholder.js';


const Power = () => {

    const items = [
      {name: 'DC Distribution', slug: 'dc', component:<DcDistro />},
      {name: 'Power concepts', slug: 'concepts', component:<Concepts />},
      {name: 'Transformers', slug: 'transformers', component:<Transformers /> },
      {name: 'Switches', slug: 'switches', component:<Placeholder /> },
      {name: 'Panels', slug: 'panels' , component:<Panels />},
      {name: 'Codes', slug: 'codes', component:<Placeholder /> },
      {name: 'ATS Function', slug: 'ats', component:<Placeholder />},
      {name: 'Grounding Systems', slug: 'grounding', component:<Placeholder />},
      {name: 'Shielding', slug: 'shielding', component:<Placeholder />},
      {name: 'VFD', slug: 'vfd', component:<Placeholder />},
      {name: 'Circuit Protection', slug: 'protect', component:<Placeholder />},
      {name: 'Isolation', slug: 'isolation', component:<Placeholder />},
      {name: 'Transient voltage', slug: 'protect', component:<Placeholder />},
      {name: 'Redundancy', slug: 'redundancy', component:<Placeholder />},


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
