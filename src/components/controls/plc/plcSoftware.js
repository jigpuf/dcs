import React from 'react';
import RSLinks from './plcSoftware/rsLinks.js';
import Studio5000 from './plcSoftware/studio5000.js';
import CCW from './plcSoftware/ccw.js';
import ButtonMaker from '../../../utilities/buttonMaker.js';

const PlcSoftware = () => {
    const items = [
      {name: 'RSLinks', slug: 'links', component:<RSLinks /> },
      {name: 'Studio5000', slug: 'studio', component:<Studio5000 />},
      {name: 'CCW', slug: 'ccw', component:<CCW />},
    ]
        return (
          <div>
            <ul>
            <ButtonMaker buttons={items}/>
            </ul>
          </div>
        )
        
      }

export default PlcSoftware;
