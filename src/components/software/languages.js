import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';
import CPP from './languages/cpp.js';
import CSharp from './languages/cSharp.js';
import Python from './languages/python.js';

const Languages = () => {
    const items = [
        {name: 'C++', slug: 'cpp', component:<CPP />},
        {name: 'C#', slug: 'csharp', component:<CSharp />},
        {name: 'Python', slug: 'python', component:<Python />},
      ]
    return (
      <div>
            <ul>
                <ButtonMaker buttons={items}/>
            </ul>
      </div>
    );

}

export default Languages;
