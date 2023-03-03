import React from 'react';
import ClearPath from './smart/clearPath.js';
import Coriolis from './smart/coriolis.js';
import Er5k from './smart/er5k.js';
import Gas from './smart/gas.js';
import Heaters from './smart/heaters.js';
import Nd9 from './smart/nd9.js';
import Tugger from './smart/tugger.js';
import Level from './smart/level.js';
import AudioPlayer from './smart/audioPlayer.js';
import ButtonMaker from '../../utilities/buttonMaker.js';


const Smart = () => {
    const items = [
      {name: 'Open Path', slug: 'clearPath', component:<ClearPath /> },
      {name: 'Coriolis', slug: 'coriolis', component:<Coriolis /> },
      {name: 'ER5K', slug: 'er5k', component:<Er5k /> },
      {name: 'Gas Sensors', slug: 'gas', component:<Gas />},
      {name: 'Heaters', slug: 'heaters', component:<Heaters /> },
      {name: 'ND9', slug: 'nd9', component:<Nd9 /> },
      {name: 'Tugger', slug: 'tugger', component:<Tugger /> },
      {name: 'Level Transmitters', slug: 'level', component:<Level /> },
      {name: 'Audio Player', slug: 'audio', component:<AudioPlayer /> },
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Smart;
