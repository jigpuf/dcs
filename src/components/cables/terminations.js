import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import MS from './terminations/ms.js'
import D38999 from './terminations/d38999.js'
import Coax from './terminations/coax.js'
import RJ45 from './terminations/rj45.js'
import Ribbon from './terminations/ribbon.js'
import Mouse from './terminations/mouse.js'
import DSUB from './terminations/dsub.js'
import M8 from './terminations/m8.js'



const Terminations = () => {
  const items = [
    {name: 'MS', slug: 'ms', component:<MS /> },
    {name: 'D38999', slug: 'd38', component:<D38999 /> },
    {name: 'Coax', slug: 'coax', component:<Coax /> },
    {name: 'RJ-45', slug: 'rj45', component:<RJ45 /> },
    {name: 'Ribbon', slug: 'ribbon', component:<Ribbon /> },
    {name: 'Mighty Mouse', slug: 'mouse', component:<Mouse /> },
    {name: 'D-Sub', slug: 'dsub', component:<DSUB /> },
    {name: 'M8', slug: 'm8', component:<M8 /> },

  ]
    return (
      <div>
        <ButtonMaker buttons={items}/>
     
      </div>
    );

}

export default Terminations;
