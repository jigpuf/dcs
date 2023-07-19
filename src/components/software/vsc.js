import React from 'react'
import VSCExtentions from './vsc/vscExtensions.js'
import ButtonMaker from '../../utilities/buttonMaker'
import Placeholder from '../../utilities/placeholder'
const VSC = () => {
    const items = [
        {name: 'Extensions', slug: 'extensions', component:<VSCExtentions />},
        {name: 'Keyboard Shortcuts', slug: 'shortcuts', component:<Placeholder />},
        {name: 'Settings', slug: 'settings', component:<Placeholder />},

    ];
    return (
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
}

export default VSC;