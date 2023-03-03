import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker';

const Video = () => {

    const items = [
      {name: 'NXWitness', slug: 'nx',},
      {name: 'Camera Viewer sharex', slug: 'viewer',},
      {name: 'Rack Tables', slug: 'tables',},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Video;
