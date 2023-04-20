import React from 'react';
import Break from './flow/breakStatement.js'
import If from './flow/if.js'
import Loops from './flow/loops.js'
import Operators from './flow/operators.js'
import Scope from './flow/scope.js'
import SwitchStatement from './flow/switchStatement.js'
import Ternary from './flow/ternary.js'

import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';
//import Placeholder from '../../../utilities/placeholder.js';

const JSFlow = () =>{
    const items = [
        {name: 'Break/return statements', slug: 'conditionals', component:<Break />},
        {name: 'If', slug: 'if', component:<If />},
        {name: 'Listeners', slug: 'listeners', component:<Placeholder />},
        {name: 'ASYNC', slug: 'async', component:<Placeholder />},
        {name: 'Loops', slug: 'loops', component:<Loops />},
        {name: 'Operators', slug: 'operator', component:<Operators />},
        {name: 'Scope', slug: 'scope', component:<Scope />},
        {name: 'Switch', slug: 'switch', component:<SwitchStatement />},
        {name: 'Ternary', slug: 'ternary', component:<Ternary />},
        
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSFlow;