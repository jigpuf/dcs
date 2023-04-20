import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';

const Raspberry = () =>{
    const items = [
        {name: 'Setup', slug: 'placeholder', component:<Placeholder />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default Raspberry;