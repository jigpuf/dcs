import React from 'react'
import TableMaker from '../../../utilities/tableMaker'

const ArduinoDataTypes = () =>{
    const typesHead =['Type','values','notes']
    const types=[
        {type:'Boolean', values:'0, 1, LOW, HIGH, true, false', notes:'',},
        {type:'Byte', values:'0 to 255', notes:'',},
        {type:'Integer', values:'-32768 to 32767', notes:'',},
        {type:'Long', values:'-2,147,483,648 to 2,147,483,647', notes:'',},
        {type:'Character', values:'single character', notes:'',},
        {type:'name?', values:'', notes:'',},

    ]
    return(
        <div>
            <h1>Arduino Data Types</h1>
            <TableMaker head={typesHead} array={types} tableType='simpleColumn' />
            <h2>Variables</h2>
            Can use numbers, letters, underscore in name.  cannot start with number
        </div>
    )
}

export default ArduinoDataTypes