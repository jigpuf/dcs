import React from 'react';
import Numbers from './inventory/numbers.js'
import InventoryLinks from './inventory/inventoryLinks.js'
import ButtonMaker from '../utilities/buttonMaker.js';

const Inventory = () => {
  
    const items = [
      {name: 'Part Numbers', slug: 'numbers', component: <Numbers />},
      {name: 'Links', slug: 'links', component: <InventoryLinks />},
    ]
    
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }


export default Inventory;
