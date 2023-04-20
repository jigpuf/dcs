import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';
//import Placeholder from '../../../utilities/placeholder.js';

const JSRef = () =>{
    const items = [
        {name: 'Dictionary', slug: 'dictionary', component:<Placeholder />},
        {name: 'External Libraries', slug: 'library', component:<Placeholder />},
        {name: 'Best Practices', slug: 'practices', component:<Placeholder />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSRef;