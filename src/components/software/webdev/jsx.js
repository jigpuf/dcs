import React from 'react'
import JSXFileStructure from './react/jsxFileStructure.js'
import Lectures from './react/lectures.js'
import Mine from './react/mine.js'
import Notes from './react/notes.js'
import Setup from './react/setup.js'

import ButtonMaker from '../../../utilities/buttonMaker.js'
import Placeholder from '../../../utilities/placeholder.js'

const JSX = () =>{
    const items = [
        {name: 'Software Requirements', slug: '', component:<Placeholder />},
        {name: 'Command Line', slug: '', component:<Placeholder />},
        {name: 'File Structure', slug: 'jsx', component:<JSXFileStructure />},
        {name: 'Useful Code', slug: '', component:<Placeholder />},
        {name: 'index.html', slug: '', component:<Placeholder />},
        {name: 'components', slug: '', component:<Placeholder />},
        {name: 'utilities', slug: '', component:<Placeholder />},
        {name: 'App.css, index.css', slug: '', component:<Placeholder />},
        {name: 'App.js', slug: '', component:<Placeholder />},
        {name: 'index.js', slug: '', component:<Placeholder />},
        {name: 'package-lock.jso', slug: '', component:<Placeholder />},
        {name: 'package.json', slug: '', component:<Placeholder />},
        {name: 'Lectures', slug: 'lectures', component:<Lectures />},
        {name: 'Mine', slug: 'mine', component:<Mine />},
        {name: 'Notes', slug: 'notes', component:<Notes />},
        {name: 'Setup', slug: 'setup', component:<Setup />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default JSX;