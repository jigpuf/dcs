import React from 'react';
import VSCExtentions from '../../vsc/vscExtensions.js';
import TableMaker from '../../../../utilities/tableMaker.js'
import ButtonMaker from '../../../../utilities/buttonMaker.js';
const HtmlNeededSoftware = () =>{
    const softwareHead=['Program','Purpose','Status Check','Download location',]
    const software = [
        {program:'Google Chrome', purpose:'Browser to render Webpage', status:'google>more>help>about', download:'google.com'},
        {program:'Visual Studio Code', purpose:'Text editor with bells and whistles', status:'', download:'code.visualstudio.com'},
        {program:'VSC Extensions', purpose:'Makes VSC work better with HTML(live server, html, emmit)', status:'Extensions menu', download:'Extensions menu'},
    ]
    const items = [
        {name: 'VSC Extentions', slug: 'vsc', component:<VSCExtentions />},
    ];
    return(
        <div>
            <h2>Needed Software</h2>
            <TableMaker head={softwareHead} array={software} tableType='simpleColumn'/>
            <ButtonMaker buttons={items}/>
        </div>
    );
    }

export default HtmlNeededSoftware;