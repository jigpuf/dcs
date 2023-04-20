import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';
//import Placeholder from '../../../utilities/placeholder.js';

const JSOperators = () =>{
    const items = [
        {name: 'Arithmetic', slug: 'arithmetic', component:<Placeholder />},
        {name: 'Bitwise', slug: 'bitwise', component:<Placeholder />},
        {name: 'Conditional', slug: 'conditional', component:<Placeholder />},
        {name: 'Assignment', slug: 'Asignment', component:<Placeholder />},
        {name: 'String', slug: 'string', component:<Placeholder />},
        {name: 'Comparison', slug: 'comparison', component:<Placeholder />},
        {name: 'Logical', slug: 'logical', component:<Placeholder />},
        {name: 'Ternary', slug: 'ternary', component:<Placeholder />},
        {name: 'Spread', slug: 'spread', component:<Placeholder />},
        {name: 'Function', slug: 'function', component:<Placeholder />},
        {name: 'Object', slug: 'object', component:<Placeholder />},
        {name: 'Scope', slug: 'scope', component:<Placeholder />},
        {name: 'Code Block', slug: 'block', component:<Placeholder />},
        {name: 'Order of Operations', slug: 'order', component:<Placeholder />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSOperators;