import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSComments = () =>{
    const items = [
        {name: 'Line Comment', slug: 'line', component:<Placeholder />},
        {name: 'Block Comment', slug: 'block', component:<Placeholder />},
        {name: 'HTML Comment', slug: 'html', component:<Placeholder />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSComments;