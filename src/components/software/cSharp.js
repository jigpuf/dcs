import React from 'react';
import Setup from './cSharp/setup.js'
import Introduction from './cSharp/introduction.js'
import Abstraction from './cSharp/abstraction.js'
import Encapsulation from './cSharp/encapsulation.js'
import Inheritance from './cSharp/inheritance.js'
import Polymorphism from './cSharp/polymorphism.js'
import Final from './cSharp/final.js'
import Conclusion from './cSharp/conclusion.js'
import CSharpVideos from './cSharp/cSharpVideos.js'

import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';

const CSharp = () =>{
    const items = [
        {name: 'Setup', slug: 'setup', component:<Setup />},
        {name: '1.Introduction', slug: 'introduction', component:<Introduction />},
        {name: '2.Abstraction', slug: 'abstraction', component:<Abstraction />},
        {name: '3.Encapsulation', slug: 'encapsulation', component:<Encapsulation />},
        {name: '4.Inheritance', slug: 'inheritance', component:<Inheritance />},
        {name: '5.Polymorphism', slug: 'polymorphism', component:<Polymorphism />},
        {name: '6.Final Project', slug: 'final', component:<Final />},
        {name: '7.Conclusion', slug: 'conclusion', component:<Conclusion />},
        {name: 'Videos', slug: 'videos', component:<CSharpVideos />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default CSharp;