import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSGraphics = () =>{
    const items = [
        {name: 'Canvas', slug: 'canvas', component:<Placeholder />},
        {name: 'Plotty', slug: 'plotty', component:<Placeholder />},
        {name: 'Chart', slug: 'chart', component:<Placeholder />},
        {name: 'Google Chart', slug: 'google', component:<Placeholder />},
        {name: 'D3', slug: 'd3', component:<Placeholder />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSGraphics;