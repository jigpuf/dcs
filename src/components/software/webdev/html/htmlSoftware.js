import React from 'react';
import TableMaker from '../../../../utilities/tableMaker.js'

const HtmlNeededSoftware = () =>{
    const softwareHead=['Program','Purpose','Status Check','Download location',]
    const software = [
        {program:'Google Chrome', purpose:'Browser to render Webpage', status:'google>more>help>about', download:'google.com'},
        {program:'Visual Studio Code', purpose:'Text editor with bells and whistles', status:'', download:'code.visualstudio.com'},
        {program:'HTML Extensions', purpose:'Makes VSC work better with HTML', status:'Extensions menu', download:'Extensions menu'},
    ]
    return(
        <div>
            <h2>Needed Software</h2>
            <TableMaker head={softwareHead} array={software} tableType='simpleColumn'/>
        </div>
    );
    }

export default HtmlNeededSoftware;