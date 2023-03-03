import React from 'react';
import ButtonMaker from './utilities/buttonMaker.js'

const Data = () => {
    const items = [
      {name: 'Borg', slug: 'borg',},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Data;
