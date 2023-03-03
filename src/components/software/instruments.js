import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker';

const Instruments = () => {
    const items = [
      {name: 'ERTune', slug: 'ert',},
      {name: 'Sorrenson', slug: 'sorrenson',},
      {name: 'Cameras', slug: 'cameras',},
      {name: 'Prosense', slug: 'prosense',},
      {name: 'VFDs', slug: 'vfd',},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Instruments;
