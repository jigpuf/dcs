import React from 'react';
import APIs from './external/apis.js'
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSExternal = () =>{
    const items = [
        {name: 'Web APIs', slug: 'api', component:<APIs />},
        {name: 'JSON', slug: 'json', component:<Placeholder />},
        {name: 'External Libraries', slug: 'libraries', component:<Placeholder />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSExternal;