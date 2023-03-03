import React from 'react';
import Osi from './network/osi.js'
import It from './network/it.js'
import ButtonMaker from '../utilities/buttonMaker.js';

const Networking = () => {

    const items = [
      {name: 'OSI Model', slug: 'osi', component:<Osi />},
      {name: 'Troubleshoot IT', slug: 'it', component:<It />},
    ]
    
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
  }

export default Networking;
