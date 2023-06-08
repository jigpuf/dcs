import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';
import Javascript from './webdev/javascript.js';
import JSX from './webdev/jsx.js'
import HTML from './webdev/html.js';
import CSS from './webdev/css.js';
import Webpage from './webdev/webpage.js'



const Webdev = () =>{
    const items = [
        {name: 'HTML', slug: 'html', component:<HTML />},
        {name: 'CSS', slug: 'css', component:<CSS />},
        {name: 'Node', slug: 'node', component:<Placeholder />},
        {name: 'Javascript', slug: 'js', component:<Javascript />},
        {name: 'React', slug: 'react', component:<JSX />},
        {name: 'MongoDB', slug: 'mongo', component:<Placeholder />},
        {name: 'New Webpage', slug: 'webpage', component:<Webpage />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default Webdev;