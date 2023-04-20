import React from 'react';
import ButtonMaker from '../../../utilities/buttonMaker.js';
import HtmlSoftware from './html/htmlSoftware.js';
import HtmlFileStructure from './html/htmlFileStructure.js';
import HtmlBoilerPlate from './html/htmlBoilerPlate.js';
import HtmlText from './html/htmlText.js';
import HtmlStructuredData from './html/htmlStructuredData.js';
import HtmlMedia from './html/htmlMedia.js';
import HtmlForms from './html/htmlForms.js';
import HtmlPublishing from './html/htmlPublishing.js';
import HtmlLectures from './html/htmlLectures.js';
import HtmlAttributes from './html/htmlAttributes.js'
import HtmlStorage from './html/htmlStorage.js'

//import Placeholder from '../../../utilities/placeholder.js';

const HTML = () =>{
    const items = [
        {name: 'Needed Software', slug: 'html', component:<HtmlSoftware />},
        {name: 'File Structure', slug: 'css', component:<HtmlFileStructure />},
        {name: 'Boiler Plate', slug: 'node', component:<HtmlBoilerPlate />},
        {name: 'Text', slug: 'react', component:<HtmlText />},
        {name: 'Structured data', slug: 'structure', component:<HtmlStructuredData />},
        {name: 'Media', slug: 'media', component:<HtmlMedia />},
        {name: 'Forms', slug: 'forms', component:<HtmlForms />},
        {name: 'Publishing', slug: 'publish', component:<HtmlPublishing />},
        {name: 'Lectures', slug: 'lectures', component:<HtmlLectures />},
        {name: 'Attributes', slug: 'attributes', component:<HtmlAttributes />},
        {name: 'Storage', slug: 'storage', component:<HtmlStorage />},
    ];
    return(
        <div>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default HTML;