import React from 'react';
import PythonComments from './python/pythonComments.js'
import PythonDataTypes from './python/pythonDataTypes.js'
import PythonVariables from './python/pythonVariables.js'
import PythonScope from './python/pythonScope.js'
import PythonOperators from './python/pythonOperators.js'
import PythonControlFlow from './python/pythonControlFlow.js'
import PythonDebugging from './python/pythonDebugging.js'
import PythonReferences from './python/pythonReferences.js'
import ButtonMaker from '../../utilities/buttonMaker.js';



const Python = () =>{
    const items = [
        {name: 'Comments', slug: 'comments', component:<PythonComments />},
        {name: 'Data Types', slug: 'jsDataTypes', component:<PythonDataTypes />},
        {name: 'Variables', slug: 'jsVariables', component:<PythonVariables />},
        {name: 'Scope', slug: 'scope', component:<PythonScope />},
        {name: 'Operators', slug: 'jsoperators', component:<PythonOperators />},
        {name: 'Control Flow', slug: 'flow', component:<PythonControlFlow />},
        {name: 'Debugging', slug: 'jsDebugging', component:<PythonDebugging  />},
        {name: 'References', slug: 'references', component:<PythonReferences  />},  
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default Python;