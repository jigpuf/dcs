import React from 'react';
import Carpentry from './build/carpentry.js'
import Electrical from './build/electrical.js'
import Flooring from './build/flooring.js'
import Plumbing from './build/plumbing.js'

import Masonry from './build/masonry.js'
import HVAC from './build/hvac.js';
import ButtonMaker from '../utilities/buttonMaker.js';
import Placeholder from '../utilities/placeholder.js';

const Build = () =>{
    const items = [
        {name: 'HVAC', slug: 'hvac', component:<HVAC />},
        {name: 'Carpentry', slug: 'carpentry', component:<Carpentry />},
        {name: 'Electrical', slug: 'electrical', component:<Electrical />},
        {name: 'Flooring', slug: 'flooring', component:<Flooring />},
        {name: 'Insulation', slug: 'insulation', component:<Placeholder />},
        {name: 'Pest Control', slug: 'pest', component:<Placeholder />},
        {name: 'Plumbing', slug: 'plumbing', component:<Plumbing />},
        {name: 'Masonry', slug: 'masonry', component:<Masonry />},
        {name: 'Painting', slug: 'painting', component:<Placeholder />},
        {name: 'Eficiency', slug: 'eficiency', component:<Placeholder />},
        {name: 'Home Plans', slug: 'plans', component:<Placeholder />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
}


export default Build;

