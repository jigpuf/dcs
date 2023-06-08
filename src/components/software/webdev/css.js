import React from 'react';
import CSSLectures from './css/cssLectures.js'
import CSSNotes from './css/cssNotes.js'
import Layout from './css/layout.js'
import Color from './css/color.js'
import Size from './css/size.js'
import Selectors from './css/selectors.js'
import Position from './css/position.js'
import Text from './css/text.js'
import Box from './css/box.js'
import FlexBox from './css/flexBox.js'

import ButtonMaker from '../../../utilities/buttonMaker.js';
import Placeholder from '../../../utilities/placeholder.js';

const CSS = () =>{
    const items = [
        {name: 'Lectures', slug: 'lectures', component:<CSSLectures />},
        {name: 'Notes', slug: 'notes', component:<CSSNotes />},
        {name: 'Layout', slug: 'layouts', component:<Layout />},
        {name: 'Color', slug: 'color', component:<Color />},
        {name: 'Size Units', slug: 'size', component:<Size />},
        {name: 'Selectors', slug: 'selectors', component:<Selectors />},
        {name: 'Position', slug: 'position', component:<Position />},
        {name: 'Text Properties', slug: 'text', component:<Text />},
        {name: 'Box Model', slug: 'box', component:<Box />},
        {name: 'FlexBox', slug: 'flex', component:<FlexBox />},

    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default CSS;