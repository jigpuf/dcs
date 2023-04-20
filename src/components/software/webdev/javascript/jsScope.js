import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSScope = () =>{
    const items = [
        {name: 'Block scope', slug: 'block', component:<Placeholder />},
        {name: 'Local scope', slug: 'local', component:<Placeholder />},
        {name: 'Function scope', slug: 'function', component:<Placeholder />},
        {name: 'Global scope', slug: 'global', component:<Placeholder />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSScope;