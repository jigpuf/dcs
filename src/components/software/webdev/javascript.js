import React from 'react';
import ButtonMaker from '../../../utilities/buttonMaker.js';
import JSAdding from './javascript/jsAdding.js';
import JSComments from './javascript/jsComments.js';
import JSDataTypes from './javascript/jsDataTypes.js';
import JSVariables from './javascript/jsVariables.js';
import JSScope from './javascript/jsScope.js';
import JSOperators from './javascript/jsOperators.js';
import JSFlow from './javascript/jsFlow.js';
import JSDebugging from './javascript/jsDebugging.js';
import JSDom from './javascript/jsDom.js';
import JSExternal from './javascript/jsExternal.js';
import JSGraphics from './javascript/jsGraphics.js';
import JSRef from './javascript/jsRef.js';
import JSExamples from './javascript/jsExamples.js'
import Lectures from './javascript/lectures.js'
import JsBasics from './javascript/jsBasics.js'

import Placeholder from '../../../utilities/placeholder.js';
//import Placeholder from '../../../utilities/placeholder.js';

const Javascript = () =>{
    const items = [
        {name: 'Adding JS', slug: 'adding', component:<JSAdding />},
        {name: 'Comments', slug: 'comments', component:<JSComments />},
        {name: 'Data Types', slug: 'jsDataTypes', component:<JSDataTypes />},
        {name: 'Variables', slug: 'jsVariables', component:<JSVariables />},
        {name: 'Scope', slug: 'scope', component:<JSScope />},
        {name: 'Operators', slug: 'jsoperators', component:<JSOperators />},
        {name: 'Control Flow', slug: 'flow', component:<JSFlow />},
        {name: 'Debugging', slug: 'jsDebugging', component:<JSDebugging />},
        {name: 'DOM Manipulation', slug: 'dom', component:<JSDom />},
        {name: 'External Data', slug: 'external', component:<JSExternal />},
        {name: 'Graphics', slug: 'graphics', component:<JSGraphics />},
        {name: 'References', slug: 'references', component:<JSRef />},  
        {name: 'Examples', slug: 'examples', component:<JSExamples />},  
        {name: 'Event Attributes', slug: 'event', component:<Placeholder />},
        {name: 'Lectures', slug: 'lectures', component:<Lectures />},
        {name: 'Basics', slug: 'basics', component:<JsBasics />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default Javascript;