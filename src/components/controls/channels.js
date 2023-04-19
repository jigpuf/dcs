import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';


const Channels = () => {
    const items = [
        {name: 'Analog In', slug: 'ai', component:<Placeholder /> },
        {name: 'Analog Out', slug: 'ao', component:<Placeholder /> },
        {name: 'Digital Out (K)', slug: 'k', component:<Placeholder /> },
        {name: 'RTD', slug: 'rtd', component:<Placeholder /> },
        {name: 'Load Cell', slug: 'load', component:<Placeholder /> },
        {name: 'Bridge', slug: 'bridge', component:<Placeholder /> },
        {name: 'TC', slug: 'tc', component:<Placeholder /> },
        {name: 'Frequency', slug: 'frequency', component:<Placeholder /> },
        {name: 'Counter', slug: 'counter', component:<Placeholder /> },

    ]
    return (
      <div>
          <ButtonMaker buttons={items}/>
      </div>
    );
  }


export default Channels;
