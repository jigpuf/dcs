import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSDebugging = () =>{
    const items = [
        {name: 'Console', slug: 'console', component:<Placeholder />},
        {name: 'VS Code', slug: 'vsCode', component:<Placeholder />},
        {name: 'Errors', slug: 'error', component:<Placeholder />},
        {name: 'Throw/Try/Catch/Finally', slug: 'throw', component:<Placeholder />},
        {name: 'Debugger Keyword', slug: 'debugger', component:<Placeholder />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSDebugging;